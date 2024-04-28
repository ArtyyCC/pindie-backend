import mongoose from "mongoose";

export const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

export const categoryModel = mongoose.model('category', categorySchema)
