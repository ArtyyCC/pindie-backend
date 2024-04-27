import categories from "../models/category.js"

const findAllCategories = async (req, res, next) => {
    req.categoriesArray = await categories.find({});
    next();
}

export default findAllCategories;