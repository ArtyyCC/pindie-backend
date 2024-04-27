import express from 'express';
const mainRoute = express.Router();
import { promises as fs } from 'fs';

mainRoute.get("/", (req, res) => {
    fs.readFile("./public/index.html", "utf-8").then((data) => {
        res.header("Content-Type", "text/html").send(data);
    });
});

export default mainRoute