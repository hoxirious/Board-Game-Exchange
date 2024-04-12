import express, { Request, Response } from "express";
import { Post, Image } from "../models/db.model";
import multer from 'multer';

export const postRouter = express.Router();

postRouter.use(express.json());

postRouter.get("/", async (_req: Request, res: Response) => {
    /**
     #swagger.tags = ['Posts']
     #swagger.responses[200] = {
         description: 'Successfully got list of posts',
         schema: { $ref: "#/components/schemas/PostList" }
     },
     #swagger.responses[500] = {
         description: 'Failed to get list of posts',
         schema: { msg: 'Posts could not be found' }
     }
     */

    try {
        const posts = await Post.find().exec()
        res.status(200).send(posts);
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send({msg: "Posts could not be found"});
    }
})
postRouter.get("/search", async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Posts']
     #swagger.responses[200] = {
         description: 'Successfully got list of posts',
         schema: { $ref: "#/components/schemas/PostList" }
     },
     #swagger.responses[400] = {
         description: 'Failed to get list of posts',
         schema: { msg: 'Posts could not be found' }
     }
     */

    const title = req.query.title ? req.query.title : "";
    const location = req.query.location ? req.query.location : "";
    const category = req.query.category ? req.query.category : "";
    const condition = req.query.condition ? req.query.condition : "";

    let categoryArray: string[] = []
    if (typeof category === "string") {
        categoryArray = category.split(',');
    }

    try {
        const posts = category != "" ? await Post.find({
            'title': { "$regex": title, "$options": "i"  },
            'location': { "$regex": location, "$options": "i" },
            'category': { "$in": categoryArray },
            'condition': { "$regex": condition, "$options": "i" },
        }).exec() : await Post.find({
            'title': { "$regex": title, "$options": "i"  },
            'location': { "$regex": location, "$options": "i" },
            'condition': { "$regex": condition, "$options": "i" },
        }).exec()

        res.status(200).send(posts);
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send({msg: `Posts could not be found`});
    }
});

postRouter.get("/:id", async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Posts']
     #swagger.responses[200] = {
         description: 'Successfully got post by id',
         schema: { $ref: "#/components/schemas/PostResponse" }
     },
     #swagger.responses[404] = {
         description: 'Failed to get post by id',
         schema: { msg: 'Posts for id do not exist' }
     }
     */

    const id = req?.params?.id;

    try {
        const posts = await Post.findById(id).exec()
        res.status(200).send(posts);
    } catch (error: any) {
        console.error(error.message);
        res.status(404).send({msg: `Posts for id ${id} do not exist`});
    }
})

postRouter.get("/get/:userId", async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Posts']
     #swagger.responses[200] = {
     description: 'Successfully got posts by userid',
     schema: { $ref: "#/components/schemas/PostList" }
     },
     #swagger.responses[404] = {
     description: 'Failed to get posts by userId',
     schema: { msg: 'Posts for userId do not exist' }
     }
     */

    const userId = req?.params?.userId;

    try {
        const posts = await Post.find( {'ownerUserID': userId} ).exec()
        res.status(200).send(posts);
    } catch (error: any) {
        console.error(error.message);
        res.status(404).send({msg: `Posts for userId ${userId} do not exist`});
    }
})

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

postRouter.post("/", upload.array('images', 10), async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Posts']
     #swagger.requestBody = {
         required: true,
         schema: { $ref: "#/components/schemas/PostRequest" }
     },
     #swagger.responses[201] = {
         description: 'Successfully created a new post',
         schema: { $ref: "#/components/schemas/PostResponse" }
     },
     #swagger.responses[500] = {
         description: 'Failed to create a new post',
         schema: { msg: 'Failed to create a new post' }
     },
     #swagger.responses[400] = {
         description: 'Failed to create new post',
         schema: { msg: 'Failed to create a new post' }
     }
     */
    const imageUrls = [];
    try {
        const files = req.files as Express.Multer.File[];
        if (files) {
            const images = files.map(file => ({
                fileName: file.originalname,
                data: file.buffer,
                contentType: file.mimetype,
            }));

            const results = await Image.insertMany(images);

            for (const i in results) {
                imageUrls.push(`http://host.docker.internal:8080/images/download/${results[i]._id.toString()}`);
            }
        }
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send({msg: "Failed to upload images"});
        return
    }

    try {
        req.body.postsPictureUrl = imageUrls;
        console.log(req.body);
        const result = await Post.create(req.body);
        result
            ? res.status(201).send(result)
            : res.status(500).send({msg: "Failed to create a new post"});
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send({msg: "Failed to create a new post"});
    }
})

postRouter.put("/:id", upload.array('images', 10), async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Posts']
     #swagger.requestBody = {
         description: 'The request body for the update does not need all fields to update the Post',
         schema: { $ref: "#/components/schemas/PostRequest" }
     },
     #swagger.responses[200] = {
         description: 'Successfully updated a post',
         schema: { $ref: "#/components/schemas/PostResponse" }
     },
     #swagger.responses[304] = {
         description: 'Failed to update a post',
         schema: { msg: 'Post with id not updated' }
     },
     #swagger.responses[400] = {
         description: 'Failed to update a post',
         schema: { msg: 'Post with id not updated' }
     }
     */

    const imageUrls = [];
    try {
        const files = req.files as Express.Multer.File[];
        if (files) {
            const images = files.map(file => ({
                fileName: file.originalname,
                data: file.buffer,
                contentType: file.mimetype,
            }));

            const results = await Image.insertMany(images);

            for (const i in results) {
                imageUrls.push(`http://host.docker.internal:8080/images/download/${results[i]._id.toString()}`);
            }
        }
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send({msg: "Failed to upload images"});
        return
    }

    const id = req?.params?.id;

    try {
        req.body.postsPictureUrl
            ? req.body.postsPictureUrl = req.body.postsPictureUrl.concat(imageUrls)
            : req.body.postsPictureUrl = imageUrls;

        const updateReq = req.body
        const result = await Post.findByIdAndUpdate(id, updateReq)

        result
            ? res.status(200).send(result)
            : res.status(304).send({msg: `Post with id: ${id} not updated`});
    } catch (error: any) {
        console.error(error.message);
        res.status(400).send({msg: `Post with id: ${id} not updated`});
    }
});

postRouter.delete("/:id", async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Posts']
     #swagger.responses[202] = {
         description: 'Successfully deleted a post',
         schema: { $ref: "#/components/schemas/PostResponse" }
     },
     #swagger.responses[400] = {
         description: 'Failed to delete a post',
         schema: { msg: 'Failed to remove post with id' }
     },
     #swagger.responses[404] = {
         description: 'Failed to delete a post',
         schema: { msg: 'Post with id does not exist' }
     }
     */

    const id = req?.params?.id;

    try {
        const result = await Post.findByIdAndDelete(id)
        result
            ? res.status(202).send(result)
            : res.status(400).send({msg: `Failed to remove post with id ${id}`});
    } catch (error: any) {
        console.error(error.message);
        res.status(404).send({msg: `Post with id ${id} does not exist`});
    }
});
