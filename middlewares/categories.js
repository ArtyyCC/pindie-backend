import {categoryModel} from "../models/category.js";
import {games} from "../models/game.js";


const findAllCategories = async (request, response, next) => {
    request.categoriesArray = await categoryModel.find({});
    next();
}

const createCategory = async (request, response, next) => {
    console.log("POST /categories");
    try {
        console.log(request.body);
        request.category = await categoryModel.create(request.body);
        next();
    } catch (error) {
        response.status(400).send("Error creating category");
    }
};

const deleteCategory = async (request, response, next) => {
    try {
        request.category = await categoryModel.findByIdAndDelete(request.params.id);
        next();
    } catch (error) {
        response.status(400).send("Error deleting category");
    }
    next();
};

const findCategoryById = async (request, response, next) => {
    try {
        request.category = await categoryModel.findById(request.params.id);
        next();
    } catch (error) {
        response.status(404).send({ message: "Category not found" });
    }
};

export {
    findAllCategories,
    createCategory,
    findCategoryById,
    deleteCategory
}