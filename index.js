const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());


var randomMessage = ['Hello Human','whose api is this anyway?',':)','Who left the API running?','welcome to the machine'];
var message = randomMessage[Math.floor(Math.random()*randomMessage.length)];

server.get('/', (req, res) => {
    res.status(200).json(message)
});

const port = process.env.PORT || 9001;
server.listen(port, () => console.log(`\nserver live on: ${port}\n`));
