import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true  // Changed from require to required
    },
    email: {
        type: String,
        required: true  // Changed from require to required
    },
    password: {
        type: String,
        required: true  // Changed from require to required
    }
}, { timestamps: true });


export const User = mongoose.model("User", userSchema);