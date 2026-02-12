import mongoose, { Schema, model } from "mongoose";

export const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            index: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["founder", "admin"],
            default: "founder",
        },
    },
    { timestamps: true }
);

export const User = mongoose.models?.User || model("User", UserSchema);

