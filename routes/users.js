import express from 'express';
import {sendAllUsers, sendUserCreated} from "../controllers/users.js";
import {createUser, findAllUsers} from "../middlewares/users.js";

const usersRouter = express.Router();


usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post("/users", findAllUsers ,createUser, sendUserCreated);

export default usersRouter;

