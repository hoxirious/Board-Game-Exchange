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
            required: ['timestamp', 'text', 'postId', 'senderUserID', 'receiverUserID', 'senderStatus', 'hasReceiverSeen'],
            properties: {
                timestamp: { bsonType: 'date' },
                text: { bsonType: 'string' },
                postId: { bsonType: 'string' },
                senderUserID: { bsonType: 'string' },
                receiverUserID: { bsonType: 'string' },
                senderStatus: { bsonType: 'string', enum: ['SUCCESS', 'FAILED'] },
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
                postsPictureUrl: { bsonType: 'string' },
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
            postsPictureUrl: "https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg",
            title: `BoardGame${i}`,
            description: `This is a test description`,
            location: "Test Location",
            condition: "Used - Like New",
            category: "Card Game",
            ownerUserID: userId1,
            dateCreated: new Date(Date.now())
        })
    }

    response = db.getCollection('posts').insertMany(posts);

    let postId = response['insertedIds'][0].toString();

    let messages = [];
    for (let i = 1; i <= 4; i++) {
        messages.push({
            timestamp: new Date(Date.now()),
            text: `first: message ${i}`,
            postId: postId,
            senderUserID: userId2,
            receiverUserID: userId1,
            senderStatus: 'SUCCESS',
            hasReceiverSeen: false
        })

        messages.push({
            timestamp: new Date(Date.now()),
            text: `reply: message ${i}`,
            postId: postId,
            senderUserID: userId2,
            receiverUserID: userId1,
            senderStatus: 'SUCCESS',
            hasReceiverSeen: false
        })
    }

    db.getCollection('messages').insertMany(messages);
}

// Call the initialization function
init();
seedUserAndPostsAndMessages();