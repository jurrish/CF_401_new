const fs = require('fs');

fs.readFile('./hammherhead.bmp', (err, data) => {


  //turn black
  //find the bit that determines color
  for(let i = 16; i < data.length; i++) {
    data[i] = 0;
  }

  // console.log(data.readInt8(0));

  fs.writeFile('./hammherhead-2.bmp', data, (err, data) => {
    console.log('yo');
  })
})
