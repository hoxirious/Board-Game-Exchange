import express, { Request, Response } from "express";
import {Post} from "../models/db.model";

export const postRouter = express.Router();

postRouter.use(express.json());

postRouter.get("/search", async (req: Request, res: Response) => {
    const title = req.query.title ? req.query.title : "";
    const location = req.query.location ? req.query.location : "";
    const category = req.query.category ? req.query.category : "";
    const condition = req.query.condition ? req.query.condition : "";

    let categoryArray: string[] = []
    if (typeof category === "string") {
        categoryArray = category.split(',');
    }

    try {
        const posts = await Post.find({
            'title': { "$regex": title, "$options": "i"  },
            'location': { "$regex": location, "$options": "i" },
            'category': { "$in": categoryArray },
            'condition': { "$regex": condition, "$options": "i" },
        }).exec()
        res.status(200).send(posts);
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send(`Posts could not be found`);
    }
});

postRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const posts = await Post.findById(id).exec()
        res.status(200).send(posts);
    } catch (error: any) {
        console.error(error.message);
        res.status(404).send(`Posts for id ${id} do not exist`);
    }
})

postRouter.post("/", async (req: Request, res: Response) => {
    try {
        const result = await Post.create(req.body);
        result
            ? res.status(201).send(result)
            : res.status(500).send("Failed to create a new post.");
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send("Failed to create a new post.");
    }
})

postRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updateReq = req.body
        const result = await Post.findByIdAndUpdate(id, updateReq)

        result
            ? res.status(200).send(result)
            : res.status(304).send(`Post with id: ${id} not updated`);
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send(`Post with id: ${id} not updated`);
    }
});

postRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const result = await Post.findByIdAndDelete(id)
        result
            ? res.status(202).send(result)
            : res.status(400).send(`Failed to remove post with id ${id}`);
    } catch (error: any) {
        console.error(error.message);
        res.status(404).send(`Post with id ${id} does not exist`);
    }
});
