import express from 'express';
import findAllGames from "../middlewares/games.js";
import sendAllGames from "../controllers/games.js";

const gamesRouter = express.Router();

gamesRouter.get('/games', findAllGames, sendAllGames)

export default gamesRouter;