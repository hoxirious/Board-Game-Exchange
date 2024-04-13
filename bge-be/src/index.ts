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
import { Server, Socket } from "socket.io";
import { Message, MessageType } from "./models/db.model";
import { createServer } from "http";
import cors from "cors";
import mongoose from "mongoose";
import session from 'express-session';
import MongoStore from 'connect-mongo'
import { imageRouter } from "./routes/image.route";

declare module 'express-session' {
    interface Session {
        userId: string;
        isLoggedIn: boolean;
    }
}

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 8080;
const wsPort = process.env.WS_PORT || 8000;



app.use(bodyParser.json(),);
// app.use(cors({
//     origin: "*",
//     methods: ["GET", "POST", "PUT", "DELETE"],
// }));
const httpServer = createServer(app);

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

        app.use(function(req: Request, res: Response, next) {

            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*');

            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', '*');

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

        const io = new Server(httpServer)

        io.on('connection', async(socket) => {
            function joinRoom(socket: Socket, roomId: string) {
                if (socket.rooms.size > 1) {
                    socket.rooms.forEach(room => {
                        if (room !== socket.id) {
                            socket.leave(room);
                        }
                    })
                };
                socket.join(roomId);

                console.info(socket.id + ' joined room ' + roomId, socket.rooms);
            }
            console.log('a user connected');
            socket.on('join-room', (roomId: string) => {
                joinRoom(socket, roomId);
            })
            socket.on('message', async (msg: MessageType, roomId: string) => {
                // persist message to database
                try {
                    console.log("persisting message", msg);
                    io.in(roomId).emit('message', msg);
                    // broadcast message to room
                    const result = await Message.create(msg);
                    console.log("Socket is in this room: ", socket.rooms);
                    console.log("Broadcasted message to room", roomId);
                }
                catch (error) {
                    console.error(error);
                    socket.emit('error', 'Failed to send message. Please try again later.');
                }
            })
        })

        app.use("/images", imageRouter);
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });

        httpServer.listen(wsPort, () => {
            console.log(`Websocket server started at http://localhost:${wsPort}`);
        })
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
