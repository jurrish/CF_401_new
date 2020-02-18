'use strict';

//unique id for each user
const uuid = require('uuid/v4');

class User {
  //pass in the socket to keep track of what's open to read/write
  constructor(socket) {
    let id = new uuid();
    this.id = id;
    this.nickname = `user_${id}`;
    this.socket = socket;
  }
}

module.exprts = User;
