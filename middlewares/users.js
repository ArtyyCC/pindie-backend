import {userModel} from "../models/user.js";


const findAllUsers = async (request, response, next) => {
    request.usersArray = await userModel.find({});
    next();
}

const createUser = async (request, response, next) => {
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
        response.status(404).send({message: "User not found"});
    }
};

const deleteUser = async (request, response, next) => {
    try {
        request.user = await userModel.findByIdAndDelete(request.params.id);
        next();
    } catch (error) {
        response.status(400).send("Error deleting category");
    }
    next();
};

const updateUser = async (request, response, next) => {
    try {
        request.user = await userModel.findByIdAndUpdate(request.params.id, request.body);
        next();
    } catch (error) {
        response.status(400).send({message: "Error update user"});
    }
};

const checkEmptyName = async (request, response, next) => {
    if (!request.body.name) {
        response.status(400).send({message: "Enter the name of the category"});
    } else {
        next();
    }
};

const checkEmptyNameAndEmail = async (request, response, next) => {
    if (!request.body.username || !request.body.email) {
        response.status(400).send({message: "Enter your name and email"});
    } else {
        next();
    }
};

const checkIsUserExists = async (request, response, next) => {
    const isInArray = request.usersArray.find((user) => {
        return request.body.email === user.email;
    });
    if (isInArray) {
        response.status(400).send({message: "A user with this email address already exists"});
    } else {
        next();
    }
};

export {
    findAllUsers,
    createUser,
    findUserById,
    deleteUser,
    updateUser,
    checkEmptyName,
    checkEmptyNameAndEmail,
    checkIsUserExists
}