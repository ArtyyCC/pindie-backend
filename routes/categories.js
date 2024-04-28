import express from 'express';
import {sendCategoryCreated, sendAllCategories} from "../controllers/categories.js";
import {createCategory, findAllCategories} from "../middlewares/categories.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post("/categories", findAllCategories, createCategory, sendCategoryCreated);

export default categoriesRouter;

