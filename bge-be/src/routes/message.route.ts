import express, { Request, Response } from "express";
import { Message } from "../models/db.model";

export const messageRouter = express.Router();

messageRouter.use(express.json());

messageRouter.get("/:userId", async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Messages']
     #swagger.responses[200] = {
         description: 'Successfully got list of messages for user',
         schema: { $ref: "#/components/schemas/MessageList" }
     },
     #swagger.responses[404] = {
         description: 'Failed to get list of messages for user',
         schema: { msg: 'Messages for userID do not exist' }
     }
     */

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

        //sorting by time (oldest to newest)
        for (const postId in groupedMessages) {
            for (const externalUserId in groupedMessages[postId]) {
                groupedMessages[postId][externalUserId].sort((a, b) => {
                    const timestampA = new Date(a.timestamp).getTime();
                    const timestampB = new Date(b.timestamp).getTime();
                    return timestampA - timestampB;
                });
            }
        }

        let arrayGroupedMessages = Object.keys(groupedMessages).map((key) => [key, Object.keys(groupedMessages[key]).map(subKey => [subKey, groupedMessages[key][subKey]])]);


        res.status(200).send(arrayGroupedMessages);
    } catch (error: any) {
        console.error(error.message);
        res.status(404).send({ msg: `Messages for userID ${userId} do not exist` });
    }
})

messageRouter.post("/", async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Messages']
     #swagger.requestBody = {
         required: true,
         schema: { $ref: "#/components/schemas/MessageRequest" }
     },
     #swagger.responses[201] = {
         description: 'Successfully created a message',
         schema: { $ref: "#/components/schemas/MessageResponse" }
     },
     #swagger.responses[500] = {
         description: 'Failed to create a new message',
         schema: { msg: 'Failed to create a new message' }
     },
     #swagger.responses[400] = {
         description: 'Failed to create a new message',
         schema: { msg: 'Failed to create a new message' }
     }
     */

    try {
        const result = await Message.create(req.body);
        result
            ? res.status(201).send(result)
            : res.status(500).send({ msg: "Failed to create a new message" });
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send({ msg: "Failed to create a new message" });
    }
})
