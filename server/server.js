require("dotenv").config();
const express = require('express');
const connectDb = require('./utils/db');
const router = require('./router/auth-router');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', router);
const PORT = process.env.PORT;


connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});