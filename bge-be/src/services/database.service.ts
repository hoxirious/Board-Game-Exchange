
// External Dependencies

import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables
export const collections: { games?: mongoDB.Collection } = {}

// Initialize Connection
export async function connectToDatabase() {
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING!);

    await client.connect();

    // const db: mongoDB.Db = client.db(process.env.DB_NAME);

    // await db.createCollection(process.env.GAMES_COLLECTION_NAME!, {
    //     "validator": {
    //         $jsonSchema: {
    //             bsonType: "object",
    //             required: ["name", "price", "category"],
    //             additionalProperties: false,
    //             properties: {
    //                 _id: {},
    //                 name: {
    //                     bsonType: "string",
    //                     description: "'name' is required and is a string"
    //                 },
    //                 price: {
    //                     bsonType: "number",
    //                     description: "'price' is required and is a number"
    //                 },
    //                 category: {
    //                     bsonType: "string",
    //                     description: "'category' is required and is a string"
    //                 }
    //             }
    //         }
    //     }
    // });

}
