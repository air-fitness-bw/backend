const express = require('express');
const routerGetUsers = require('./route/user-route');

const server = express();

//middleware
const helmet = require('helmet');
const cors = require('cors');
server.use(express.json());
server.use(helmet());
server.use(cors({
    credentials: true,
    origin: true
  }));


server.use('/api', routerGetUsers);
module.exports = server;