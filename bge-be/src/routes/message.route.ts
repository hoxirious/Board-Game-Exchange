import express, { Request, Response } from "express";
import { Message } from "../models/db.model";

export const messageRouter = express.Router();

messageRouter.use(express.json());

messageRouter.get("/:userId", async (req: Request, res: Response) => {
    const userId = req?.params?.userId;

    try {
        const receivedMessages = await Message.find({
            'receiverUserID': userId
        }).exec()

        const sentMessages = await Message.find({
            'senderUserID': userId,
        }).exec()

        const messages = receivedMessages.concat(sentMessages)

        const groupedMessages: { [postId: string]: { [externalUserId: string]: any[] } } = {};

        messages.forEach((message) => {
            if (!groupedMessages[message.postId!]) {
                groupedMessages[message.postId!] = {};
            }

            if (message.receiverUserID != userId) {
                if (!groupedMessages[message.postId!][message.receiverUserID!]) {
                    groupedMessages[message.postId!][message.receiverUserID!] = [];
                }
                groupedMessages[message.postId!][message.receiverUserID!].push(message);
            } else if (message.senderUserID != userId) {
                if (!groupedMessages[message.postId!][message.senderUserID!]) {
                    groupedMessages[message.postId!][message.senderUserID!] = [];
                }
                groupedMessages[message.postId!][message.senderUserID!].push(message);
            }
        });

        res.status(200).send(groupedMessages);
    } catch (error: any) {
        console.error(error.message);
        res.status(404).send(`Messages for userID ${userId} do not exist`);
    }
})

messageRouter.post("/", async (req: Request, res: Response) => {
    try {
        const result = await Message.create(req.body);
        result
            ? res.status(201).send(result)
            : res.status(500).send("Failed to create a new message.");
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send("Failed to create a new message.");
    }
})