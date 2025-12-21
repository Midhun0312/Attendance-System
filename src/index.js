const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db');


const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'server is running',
        database: 'connected'
    });
});

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`server is running on localhost:${PORT}`);
        })
    } catch (error) {
        console.log('failed to start server');
        process.exit(1);
    }
};

startServer();


// const User = require('./models/User');

// app.post('/test-user', async (req, res) => {
//     try {
//         const user1 = new User({
//             name: 'midhun',
//             email: 'midhun@gmail.com',
//             password: '1234567',
//             role: 'student'
//         });
//         await user1.save();
//         res.json({
//             success: true,
//             message: 'User created successfully',
//             user: {
//                 id: user1._id,
//                 name: user1.name,
//                 email: user1.email,
//                 role: user1.role,
//                 createdAt: user1.createdAt
//             }
//         });

//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             error: error.message
//         });
//     }
// });