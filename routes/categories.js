import express from 'express';
import sendAllCategories from "../controllers/categories.js";
import findAllCategories from "../middlewares/categories.js";
const categoriesRouter = express.Router();

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);

export default categoriesRouter;

