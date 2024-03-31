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

        app.use(function (req: Request, res: Response, next) {

            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        
            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        
            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        
            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', 1);
        
            // Pass to next layer of middleware
            next();
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
