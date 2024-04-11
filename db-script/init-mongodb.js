// Function to initialize collection// Define schema for User Table
const userSchema = {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['username', 'password', 'email', 'dateCreated', 'location', 'fullName', 'profilePictureUrl', 'isAdmin'],
            properties: {
                username: { bsonType: 'string' },
                password: { bsonType: 'string' },
                email: { bsonType: 'string' },
                dateCreated: { bsonType: 'date' },
                location: { bsonType: 'string' },
                fullName: { bsonType: 'string' },
                profilePictureUrl: { bsonType: 'string' },
                isAdmin: { bsonType: 'bool'}
            }
        }
    }
};

// Define schema for Messages Table
const messageSchema = {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['timestamp', 'text', 'postId', 'senderUserID', 'receiverUserID', 'hasReceiverSeen'],
            properties: {
                timestamp: { bsonType: 'date' },
                text: { bsonType: 'string' },
                postId: { bsonType: 'string' },
                senderUserID: { bsonType: 'string' },
                receiverUserID: { bsonType: 'string' },
                hasReceiverSeen: { bsonType: 'bool' }
            }
        }
    }
};

// Define schema for Board Game Categories Table
const boardGameSchema = {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['title', 'category'],
            properties: {
                title: { bsonType: 'string' },
                category: { bsonType: 'string' },
                image: {bsonType: 'string'}
            }
        }
    }
};

// Define schema for Posts Table
const postSchema = {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['postsPictureUrl', 'title', 'description', 'location', 'condition', 'category', 'ownerUserID', 'dateCreated'],
            properties: {
                postsPictureUrl: {
                    bsonType: 'array',
                    items: { bsonType: 'string' }
                },
                title: { bsonType: 'string' },
                description: { bsonType: 'string' },
                location: { bsonType: 'string' },
                condition: { bsonType: 'string' },
                category: { bsonType: 'string' },
                ownerUserID: { bsonType: 'string' },
                dateCreated: { bsonType: 'date' }
            }
        }
    }
};

// Function to initialize collections
async function init() {
    try {
        // Check if collections exist, if not, create them with validators
        await Promise.all([
            createCollectionWithValidator(db, 'boardGames', boardGameSchema),
            createCollectionWithValidator(db, 'users', userSchema),
            createCollectionWithValidator(db, 'messages', messageSchema),
            createCollectionWithValidator(db, 'posts', postSchema)
        ]);

        db.getCollection('users').createIndex({ username: 1 }, { unique: true });
        db.getCollection('users').createIndex({ email: 1 }, { unique: true });

    } catch (err) {
        console.error('Initialization failed:', err);
        process.exit(1);
    }
}

// Function to create collection with validator
async function createCollectionWithValidator(db, name, schema) {
    const options = { validator: schema.validator };
    await db.createCollection(name, options);
    console.log(`${name} collection created`);
}

const seedPosts = [
    {
        "title": "Catan BoardGame",
        "image": "https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg",
        "category": "Economic",
        "condition": "New",
        "location": "Calgary, AB",
        "description": "In CATAN, players try to be the dominant force on the island of Catan by building settlements, cities, and roads."
    },
    {
        "title": "Carcassonne",
        "image": "https://cf.geekdo-images.com/original/img/o4p6f88SGE899BTNMzTvERVWZ-M=/0x0/pic2337577.jpg",
        "category": "Medieval",
        "condition": "Used - Like New",
        "location": "Edmonton, AB",
        "description": "It is a tile-placement game in which the players draw and place a tile with a piece of southern French landscape on it."
    },
    {
        "title": "Pandemic",
        "image": "https://cf.geekdo-images.com/original/img/j-pfXZ_0GmOowohzD_T6NDAWGSA=/0x0/pic1534148.jpg",
        "category": "Strategy",
        "condition": "Used - Good",
        "location": "Banff, AB",
        "description": "In Pandemic, several virulent diseases have broken out simultaneously all over the world! The players are disease-fighting specialists whose mission is to treat disease hotspots while researching cures for each of four plagues before they get out of hand."
    },
    {
        "title": "7 Wonders Board Game",
        "image": "https://cf.geekdo-images.com/original/img/3DP_RW5lTX0WrV67s8qi8CsiXoQ=/0x0/pic860217.jpg",
        "category": "Economic",
        "condition": "Used - Fair",
        "location": "Canmore, AB",
        "description": "You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes, and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times."
    },
    {
        "title": "Dominion",
        "image": "https://cf.geekdo-images.com/original/img/oN8CHUZ8CF6P1dFnhMCJXvE8SOk=/0x0/pic394356.jpg",
        "category": "Card Game",
        "condition": "Used - Poor",
        "location": "Vancouver, BC",
        "description": "You are a monarch, like your parents before you, a ruler of a small pleasant kingdom of rivers and evergreens. Unlike your parents, however, you have hopes and dreams! You want a bigger and more pleasant kingdom, with more rivers and a wider variety of trees. You want a Dominion!"
    },
    {
        "title": "Ticket to Ride",
        "image": "https://cf.geekdo-images.com/original/img/bOcAJxw-W-B2Gz0x67z8bjqzJgY=/0x0/pic38668.jpg",
        "category": "Exploration",
        "condition": "New",
        "location": "Whistler, BC",
        "description": "With elegantly simple gameplay, Ticket to Ride can be learned in under 15 minutes. Players collect cards of various types of train cars they then use to claim railway routes in North America. The longer the routes, the more points they earn."
    },
    {
        "title": "Codenames BoardGame",
        "image": "https://cf.geekdo-images.com/original/img/MJ6MNz8-_rb1C2VUTnYBTYOiiy0=/0x0/pic2582929.jpg",
        "category": "Party Game",
        "condition": "Used - Like New",
        "location": "Victoria, BC",
        "description": "In Codenames, two teams compete to see who can make contact with all of their agents first. Lay out 25 cards, each bearing a single word. The spymasters look at a card showing the identity of each card, then take turns clueing their teammates. "
    },
    {
        "title": "Agricola",
        "image": "https://cf.geekdo-images.com/original/img/WQS7FRLHzvFQ8mjt94Au4W8CYn0=/0x0/pic831744.jpg",
        "category": "Economic",
        "condition": "Used - Good",
        "location": "Kamloops, BC",
        "description": "In Agricola, you're a farmer in a wooden shack with your spouse and little else. On a turn, you get to take only two actions, one for you and one for the spouse, from all the possibilities you'll find on a farm: collecting clay, wood, or stone; building fences; and so on. "
    },
    {
        "title": "Puerto Rico",
        "image": "https://cf.geekdo-images.com/original/img/RvdWBkmDks7AN8sodR4PyVcponA=/0x0/pic158548.jpg",
        "category": "Economic",
        "condition": "Used - Fair",
        "location": "Kelowna, BC",
        "description": "In Puerto Rico, players assume the roles of colonial governors on the island of Puerto Rico. The aim of the game is to amass victory points by shipping goods to Europe or by constructing buildings."
    },
    {
        "title": "Small World Board Game",
        "image": "https://cf.geekdo-images.com/original/img/WvXe0YG-Mj2KBtyRSBNtRw4DIx0=/0x0/pic428828.jpg",
        "category": "Fantasy",
        "condition": "Used - Poor",
        "location": "Red Deer, AB",
        "description": "In Small World, players vie for conquest and control of a world that is simply too small to accommodate them all."
    }
]

async function seedUserAndPostsAndMessages() {
    let users = [];
    for (let i = 1; i <= 2; i++) {
        users.push({
            username: `test_user_${i}`,
            password: `test_password_${i}`,
            email: `test_user${i}@mail.com`,
            dateCreated: new Date(Date.now()),
            location: ``,
            fullName: `Test User`,
            profilePictureUrl: ``,
            isAdmin: false
        });
    }

    let response = db.getCollection('users').insertMany(users);

    let userId1 = response['insertedIds'][0].toString();
    let userId2 = response['insertedIds'][1].toString();

    let posts = [];
    for (let i = 1; i <= 10; i++) {
        posts.push({
            postsPictureUrl: [seedPosts[i-1].image],
            title: seedPosts[i-1].title,
            description: seedPosts[i-1].description,
            location: seedPosts[i-1].location,
            condition: seedPosts[i-1].condition,
            category: seedPosts[i-1].category,
            ownerUserID: userId1,
            dateCreated: new Date(Date.now() - (i*86400000))
        })
    }

    response = db.getCollection('posts').insertMany(posts);

    let postId = response['insertedIds'][0].toString();

    let messages = [];
    for (let i = 1; i <= 4; i++) {
        messages.push({
            timestamp: new Date(Date.now() + (1000*i)),
            text: `first: message ${i}`,
            postId: postId,
            senderUserID: userId2,
            receiverUserID: userId1,
            hasReceiverSeen: false
        })

        messages.push({
            timestamp: new Date(Date.now() + (1500*i)),
            text: `reply: message ${i}`,
            postId: postId,
            senderUserID: userId1,
            receiverUserID: userId2,
            hasReceiverSeen: false
        })
    }

    db.getCollection('messages').insertMany(messages);
}

// Call the initialization function
init();
seedUserAndPostsAndMessages();