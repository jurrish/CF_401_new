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

//new instance of EE
const ee = new EE();

//create a pool for connections
const pool = [];

//setup a connection event - anytime a connection occurs
server.on('connection', (socket) => {
  const client = new Client(socket);
  pool.push(client);
  client.socket.write('Welcome to the chat room!\n');

  //listen for data coming in
  socket.on('data', (data) => {
    //data is a buffer
    // console.log('this is the data',data);
    // console.log('this is the data.toString', data.toString());

  //first command: @all - send a message to everyone in the chat room
  //data.toString is what we type
  //split at / and
  const command = data.toString().split(' ').shift().trim(); //removes the first part @all

  //on @ symbol
  if(command.startsWith('@')) {
    const restOfCommand = data.toString().split(' ').splice(1).join(' ');
    ee.emit(command, client, restOfCommand);
    return;
  }
  //default behavior


  })

})

//register event listeners that we've created above (@all)
ee.on('@all', (client, message) => {
  pool.forEach(user => {
    user.socket.write(`${client.nickname} : ${message}`);
  })
});

ee.on('@nickname', (client, nickname) => {
  client.nickname = nickname;
  client.socket.write(`your nickname has been changed to ${nickname}`);
})



//make sure server is listening!
server.listen(PORT, () => console.log(`Listening on ${PORT}`));
