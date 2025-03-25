import mongoose from "mongoose";

const healthSchema = new mongoose.Schema(
    {
        // tie healthSchema to userSchema id (userId)  ///   /health/:id if req.params == userId then find user id
        userId: {
            type: mongoose.ObjectId,
            ref: "User",
        },
        heartHealth: {
            type: String, 
            enum: ["Good", "Bad"],  // Correct usage of enum with an array
            required: true,
        },
        cholesterol: {
            type: Number,
            required: true, 
        },
        inspectionRating: {
            type: String,  // Specify that bloodPressure is a String type
            enum: ["A", "B", "C"],  // Use enum with an array
            required: true,
        },
        obesity: {
            type: Boolean,
            required: true, 
        },
        diabetes: {
            type: Boolean,
            required: true, 
        },
    },
    {
        timestamps: true,
    });

// healthSchema.index({ userId: 1 });

// use -1 if you want it in descending order

export default mongoose.model("Health", healthSchema); // where mongoose creates the health model
