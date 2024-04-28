import {userModel} from "../models/user.js";


const findAllUsers = async (request, response, next) => {
    request.usersArray = await userModel.find({});
    next();
}

const createUser = async (request, response, next) => {
    console.log("POST /users");
    try {
        console.log(request.body);
        request.user = await userModel.create(request.body);
        next();
    } catch (error) {
        response.status(400).send("Error creating user");
    }
};

const findUserById = async (request, response, next) => {
    try {
        request.user = await userModel.findById(request.params.id);
        next();
    } catch (error) {
        response.status(404).send({ message: "User not found" });
    }
};

export {
    findAllUsers,
    createUser,
    findUserById
}