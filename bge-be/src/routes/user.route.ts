import express, { Request, Response } from "express";
import { User } from "../models/db.model";

export const userRouter = express.Router();

userRouter.use(express.json());

userRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const user = await User.findById(id).exec()
        res.status(200).send(user);
    } catch (error: any) {
        console.error(error.message);
        res.status(404).send(`User with id ${id} does not exist`);
    }
})

userRouter.post("/", async (req: Request, res: Response) => {
    try {
        const result = await User.create(req.body);
        result
            ? res.status(201).send(result)
            : res.status(500).send("Failed to create a new user.");
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send("Failed to create a new user.");
    }
})

userRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updateReq = req.body
        const result = await User.findByIdAndUpdate(id, updateReq)

        result
            ? res.status(200).send(result)
            : res.status(304).send(`User with id: ${id} not updated`);
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send(`User with id: ${id} not updated`);
    }
})

userRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const result = await User.findByIdAndDelete(id)
        result
            ? res.status(202).send(result)
            : res.status(400).send(`Failed to remove user with id ${id}`);
    } catch (error: any) {
        console.error(error.message);
        res.status(404).send(`User with id ${id} does not exist`);
    }
});