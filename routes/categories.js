import express from 'express';
import {sendCategoryCreated, sendAllCategories, sendCategoryDelete} from "../controllers/categories.js";
import {createCategory, deleteCategory, findAllCategories, findCategoryById} from "../middlewares/categories.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post("/categories", findAllCategories, createCategory, sendCategoryCreated);
categoriesRouter.delete("/categories/:id", findCategoryById ,deleteCategory, sendCategoryDelete);

export default categoriesRouter;

