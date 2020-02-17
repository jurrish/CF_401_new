const reader = require('./single-reader.js');

reader('./hi.txt', (err, text) => {
  console.log(text);
})

// describe('Single Reader Module', () => {
//   it('should return hola as contents of single file', (done) => {
//
//     const jobDone = (err, contents) => {
//       expect(contents).toEqual('hola');
//       done();
//     };
//
//     reader('./hi.txt', jobDone);
//   });
// });
