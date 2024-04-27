import express from 'express';
import { PORT } from './config.js';
import { cors } from './middlewares/cors.js';
import path from 'path';
import { fileURLToPath } from 'url';
import mainRoute from './routes/main.js';
import bodyParser from "body-parser";
import connectToDatabase from "./database/connect.js";
import usersRouter from "./routes/users.js";
import categoriesRouter from "./routes/categories.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRoute,
    categoriesRouter,
    usersRouter
);



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});