'use strict';

//first-party modules (things that are built into node)
const net = require('net');
const EE = require('events');

//internal files
const Client = require('./model/client.js');

//environment
//PORT is where we want to connect - but first we wanna try our env file
//whenever we refer to .env, we will use this command. this is from the dotenv docs
require('dotenv').config();
const PORT = process.env.PORT || 3000;

//make a new server using net we required in
const server = net.createServer();



//make sure server is listening!
server.listen(PORT, () => console.log(`Listening on ${PORT}`));
