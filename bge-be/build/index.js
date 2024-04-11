"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
// src/index.js
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_service_1 = require("./services/database.service");
const boardgame_route_1 = require("./routes/boardgame.route");
const post_route_1 = require("./routes/post.route");
const message_route_1 = require("./routes/message.route");
const user_route_1 = require("./routes/user.route");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_output_json_1 = __importDefault(require("./swagger_output.json"));
const bodyParser = __importStar(require("body-parser"));
const socket_io_1 = require("socket.io");
const db_model_1 = require("./models/db.model");
const http_1 = require("http");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
const wsPort = process.env.WS_PORT || 8000;
app.use(bodyParser.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
const httpServer = (0, http_1.createServer)(app);
app.use((0, express_session_1.default)({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
    store: connect_mongo_1.default.create({
        mongoUrl: process.env.DB_CONN_STRING,
        dbName: "store-db",
        stringify: false,
    })
}));
(0, database_service_1.connectToDatabase)()
    .then(() => {
    app.get('/ping', (_req, res) => {
        res.send('pong');
    });
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_output_json_1.default));
    // app.use(function(req: Request, res: Response, next) {
    //
    //     // Website you wish to allow to connect
    //     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    //
    //     // Request methods you wish to allow
    //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    //
    //     // Request headers you wish to allow
    //     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    //
    //     // Set to true if you need the website to include cookies in the requests sent
    //     // to the API (e.g. in case you use sessions)
    //     res.setHeader('Access-Control-Allow-Credentials', 1);
    //
    //     // Pass to next layer of middleware
    //     next();
    // });
    app.use("/boardGames", boardgame_route_1.boardGameRouter);
    app.use("/posts", post_route_1.postRouter);
    app.use("/messages", message_route_1.messageRouter);
    app.use("/users", user_route_1.userRouter);
    const io = new socket_io_1.Server(httpServer);
    io.on('connection', (socket) => __awaiter(void 0, void 0, void 0, function* () {
        function joinRoom(socket, roomId) {
            if (socket.rooms.size > 1) {
                socket.rooms.forEach(room => {
                    if (room !== socket.id) {
                        socket.leave(room);
                    }
                });
            }
            ;
            socket.join(roomId);
            console.info(socket.id + ' joined room ' + roomId, socket.rooms);
        }
        console.log('a user connected');
        socket.on('join-room', (roomId) => {
            joinRoom(socket, roomId);
        });
        socket.on('message', (msg, roomId) => __awaiter(void 0, void 0, void 0, function* () {
            // persist message to database
            try {
                console.log("persisting message", msg);
                const result = yield db_model_1.Message.create(msg);
                console.log("Socket is in this room: ", socket.rooms);
                io.in(roomId).emit('message', msg);
                // broadcast message to room but sender
                console.log("Broadcasted message to room", roomId);
            }
            catch (error) {
                console.error(error);
                socket.emit('error', 'Failed to send message. Please try again later.');
            }
        }));
    }));
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
    httpServer.listen(wsPort, () => {
        console.log(`Websocket server started at http://localhost:${wsPort}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
