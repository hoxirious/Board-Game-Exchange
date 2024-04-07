import { z } from "zod";

const Message = z.object({
    timestamp: z.date(),
    text: z.string(),
    postId: z.string(),
    senderUserID: z.string(),
    receiverUserID: z.string(),
    hasReceiverSeen: z.boolean(),
});


export type Message = z.infer<typeof Message>;


const PostMessage = z.record( z.string(), z.record(z.string(), z.array(Message)));
export type PostMessage = z.infer<typeof PostMessage>;
