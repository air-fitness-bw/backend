const express = require('express');
const userRouter = require('./route/user-route');
const classRouter = require('./route/class-route');
const relationRouter = require('./route/rt-route')
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

//endpoints
server.use('/api/punch', relationRouter) 
server.use('/api/class', classRouter)
server.use('/api/users', userRouter);

module.exports = server;