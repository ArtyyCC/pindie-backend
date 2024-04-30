import mongoose from "mongoose";
import {userModel} from "./user.js";
import {categoryModel} from "./category.js";

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        maxLength: 255,
        minLength: 1,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        maxLength: 255,
        minLength: 1,
        required: true,
    },
    developer: {
        type: String,
        trim: true,
        maxLength: 255,
        minLength: 1,
        required: true
    },
    image: {
        type: String,
        trim: true,
        maxLength: 255,
        minLength: 1,
        required: true
    },
    link: {
        type: String,
        trim: true,
        maxLength: 255,
        minLength: 1,
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: userModel,
    }],
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: categoryModel,
    }]
});

export const games = mongoose.model('game', gameSchema)
