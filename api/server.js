const express = require('express');
const router = require('./route/user-route');


const server = express();

//middleware
const helmet = require('helmet');
const cors = require('cors');
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api', router);
module.exports = server;