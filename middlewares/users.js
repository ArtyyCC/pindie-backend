import users from "../models/user.js"
const findAllUsers = async (req, res, next) => {
    req.usersArray = await users.find({});
    next();
}

export default findAllUsers;