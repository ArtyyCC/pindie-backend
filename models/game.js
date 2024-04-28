import mongoose from "mongoose";
import {userModel} from "./user.js";
import {categoryModel} from "./category.js";

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    developer: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
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
