const addTwos = function() {
  // console.log('result: ', 2+2);

  return () => console.log('woah');
};

setTimeout(addTwos(), 1000);


//run in browser

function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback)
{
  var name = prompt("Please enter your name");
  callback(name);
}

processUserInput(greeting);
