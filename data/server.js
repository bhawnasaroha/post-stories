'use strict';
const fs = require('fs');
const http = require('http');

    const hostname = '127.0.0.1';
    const port = 4000;

    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json', 'Access-Control-Allow-Origin: *');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.end(fs.readFileSync('db.json'));
      // res.end(fs.readFile('db.json', (err, data) => {
      //   if (err) throw err;        
      //   console.log(data);
      // }));  
    });
    
    let rawdata = fs.readFileSync('db.json');
    // let rawdata = fs.readFile('db.json', (err, data) => {
    //   if (err) throw err;
    //   console.log(data);
    // });
    let db = JSON.parse(rawdata);
    console.log(db);    
    // rawdata = fs.writeFileSync('db.json', data);
    // db=JSON.parse(rawdata);

    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
