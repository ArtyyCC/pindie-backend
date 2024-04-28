import {categoryModel} from "../models/category.js";


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
    findCategoryById
}