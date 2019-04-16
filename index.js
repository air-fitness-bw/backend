//Imports
const express = require('express');
const cors = require('cors');
//s
const server = express();
server.use(cors());
server.use(express.json());

//add a message to the Array and it will be added in randomly with the deploy, just another quick way to check if changes have occurred
var randomMessage = ['Hello Human','whose api is this anyway?',':)','Who left the API running?','welcome to the machine'];
var message = randomMessage[Math.floor(Math.random()*randomMessage.length)];

// middleware
// route imports
const usersRouter = require('./usr/user-route');
// use routes
server.use('/users', usersRouter);

server.get('/', (req, res) => {
    res.status(200).json(message) //random message appears here
});
//port
const port = process.env.PORT || 9001;
server.listen(port, () => console.log(`\nserver live on: ${port}\n`));


