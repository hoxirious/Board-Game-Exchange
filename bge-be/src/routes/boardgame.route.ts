import express, {Request, Response} from "express";
import {BoardGame} from "../models/db.model";

export const boardGameRouter = express.Router();

boardGameRouter.use(express.json());

boardGameRouter.get("/", async (_req: Request, res: Response) => {
    /**
     #swagger.tags = ['BoardGames']
     #swagger.responses[200] = {
        description: 'Successfully got a list of board games',
        schema: { $ref: "#/components/schemas/BoardGameList" }
     },
     #swagger.responses[500] = {
         description: 'Failed to get a list of board games',
         schema: { msg: 'Board games could not be found' }
     }
     */

    try {
        const boardGames = await BoardGame.find().exec()
        res.status(200).send(boardGames);
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send({msg: "Board games could not be found"});
    }
});

boardGameRouter.get("/:id", async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['BoardGames']
     #swagger.responses[200] = {
         description: 'Successfully got a board game by id',
         schema: { $ref: "#/components/schemas/BoardGame" }
     },
     #swagger.responses[404] = {
         description: 'Failed to get board game by id',
         schema: { msg: 'Board game with id does not exist' }
     }
     */

    const id = req?.params?.id;

    try {
        const boardGame = await BoardGame.findById(id).exec()
        res.status(200).send(boardGame);
    } catch (error: any) {
        console.error(error.message);
        res.status(404).send({msg: `Board game with id ${id} does not exist`});
    }
});

boardGameRouter.get("/titles/:title", async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['BoardGames']
     #swagger.responses[200] = {
         description: 'Successfully got a list of board games by title',
         schema: { $ref: "#/components/schemas/BoardGameList" }
     },
     #swagger.responses[404] = {
         description: 'Failed to get board game by title',
         schema: { msg: 'Board game with title does not exist' }
     }
     */

    const title = req?.params?.title;

    try {
        const boardGames = await BoardGame.find({
            'title': { "$regex": title, "$options": "i"  }
        }).exec();
        res.status(200).send(boardGames);
    } catch (error: any) {
        console.error(error.message);
        res.status(404).send({msg: `Board game with title ${title} does not exist`});
    }
});

boardGameRouter.get("/categories/:category", async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['BoardGames']
     #swagger.responses[200] = {
         description: 'Successfully got a list of board games by category',
         schema: { $ref: "#/components/schemas/BoardGameList" }
     },
     #swagger.responses[404] = {
         description: 'Failed to get a list of board games by category',
         schema: { msg: 'Board game with category does not exist' }
     }
     */

    const category = req?.params?.category;

    try {
        const boardGames = await BoardGame.find({'category': { "$regex": category, "$options": "i" }})
        res.status(200).send(boardGames);
    } catch (error: any) {
        console.error(error.message);
        res.status(404).send({msg: `Board game with category ${category} does not exist`});
    }
});