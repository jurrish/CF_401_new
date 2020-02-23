'use strict';

//1st party library
const http = require('http');

//local libraries
//parser will tear the URL apart and give us back an object with things like
//path, query params, etc
//it will also deal with POST data and append json to req.body if sent
const parser = require('./lib/parser');

const requestHandler = (req, res) => {
  console.log(`${req.body} ${req.url}`);

  //take a look here if you're interested to see what some parts of the request
  //object are
  // console.log(req.headers);

  //in all cases, parse the url
  parser(req)
    .then( req => {

      /*
        The "if" statements below are our routes and do the same things that express
        does (blow) but 100% manually
        app.get('/', (req,res) => res.send("Hello from the Gutter"))
        app.get('/foo/bar/baz', (req, res) => res.send("Hello from the Gutter"))
      */

      if(req.method === 'GET' && req.parsed.pathname === '/')
      {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.statusMEssage = 'OK';

        //send out some random HTML (it's not toally random...)
        //that would show whatever you have in the URL after
        //you = (http://localhost:3000?this=that&you=cool)
        res.write(`<!DOCTYPE html><html><body><h1>${req.query.you}`)
      }


    })

}
