import express from 'express';
import {createGame, deleteGame, findAllGames, findGameById} from "../middlewares/games.js";
import {sendAllGames, sendGameCreated, sendGameDelete} from "../controllers/games.js";
import {games} from "../models/game.js";

const gamesRouter = express.Router();

gamesRouter.get('/games', findAllGames, sendAllGames)
gamesRouter.post('/games', findAllGames, createGame, sendGameCreated)
gamesRouter.delete("/games/:id", findGameById, deleteGame, sendGameDelete)

export default gamesRouter;