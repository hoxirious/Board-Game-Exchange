import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        version: 'v1.0.0',
        title: 'BGE Swagger Docs',
        description: 'BGE Backend Routes'
    },
    servers: [
        {
            url: 'http://localhost:8080',
            description: ''
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            }
        },
        schemas: {
            UserResponse: {
                _id: "660df3819689aaa534db83b0",
                username: "test_user_1",
                password: "test_password_1",
                email: "test_user1@mail.com",
                dateCreated: "2024-04-04T00:25:37.920Z",
                location: "",
                fullName: "Test User",
                profilePictureUrl: "",
                isAdmin: false
            },
            UserRequest: {
                username: "test_user_1",
                password: "test_password_1",
                email: "test_user1@mail.com",
                dateCreated: "2024-04-04T00:25:37.920Z",
                location: "",
                fullName: "Test User",
                profilePictureUrl: "",
                isAdmin: false
            },
            BoardGameList: [
                {
                    _id: "660df384427fa6b473db83b0",
                    title: "Catan",
                    image: "https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg",
                    category: "Economic,Negotiation"
                },
                {
                    _id: "660df384427fa6b473db83b1",
                    title: "Carcassonne",
                    image: "https://cf.geekdo-images.com/original/img/o4p6f88SGE899BTNMzTvERVWZ-M=/0x0/pic2337577.jpg",
                    category: "Medieval,City Building,Territory Building"
                },
            ],
            BoardGame: {
                _id: "660df384427fa6b473db83b0",
                title: "Catan",
                image: "https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg",
                category: "Economic,Negotiation"
            },
            MessageList: [
                {
                    "660df3829689aaa534db83b2 (postId)": {
                        "660df3819689aaa534db83b0 (otherUserId)": [
                            {
                                _id: "660df3829689aaa534db83bd",
                                timestamp: "2024-04-04T00:25:38.138Z",
                                text: "reply: message 1",
                                postId: "660df3829689aaa534db83b2",
                                senderUserID: "660df3819689aaa534db83b0",
                                receiverUserID: "660df3819689aaa534db83b1",
                                hasReceiverSeen: false
                            },
                            {
                                _id: "660df3829689aaa534db83bf",
                                timestamp: "2024-04-04T00:25:38.138Z",
                                text: "reply: message 2",
                                postId: "660df3829689aaa534db83b2",
                                senderUserID: "660df3819689aaa534db83b0",
                                receiverUserID: "660df3819689aaa534db83b1",
                                hasReceiverSeen: false
                            },
                            {
                                _id: "660df3829689aaa534db83c1",
                                timestamp: "2024-04-04T00:25:38.138Z",
                                text: "reply: message 3",
                                postId: "660df3829689aaa534db83b2",
                                senderUserID: "660df3819689aaa534db83b0",
                                receiverUserID: "660df3819689aaa534db83b1",
                                hasReceiverSeen: false
                            },
                            {
                                _id: "660df3829689aaa534db83c3",
                                timestamp: "2024-04-04T00:25:38.138Z",
                                text: "reply: message 4",
                                postId: "660df3829689aaa534db83b2",
                                senderUserID: "660df3819689aaa534db83b0",
                                receiverUserID: "660df3819689aaa534db83b1",
                                hasReceiverSeen: false
                            },
                            {
                                _id: "660df3829689aaa534db83bc",
                                timestamp: "2024-04-04T00:25:38.138Z",
                                text: "first: message 1",
                                postId: "660df3829689aaa534db83b2",
                                senderUserID: "660df3819689aaa534db83b1",
                                receiverUserID: "660df3819689aaa534db83b0",
                                hasReceiverSeen: false
                            },
                            {
                                _id: "660df3829689aaa534db83be",
                                timestamp: "2024-04-04T00:25:38.138Z",
                                text: "first: message 2",
                                postId: "660df3829689aaa534db83b2",
                                senderUserID: "660df3819689aaa534db83b1",
                                receiverUserID: "660df3819689aaa534db83b0",
                                hasReceiverSeen: false
                            },
                            {
                                _id: "660df3829689aaa534db83c0",
                                timestamp: "2024-04-04T00:25:38.138Z",
                                text: "first: message 3",
                                postId: "660df3829689aaa534db83b2",
                                senderUserID: "660df3819689aaa534db83b1",
                                receiverUserID: "660df3819689aaa534db83b0",
                                hasReceiverSeen: false
                            },
                            {
                                _id: "660df3829689aaa534db83c2",
                                timestamp: "2024-04-04T00:25:38.138Z",
                                text: "first: message 4",
                                postId: "660df3829689aaa534db83b2",
                                senderUserID: "660df3819689aaa534db83b1",
                                receiverUserID: "660df3819689aaa534db83b0",
                                hasReceiverSeen: false
                            }
                        ]
                    }
                }
            ],
            MessageRequest: {
                timestamp: "2024-03-25T04:28:28.009Z",
                text: "test message",
                postId: "6600fd6c99144c503fdb83b2",
                senderUserID: "6600fd6b99144c503fdb83b0",
                receiverUserID: "6600fd6b99144c503fdb83b1",
                senderStatus: "SUCCESS",
                hasReceiverSeen: false
            },
            MessageResponse: {
                _id: "660df8b745f5390790750853",
                timestamp: "2024-03-25T04:28:28.009Z",
                text: "test message",
                postId: "6600fd6c99144c503fdb83b2",
                senderUserID: "6600fd6b99144c503fdb83b0",
                receiverUserID: "6600fd6b99144c503fdb83b1",
                senderStatus: "SUCCESS",
                hasReceiverSeen: false
            },
            PostList: [
                {
                    _id: "660df3829689aaa534db83b2",
                    postsPictureUrl: [
                        "https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg"
                    ],
                    title: "BoardGame1",
                    description: "This is a test description",
                    location: "Test Location",
                    condition: "Used - Like New",
                    category: "Card Game",
                    ownerUserID: "660df3819689aaa534db83b0",
                    dateCreated: "2024-04-04T00:25:38.127Z"
                },
                {
                    _id: "660df3829689aaa534db83b3",
                    postsPictureUrl: [
                        "https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg"
                    ],
                    title: "BoardGame2",
                    description: "This is a test description",
                    location: "Test Location",
                    condition: "Used - Like New",
                    category: "Card Game",
                    ownerUserID: "660df3819689aaa534db83b0",
                    dateCreated: "2024-04-04T00:25:38.127Z"
                }
            ],
            PostRequest: {
                postsPictureUrl: [
                    "https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg"
                ],
                title: "BoardGame2",
                description: "This is a test description",
                location: "Test Location",
                condition: "Used - Like New",
                category: "Card Game",
                ownerUserID: "660df3819689aaa534db83b0",
                dateCreated: "2024-04-04T00:25:38.127Z"
            },
            PostResponse: {
                _id: "660df3829689aaa534db83b3",
                postsPictureUrl: [
                    "https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg"
                ],
                title: "BoardGame2",
                description: "This is a test description",
                location: "Test Location",
                condition: "Used - Like New",
                category: "Card Game",
                ownerUserID: "660df3819689aaa534db83b0",
                dateCreated: "2024-04-04T00:25:38.127Z"
            }
        }
    }
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/index.ts'];

swaggerAutogen({openapi: '3.0.0'})(outputFile, endpointsFiles, doc);