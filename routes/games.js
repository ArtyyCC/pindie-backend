import express from 'express';
import {createGame, findAllGames} from "../middlewares/games.js";
import {sendAllGames, sendGameCreated} from "../controllers/games.js";

const gamesRouter = express.Router();

gamesRouter.get('/games', findAllGames, sendAllGames)
gamesRouter.post('/games', findAllGames, createGame, sendGameCreated)

export default gamesRouter;