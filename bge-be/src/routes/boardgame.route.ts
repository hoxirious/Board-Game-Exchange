import express, {Request, Response} from "express";
import {BoardGame} from "../models/db.model";

export const boardGameRouter = express.Router();

boardGameRouter.use(express.json());

boardGameRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const boardGames = await BoardGame.find().exec()
        res.status(200).send(boardGames);
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Board games could not be found");
    }
});

boardGameRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const boardGame = await BoardGame.findById(id).exec()
        res.status(200).send(boardGame);
    } catch (error: any) {
        console.error(error.message);
        res.status(404).send(`Board game with id ${id} does not exist`);
    }
});

boardGameRouter.get("/titles/:title", async (req: Request, res: Response) => {
    const title = req?.params?.title;

    try {
        const boardGame = await BoardGame.findOne({'title': { "$regex": title, "$options": "i" }})
        res.status(200).send(boardGame);
    } catch (error: any) {
        console.error(error.message);
        res.status(404).send(`Board game with title ${title} does not exist`);
    }
});

boardGameRouter.get("/categories/:category", async (req: Request, res: Response) => {
    const category = req?.params?.category;

    try {
        const boardGames = await BoardGame.find({'category': { "$regex": category, "$options": "i" }})
        res.status(200).send(boardGames);
    } catch (error: any) {
        console.error(error.message);
        res.status(404).send(`Board game with category ${category} does not exist`);
    }
});