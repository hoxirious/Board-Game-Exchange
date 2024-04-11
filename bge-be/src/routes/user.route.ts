import express, { Request, Response } from "express";
import { User } from "../models/db.model";
import bcryptjs from 'bcryptjs';

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

userRouter.post("/signup", async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Users']
     #swagger.requestBody = {
     required: true,
     schema: { $ref: "#/components/schemas/UserRequest" }
     },
     #swagger.responses[201] = {
     description: 'Successfully signed up',
     schema: { userId: 'userId' }
     },
     #swagger.responses[500] = {
     description: 'Failed to sign up',
     schema: { msg: 'Failed to create a new user' }
     },
     #swagger.responses[400] = {
     description: 'Failed to sign up',
     schema: { msg: 'User already exists with same username or email' }
     }
     */

    try {
        const salt = await bcryptjs.genSalt(10)
        req.body.password = await bcryptjs.hash(req.body.password, salt)

        const result = await User.create(req.body);
        if (result) {
            res.status(201).send({userId: result._id.toString()})
        } else {
            res.status(500).send({msg: "Failed to create a new user"});
        }
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send({msg: "User already exists with same username or email"});
    }
})

userRouter.post("/login", async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Users']
     #swagger.requestBody = {
     required: true,
     schema: { $ref: "#/components/schemas/LoginRequest" }
     },
     #swagger.responses[200] = {
     description: 'Successfully logged in',
     schema: { userId: 'userId' }
     },
     #swagger.responses[400] = {
     description: 'Incorrect credentials given',
     schema: { msg: 'Incorrect credentials given' }
     },
     #swagger.responses[404] = {
     description: 'User does not exist',
     schema: { msg: 'User does not exist' }
     },
     #swagger.responses[500] = {
     description: 'Failed to log in',
     schema: { msg: 'Failed to log in' }
     },
     */

    const email = req.body.email
    const password = req.body.password

    try {
        const user= await User.findOne({'email': email}).exec();
        if (user) {

            // ignore hash for seeded users
            if ((user.email == "test_user1@mail.com" || user.email == "test_user2@mail.com") && password == user.password!) {
                req.session.isLoggedIn = true;
                req.session.userId = user._id.toString();

                res.status(200).send({userId: user._id.toString()})
                return
            }

            const validPassword = await bcryptjs.compare(password, user.password!)
            if (validPassword) {
                req.session.isLoggedIn = true;
                req.session.userId = user._id.toString();

                res.status(200).send({userId: user._id.toString()})
            } else {
                res.status(400).send({msg: `Incorrect credentials given`});
            }
        } else {
            res.status(404).send({msg: `User does not exist`});
        }
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send({msg: `Failed to log in`});
    }
})

userRouter.post("/logout", async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Users']
     #swagger.responses[200] = {
     description: 'Successfully logged out',
     schema: { msg: 'Successfully logged out' }
     },
     */

    req.session.isLoggedIn = false;
    req.session.userId = "";
    res.status(200).send({msg: "Successfully logged out"})
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

        if (updateReq.password != undefined && updateReq.password != "") {
            const salt = await bcryptjs.genSalt(10)
            updateReq.password = await bcryptjs.hash(req.body.password, salt)
        }

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

        if (updateReq.password != undefined && updateReq.password != "") {
            const salt = await bcryptjs.genSalt(10)
            updateReq.password = await bcryptjs.hash(req.body.password, salt)
        }

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