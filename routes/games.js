import express from 'express';
import {
    checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists,
    createGame,
    deleteGame,
    findAllGames,
    findGameById,
    updateGame
} from "../middlewares/games.js";
import {sendAllGames, sendGameById, sendGameCreated, sendGameDeleted, sendGameUpdated} from "../controllers/games.js";

const gamesRouter = express.Router();

gamesRouter.get('/games', findAllGames, sendAllGames)
gamesRouter.get('/games/:id', findGameById, sendGameById)
gamesRouter.post('/games', findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    createGame,
    sendGameCreated
)
gamesRouter.delete("/games/:id", findGameById, deleteGame, sendGameDeleted)
gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    updateGame,
    sendGameUpdated
)

export default gamesRouter;