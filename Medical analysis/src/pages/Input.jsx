import { useState } from "react";

const Input = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [symptom, setSymptom] = useState("");

  return (
    <div className="p-4 border rounded-xl shadow-md bg-white max-w-md mx-auto mt-6">
      <label className="flex items-center space-x-3 text-lg font-medium">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="w-5 h-5 text-blue-600 rounded focus:ring-0"
        />
        <span>Add custom symptom</span>
      </label>

      {isChecked && (
        <input
          type="text"
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
          placeholder="Enter symptom..."
          className="mt-4 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      )}
    </div>
  );
}

export default Input;
