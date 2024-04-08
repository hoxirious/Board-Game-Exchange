import express, { Request, Response } from "express";
import { User } from "../models/db.model";

export const userRouter = express.Router();

userRouter.use(express.json());

userRouter.get("/:id", async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Users']
     #swagger.responses[200] = {
        description: 'Successfully got a specific user',
        schema: { $ref: "#/components/schemas/UserResponse" }
     },
     #swagger.responses[404] = {
        description: 'Failed to get a specific user',
        schema: { msg: 'User with id does not exist' }
     }
     */

    const id = req?.params?.id;

    try {
        const user = await User.findById(id).exec()
        user ? res.status(200).send(user) : res.status(404).send({msg: `User with id ${id} does not exist`});
    } catch (error: any) {
        console.error(error.message);
        res.status(404).send({msg: `User with id ${id} does not exist`});
    }
})

userRouter.get("/get/:email", async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Users']
     #swagger.responses[200] = {
     description: 'Successfully got a specific user by email',
     schema: { $ref: "#/components/schemas/UserResponse" }
     },
     #swagger.responses[404] = {
     description: 'Failed to get a specific user by email',
     schema: { msg: 'User with id does not exist' }
     }
     */

    const email = req?.params?.email;

    try {
        const user= await User.findOne({'email': email}).exec();
        user ? res.status(200).send(user) : res.status(404).send({msg: `User with email ${email} does not exist`});

    } catch (error: any) {
        console.error(error.message);
        res.status(404).send({msg: `User with email ${email} does not exist`});
    }
})

userRouter.post("/", async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Users']
     #swagger.requestBody = {
         required: true,
         schema: { $ref: "#/components/schemas/UserRequest" }
     },
     #swagger.responses[201] = {
         description: 'Successfully created a user',
         schema: { $ref: "#/components/schemas/UserResponse" }
     },
     #swagger.responses[500] = {
         description: 'Failed to create a user',
         schema: { msg: 'Failed to create a new user' }
     },
     #swagger.responses[400] = {
         description: 'Failed to create a user',
         schema: { msg: 'User already exists with same username or email' }
     }
     */

    try {
        const result = await User.create(req.body);
        result
            ? res.status(201).send(result)
            : res.status(500).send({msg: "Failed to create a new user"});
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send({msg: "User already exists with same username or email"});
    }
})

userRouter.put("/:id", async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Users']
     #swagger.requestBody = {
         description: 'The request body for the update does not need all fields to update the user',
         schema: { $ref: "#/components/schemas/UserRequest" }
     },
     #swagger.responses[200] = {
         description: 'Successfully updated a user',
         schema: { $ref: "#/components/schemas/UserResponse" }
     },
     #swagger.responses[304] = {
         description: 'Failed to update a user',
         schema: { msg: 'User with id: id not updated' }
     },
     #swagger.responses[400] = {
         description: 'Failed to update a user',
         schema: { msg: 'User already exists with same username or email' }
     }
     */

    const id = req?.params?.id;

    try {
        const updateReq = req.body
        const result = await User.findByIdAndUpdate(id, updateReq)

        result
            ? res.status(200).send(result)
            : res.status(304).send({msg: `User with id: ${id} not updated`});
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send({msg: `User already exists with same username or email`});
    }
})

userRouter.put("/update/:email", async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Users']
     #swagger.requestBody = {
     description: 'The request body for the update does not need all fields to update the user',
     schema: { $ref: "#/components/schemas/UserRequest" }
     },
     #swagger.responses[200] = {
     description: 'Successfully updated a user by email',
     schema: { $ref: "#/components/schemas/UserResponse" }
     },
     #swagger.responses[304] = {
     description: 'Failed to update a user by email',
     schema: { msg: 'User with email: not updated' }
     },
     #swagger.responses[400] = {
     description: 'Failed to update a user by email',
     schema: { msg: 'User with email: not updated' }
     }
     */

    const email = req?.params?.email;

    try {
        const updateReq = req.body

        const result = await User.findOneAndUpdate({'email': email}, updateReq)

        result
            ? res.status(200).send(result)
            : res.status(304).send({msg: `User with email: ${email} not updated`});
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send({msg: `User with email: ${email} not updated`});
    }
})

userRouter.delete("/:id", async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Users']
     #swagger.responses[202] = {
         description: 'Successfully deleted a user',
         schema: { $ref: "#/components/schemas/UserResponse" }
     },
     #swagger.responses[400] = {
         description: 'Failed to delete a user',
         schema: { msg: 'Failed to remove user with id' }
     },
     #swagger.responses[404] = {
         description: 'Failed to delete a user',
         schema: { msg: 'User with id does not exist' }
     }
     */

    const id = req?.params?.id;

    try {
        const result = await User.findByIdAndDelete(id)
        result
            ? res.status(202).send(result)
            : res.status(400).send({msg: `Failed to remove user with id ${id}`});
    } catch (error: any) {
        console.error(error.message);
        res.status(404).send({msg: `User with id ${id} does not exist`});
    }
});