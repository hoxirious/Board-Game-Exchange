// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./services/database.service"
import { boardGameRouter } from "./routes/boardgame.route";
import { postRouter } from "./routes/post.route";
import { messageRouter } from "./routes/message.route";
import { userRouter } from "./routes/user.route";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./swagger_output.json";
import * as bodyParser from "body-parser";
import session from 'express-session';
import MongoStore from 'connect-mongo'

declare module 'express-session' {
    interface Session {
        userId: string;
        isLoggedIn: boolean;
    }
}

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.DB_CONN_STRING!,
        dbName: "store-db",
        stringify: false,
    })
}));

connectToDatabase()
    .then(() => {
        app.get('/ping', (_req: Request, res: Response) => {
            res.send('pong');
        });

        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

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
