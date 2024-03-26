// External Dependencies
import mongoose from 'mongoose';
import * as dotenv from "dotenv";

// Initialize Connection
export async function connectToDatabase() {
    dotenv.config();
    await mongoose.connect(process.env.DB_CONN_STRING!)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.error(err));
}
