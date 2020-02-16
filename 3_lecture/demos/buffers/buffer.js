let data = new Buffer.from('Bald!');
console.log(data);

//this is the buffer turned bacm into utf-8
console.log(data.toString());

//this is the buffer turned into a hex string
console.log(data.toString('hex'));

//this is the first byte of the buffer in DECIMAL
console.log(data[0]);

//change second byte of the buffer to the letter o
data[1] = 111;

//dig...the new word
console.log(data.toString());
