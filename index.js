const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({api: 'api is running'})
});

const port = process.env.PORT || 9001;
server.listen(port, () => console.log(`\nserver live on: ${port}\n`));
