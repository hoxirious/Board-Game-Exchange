import { z } from "zod";

export const user = z.object({
    username: z.string(),
    password: z.string(),
    email: z.string(),
    dateCreated: z.date(),
    location: z.string(),
    fullName: z.string(),
    profilePictureUrl: z.string(),
    isAdmin: z.boolean(),
})

export type User = z.infer<typeof user>;

