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
    try{
        await connectDB();
        app.listen(PORT, ()=>{
            console.log(`server is running on localhost:${PORT}`);
        })
    }catch(error) {
        console.log('failed to start server');
        process.exit(1);
    }
};

startServer();