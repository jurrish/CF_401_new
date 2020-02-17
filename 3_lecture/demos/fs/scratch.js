const fs = require('fs');

fs.readFile('./png-bitmap-4.bmp', (err, data) => {


  //turn black
  //find the bit that determines color
  // for(let i = 8; i < data.length; i++) {
  //   data[i] = 0;
  // }

  console.log(data.readInt8(0));

  fs.writeFile('./png-bitmap-5.bmp', data, (err, data) => {
    console.log('yo');
  })
})
