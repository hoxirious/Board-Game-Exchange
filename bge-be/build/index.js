"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.js
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_service_1 = require("./services/database.service");
const boardgame_route_1 = require("./routes/boardgame.route");
const post_route_1 = require("./routes/post.route");
const message_route_1 = require("./routes/message.route");
const user_route_1 = require("./routes/user.route");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
(0, database_service_1.connectToDatabase)()
    .then(() => {
    app.get('/ping', (_req, res) => {
        res.send('pong');
    });
    app.use(function (req, res, next) {
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
    app.use("/boardGames", boardgame_route_1.boardGameRouter);
    app.use("/posts", post_route_1.postRouter);
    app.use("/messages", message_route_1.messageRouter);
    app.use("/users", user_route_1.userRouter);
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
