'use strict';

//3rd party library
// const dotenv = require('dotenv').config();

//local library
const server = require('./src/app.js');

//fire up the server on the port we pulled out of our .env file
//note that there is no default port given
server.start(process.env.PORT || 3000,
  () => console.log(`server up on ${process.env.PORT}`));
