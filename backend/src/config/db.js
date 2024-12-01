const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const dbURI = process.env.MONGO_URI; // Ensure this is loaded
        if (!dbURI) {
            throw new Error("MONGO_URI is undefined. Check your .env file.");
        }

        // Connect to MongoDB without deprecated options
        await mongoose.connect(dbURI);
        console.log("MongoDB connected...");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
