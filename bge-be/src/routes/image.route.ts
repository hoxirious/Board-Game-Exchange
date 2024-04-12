import express, {Request, Response} from "express";
import { Image } from "../models/db.model";

export const imageRouter = express.Router();

imageRouter.use(express.json());

imageRouter.get('/download/:imageId', async (req: Request, res: Response) => {
    /**
     #swagger.tags = ['Images']
     */

    const imageId = req?.params?.imageId;
    try {
        const image = await Image.findById(imageId);

        if (!image) {
            return res.status(404).send('Image not found');
        }

        res.set('Content-Type', image.contentType!);
        res.send(image.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error downloading image');
    }
});