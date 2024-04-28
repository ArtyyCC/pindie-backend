import {categoryModel} from "../models/category.js";
import {userModel} from "../models/user.js";


const findAllCategories = async (req, res, next) => {
    req.categoriesArray = await categoryModel.find({});
    next();
}

export default findAllCategories;