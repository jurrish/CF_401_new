'use strict';

const uuid = require('uuid/v4');

class Note{
  constructor(title = 'please update title', content = 'please update content')
  {
    this.id = uuid();
    this.timestamp = new Date();
    this.title = title;
    this.content = content;
  }
}

module.exports = Note;
