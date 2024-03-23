// Import necessary modules
import mongoose from 'mongoose';

// Collection// Define schema for User Table
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    dateCreated: Date,
    location: String,
    fullName: String,
    profilePictureUrl: String
});

// Define schema for Messages Table
const messageSchema = new mongoose.Schema({
    timestamp: Date,
    text: String,
    postId: String,
    senderUserID: String,
    receiverUserID: String,
    senderStatus: { type: String, enum: ['SUCCESS', 'FAILED'] },
    hasReceiverSeen: Boolean
});

// Define schema for Board Game Categories Table
const categorySchema = new mongoose.Schema({
    title: String,
    category: String
});

// Define schema for Posts Table
const postSchema = new mongoose.Schema({
    postsPictureUrl: String,
    title: String,
    description: String,
    location: String,
    condition: String,
    category: String,
    ownerUserID: String,
    dateCreated: Date
});

// Initialize models based on the defined schemas
const User = mongoose.model('User', userSchema);
const Message = mongoose.model('Message', messageSchema);
const Category = mongoose.model('Category', categorySchema);
const Post = mongoose.model('Post', postSchema);


