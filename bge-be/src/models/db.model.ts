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
    profilePictureUrl: String,
    isAdmin: Boolean,
}, {versionKey: false}
);

// Define schema for Messages Table
const messageSchema = new mongoose.Schema({
    timestamp: Date,
    text: String,
    postId: String,
    senderUserID: String,
    receiverUserID: String,
    hasReceiverSeen: Boolean,
}, {versionKey: false});

// Define schema for Board Game Categories Table
const boardGameSchema = new mongoose.Schema({
    title: String,
    category: String,
    image: String,
}, {versionKey: false});

// Define schema for Posts Table
const postSchema = new mongoose.Schema({
    postsPictureUrl: [String],
    title: String,
    description: String,
    location: String,
    condition: String,
    category: String,
    ownerUserID: String,
    dateCreated: Date
}, {versionKey: false});

const imageSchema = new mongoose.Schema({
    fileName: String,
    data: 'Buffer',
    contentType: String,
}, {versionKey: false});

// Initialize models based on the defined schemas
export const User = mongoose.model('User', userSchema, 'users');
export const Message = mongoose.model('Message', messageSchema, 'messages');
export const BoardGame = mongoose.model('BoardGame', boardGameSchema, 'boardGames');
export const Post = mongoose.model('Post', postSchema, 'posts');
export const Image = mongoose.model('Image', imageSchema, 'images');


