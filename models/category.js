import mongoose from "mongoose";

export const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minLength: 1,
        maxLength: 255,
        required: true,
    },
});

export const categoryModel = mongoose.model('category', categorySchema)
