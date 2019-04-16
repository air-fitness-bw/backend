const server = require('./api/server');

//add a message to the Array and it will be added in randomly with the deploy, just another quick way to check if changes have occurred
var randomMessage = ['Hello Human','whose api is this anyway?',':)','Who left the API running?','welcome to the machine'];
var randomWelcome = ['welcome developer','hello world','server is serving ','activated'];
var message = randomMessage[Math.floor(Math.random()*randomMessage.length)];
var welcome = randomWelcome[Math.floor(Math.random()*randomWelcome.length)];

server.get('/', (req, res) => {
    res.status(200).json(message) //random message appears here
});
//port
const port = process.env.PORT || 9001;
server.listen(port, () => console.log(`***** ${welcome} *****\nserver live on: http://localhost:${port}\n`));


