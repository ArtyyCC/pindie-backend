import express from 'express';
import findAllUsers from "../middlewares/users.js";
import sendAllUsers from "../controllers/users.js";

const usersRouter = express.Router();


usersRouter.get("/users", findAllUsers, sendAllUsers);

export default usersRouter;

