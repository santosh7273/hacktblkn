import express from 'express';
import dotenv from 'dotenv';
import connectDb from './database/db.js';
import cookieParser from 'cookie-parser';
import cloudinary from "cloudinary";
import path from "path";
dotenv.config();



const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Fixed the typo
app.use(cookieParser());

// Root route with a response
// app.get("/", (req, res) => {
//     res.send("Welcome to the API ioho!");
// });

// Importing routes
import userRoutes from './routes/userRoutes.js';

// Using routes
app.use("/api/user", userRoutes);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

// Start server and connect to DB
app.listen(port, async () => {
    console.log(`Server running on port ${port}`);
    await connectDb(); // Ensure DB is connected before serving requests
});
