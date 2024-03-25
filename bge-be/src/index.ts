// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./services/database.service"
import { boardGameRouter } from "./routes/boardgame.route";
import { postRouter } from "./routes/post.route";
import {messageRouter} from "./routes/message.route";
import {userRouter} from "./routes/user.route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

connectToDatabase()
    .then(() => {
        app.get('/ping', (_req: Request, res: Response) => {
            res.send('pong');
        });
        app.use("/boardGames", boardGameRouter);
        app.use("/posts", postRouter);
        app.use("/messages", messageRouter);
        app.use("/users", userRouter);
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
