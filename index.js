const express = require('express');
const cors = require('cors');
const dbconnect = require('./config/database');
const userRoutes = require('./routes/User');
require("dotenv").config();

const server = express();
server.use(express.json());
server.use(cors());
dbconnect();

server.use("/", userRoutes);


const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log("Server started!!");
})