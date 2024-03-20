// Function to initialize collection// Define schema for User Table
const userSchema = {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['username', 'password', 'email', 'dateCreated', 'location', 'fullName', 'profilePictureUrl'],
            properties: {
                username: { bsonType: 'string' },
                password: { bsonType: 'string' },
                email: { bsonType: 'string' },
                dateCreated: { bsonType: 'date' },
                location: { bsonType: 'string' },
                fullName: { bsonType: 'string' },
                profilePictureUrl: { bsonType: 'string' }
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
                image: {
                    bsonType: 'string'
                },
                category: { bsonType: 'string' }
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

// Call the initialization function
init();
