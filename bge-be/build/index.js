"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.js
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_service_1 = require("./services/database.service");
const game_route_1 = require("./routes/game.route");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
(0, database_service_1.connectToDatabase)()
    .then(() => {
    app.use("/games", game_route_1.gamesRouter);
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
