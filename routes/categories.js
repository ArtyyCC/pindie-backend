import express from 'express';
import {
    sendCategoryCreated,
    sendAllCategories,
    sendCategoryDeleted,
    sendCategoryById, sendCategoryUpdated
} from "../controllers/categories.js";
import {
    checkIsCategoryExists,
    createCategory,
    deleteCategory,
    findAllCategories,
    findCategoryById,
    updateCategory
} from "../middlewares/categories.js";
import {checkEmptyName} from "../middlewares/users.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post("/categories", findAllCategories, checkIsCategoryExists, checkEmptyName, createCategory, sendCategoryCreated);
categoriesRouter.delete("/categories/:id", findCategoryById, deleteCategory, sendCategoryDeleted);
categoriesRouter.put("/categories/:id", findCategoryById, checkEmptyName, updateCategory, sendCategoryUpdated)

export default categoriesRouter;

