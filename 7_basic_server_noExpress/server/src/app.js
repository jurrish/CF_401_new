'use strict';

//1st party library
const http = require('http');
var yodasay = require("yodasay");
var cowsay = require("cowsay")
const lolcatjs = require('lolcatjs');
lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;


//local libraries
//parser will tear the URL apart and give us back an object with things like
//path, query params, etc
//it will also deal with POST data and append json to req.body if sent
const parser = require('./lib/parser');

const requestHandler = (req, res) => {
  console.log(`${req.method} ${req.url}`);

  //take a look here if you're interested to see what some parts of the request
  //object are

  //in all cases, parse the url
  parser(req)
    .then( req => {

      /*
        The "if" statements below are our routes and do the same things that express
        does (below) but 100% manually
        app.get('/', (req,res) => res.send("Hello from the Gutter"))
        app.get('/foo/bar/baz', (req, res) => res.send("Hello from the Gutter"))
      */

      if(req.parsed.pathname === '/')
      {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.statusMessage = 'OK';

        //send out some random HTML (it's not toally random...)
        //that would show whatever you have in the URL after
        //you = (http://localhost:3000?this=that&you=cool)
//         res.write(`<!DOCTYPE html>
res.write(`<!DOCTYPE html>
<html>
  <head>
    <title> cowsay </title>
  </head>
  <body>
   <header>
     <nav>
       <ul>
         <li><a href="/cowsay">cowsay</a></li>
       </ul>
     </nav>
   <header>
   <main>
     <!-- project description -->
   </main>
  </body>
</html>`)
        // ...instead of doing manual html like that, you could have used the fs readFile
        // to read a file and res.write the contents
        res.end(); //we need end or we'll get a spinner!
        return;
      }
      else if(req.method === 'GET' && req.parsed.pathname === '/cowsay'){
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.statusMessage = 'OK';
        res.write(`
          <!DOCTYPE html>
  <html>
    <head>
      <title> cowsay </title>
    </head>
    <body>
      <h1> cowsay </h1>
      <pre>
        ${cowsay.say( {text: req.query.text} )}
      </pre>
    </body>
  </html>`)
      }

      //here we have a post request which will always return a JSON object. That object
      // will either be the json that you posted in (just spitting it back out)
      // or an error object, formatted to look like JSON
      else if( req.method === 'POST' && req.parsed.pathname === '/data'){
        res.setHeader('Content-Type', 'text/json');
        res.statusCode = 200;
        res.statusMessage = 'OK';
        res.write(JSON.stringify(req.body));
        res.end;
        return;
      }
      else if( req.method ==='POST' && req.parsed.pathname === '/api/cowsay'){
        res.setHeader('Content-Type', 'text/json');
        res.statusCode = 200;
        res.statusMessage = 'OK';


        let cowSaid = cowsay.say({text: req.body.text});

        res.write(JSON.stringify({ content : cowSaid }));
        res.end;
        return;
      }

      else {
        res.setHeader('Content-Type','text/html');
        res.statusCode = 404;
        res.statusMessage = 'Not Found';
        res.write('Resource not Found');
        res.end();
      }
    }) //closes the "then" of the parser promise
    .catch(err => {
      res.writeHead(500);
      res.write(err);
      res.end()
    });
};

//server callback
const app = http.createServer(requestHandler)

// Expose the start and stop methods.  index.js will call on these.
module.exports = {
  start: (port,callback) => app.listen(port,callback),
  stop: (callback) => app.close(callback),
};
