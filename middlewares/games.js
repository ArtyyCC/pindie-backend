import {games} from "../models/game.js";


const findAllGames = async (request, response, next) => {
    request.gamesArray = await games.find({})
        .populate("categories")
        .populate({
            path: "users",
            select: "-password",
        });
    next();
};

const createGame = async (request, response, next) => {
    try {
        console.log(request.body);
        request.game = await games.create(request.body);
        next();
    } catch (error) {
        response.status(400).send("Error creating game");
    }
    next();
};

const findGameById = async (request, response, next) => {
    try {
        request.game = await games.findById(request.params.id);
        next();
    } catch (error) {
        response.status(404).send({ message: "Game not found" });
    }
};

const deleteGame = async (request, response, next) => {
    try {
        request.game = await games.findByIdAndDelete(request.params.id);
        next();
    } catch (error) {
        response.status(400).send("Error deleting game");
    }
    next();
};


export {
    findAllGames,
    createGame,
    findGameById,
    deleteGame
};
