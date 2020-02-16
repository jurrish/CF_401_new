const reader = require('./single-reader.js');

describe('Single Reader Module', () => {
  it('should return hola as contents of single file', (done) => {
    const jobDone = (err, contents) => {

      expect(contents).toEqual('hola');
      done();
    }
    const results = reader('./hi.txt', jobDone);

    expect(results).toEqual('hola');
  })
})
