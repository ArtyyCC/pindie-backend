import express from 'express';
import {sendAllUsers, sendUserCreated, sendUserDelete} from "../controllers/users.js";
import {createUser, deleteUser, findAllUsers, findUserById} from "../middlewares/users.js";

const usersRouter = express.Router();

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post("/users", findAllUsers ,createUser, sendUserCreated);
usersRouter.delete("/users/:id", findUserById, deleteUser, sendUserDelete)

export default usersRouter;

