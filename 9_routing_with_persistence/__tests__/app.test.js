const superagent = require('superagent');

const app = require('../src/app.js');
const storage = require('../src/lib/storage/data-store.js');
const url = 'http://localhost:3000/api/v1/notes';
const memory = require('../src/lib/storage/memory.js');

beforeAll(() => {
  app.start(3000);
})

afterAll(() => {
  app.stop();
})

beforeEach(() => {
  memory.clear();
})

describe('Create Note', () => {

  it('should create a note on POST', (done) => {

    superagent
      .post(url)
      .send( { title : "test one note", content : "test one content" } )
      .then(response => {
        const note = response.body;
        console.log(note);
        expect(note.id).toBeDefined();
        expect(note.title).toBe('test one note');
        expect(note.content).toBe('test one content');
        done();
    })
  })
})

describe('Get all notes', () => {
  it('should get all our notes on GET', (done) => {

    superagent
      .get(url)
      .then(response => {
        const note = response.body
        console.log(note);
        expect(response.body).toEqual([]);
        done();
      })

  })
})

describe('Delete a note', () => {
  xit('should delete a single note with an id', (done) => {
    let note;
    superagent
        .post(url)
        .send( {title : "title 3", content: "content 3"} )
        .then(response => {
          let note = response.body;
          console.log("note ", note);
          done();
        })
    superagent
        .delete(url)
        .then((response) => {
          let data = { id: note.query.id, deleted: succcess }
          console.log("data", data);
          expect(data).toBeDefined();
          done();
          done();
        })
  })
})
