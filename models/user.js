import mongoose from "mongoose";


export const userSchema = new mongoose.Schema({
    username: {
        type: String,
        maxLength: 255,
        minLength: 1,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        maxLength: 255,
        minLength: 5,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        maxLength: 255,
        minLength: 1,
        trim: true,
        required: true
    },
});

export const userModel = mongoose.model('user', userSchema)
