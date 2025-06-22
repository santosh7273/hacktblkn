import { useState } from "react";
import { marked } from "marked";
import { GoogleGenerativeAI } from "@google/generative-ai";

function MultiImageProcessing() {
  const [images, setImages] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState(`
You will be given multiple medical-related images.

Your task is to compare them and highlight the key differences or similarities in medical features observed in these images.

Provide a comprehensive analysis that covers:
- The key differences between images (condition, severity, appearance)
- Similarities and common patterns across the imasges
- Possible medical interpretations or diagnoses
- Recommendations for further testing or treatment priorities

Format your response in a clear, flowing narrative. Include an "Accuracy: XX%" at the end.
`);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const promises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result.split(",")[1];
          resolve({
            base64,
            type: file.type,
            name: file.name,
            preview: reader.result,
          });
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises).then((newImages) => {
      setImages((prevImages) => [...prevImages, ...newImages]);
    });
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const extractAccuracy = (text) => {
    const match = text.match(/Accuracy\s*[:：-]?\s*(\d+%)/i);
    return match ? match[1] : "";
  };

  const handleAnalyze = async () => {
    if (images.length < 2) {
      alert("Please upload at least 2 images for comparison");
      return;
    }

    setLoading(true);
    setResult(null);

    const apiKey = import.meta.env.VITE_GEMINI_API;
    if (!apiKey) {
      setResult({ error: "Gemini API key not found. Please check your environment variables." });
      setLoading(false);
      return;
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const imageParts = images.map((img) => ({
      inlineData: { mimeType: img.type, data: img.base64 },
    }));

    try {
      const resultStream = await model.generateContentStream({
        contents: [
          {
            role: "user",
            parts: [
              ...imageParts,
              { text: prompt },
            ],
          },
        ],
      });

      let fullText = "";
      for await (const chunk of resultStream.stream) {
        fullText += chunk.text();
      }

      setResult({
        content: marked(fullText),
        accuracy: extractAccuracy(fullText),
        rawText: fullText,
      });
    } catch (err) {
      console.error("Error during analysis:", err);
      setResult({ error: "Something went wrong while analyzing the images." });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white py-6 px-8">
          <h1 className="text-3xl font-bold">Medical Image Analysis</h1>
          <p className="mt-2 opacity-80">Upload multiple images to compare progression or changes</p>
        </div>

        {/* Image Upload Section */}
        <div className="p-8">
          <div className="mb-8">
            <div className="border-2 border-dashed border-blue-200 rounded-xl p-8 bg-blue-50 flex flex-col items-center justify-center transition-all hover:bg-blue-100">
              <label className="flex flex-col items-center cursor-pointer w-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" />
                </svg>
                <span className="text-xl font-medium text-blue-800 mb-2">Upload Medical Images</span>
                <span className="text-sm text-blue-600 mb-6 text-center">Select 2 or more images (X-rays, MRIs, scans) for comparison</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition shadow-md hover:shadow-lg transform hover:-translate-y-1">
                  Select Files
                </button>
              </label>
            </div>
          </div>

          {/* Image Preview Section */}
          {images.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Uploaded Images</h2>
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {images.length} {images.length === 1 ? 'image' : 'images'}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative group rounded-lg overflow-hidden shadow-md bg-white">
                    <div className="aspect-w-1 aspect-h-1">
                      <img
                        src={image.preview}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3">
                      <button
                        onClick={() => handleRemoveImage(index)}
                        className="bg-red-600 text-white p-2 rounded-full mb-2 shadow-lg"
                        aria-label="Remove image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <div className="p-3 border-t border-gray-100 bg-white">
                      <p className="text-sm text-gray-700 truncate font-medium">
                        {image.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Analyze Button */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleAnalyze}
                  disabled={loading || images.length < 2}
                  className={`px-8 py-4 rounded-lg font-semibold text-white text-lg shadow-md transform transition-all ${
                    loading || images.length < 2
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700 hover:shadow-lg hover:-translate-y-1"
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing Images...
                    </span>
                  ) : (
                    "Analyze & Compare Images"
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Results Section */}
          {result && !result.error && (
            <div className="mt-10 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Analysis Results</h2>
                {result.accuracy && (
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                    Confidence: {result.accuracy}
                  </span>
                )}
              </div>

              <div className="prose prose-lg max-w-none bg-white p-8 rounded-xl shadow-md border border-gray-100 text-[17px]">
                <div dangerouslySetInnerHTML={{ __html: result.content }} />
              </div>
            </div>
          )}

          {/* Error Message */}
          {result?.error && (
            <div className="mt-8 mb-10 p-6 bg-red-100 border-l-4 border-red-500 text-red-800 rounded-lg shadow-sm">
              <p className="font-semibold">Error:</p>
              <p className="text-xl">{result.error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MultiImageProcessing;
