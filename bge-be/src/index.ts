// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./services/database.service"
import { gamesRouter } from "./routes/game.route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

connectToDatabase()
    .then(() => {
        app.use("/games", gamesRouter);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
