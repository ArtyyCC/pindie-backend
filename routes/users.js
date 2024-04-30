import express from 'express';
import {sendAllUsers, sendUserById, sendUserCreated, sendUserDeleted, sendUserUpdated} from "../controllers/users.js";
import {
    checkEmptyNameAndEmail,
    checkIsUserExists,
    createUser,
    deleteUser,
    findAllUsers,
    findUserById,
    updateUser
} from "../middlewares/users.js";

const usersRouter = express.Router();

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById)
usersRouter.post("/users", findAllUsers, checkIsUserExists, checkEmptyNameAndEmail, createUser, sendUserCreated);
usersRouter.delete("/users/:id", findUserById, deleteUser, sendUserDeleted)
usersRouter.put("/users/:id", findUserById, checkEmptyNameAndEmail, updateUser, sendUserUpdated)

export default usersRouter;

