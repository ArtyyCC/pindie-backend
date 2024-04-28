import {userModel} from "../models/user.js";


const findAllUsers = async (req, res, next) => {
    req.usersArray = await userModel.find({});
    next();
}

export default findAllUsers;