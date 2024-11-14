/* TODO:

Create a server that listen on port 3000 
and responds with the relevant data.json

*/

const http = require('node:http');
const fs = require('node:fs');

http.createServer((req, res) => {
    const baseURL = req.protocol + '://' + req.headers.host + '/';
    const reqUrl = new URL(req.url, baseURL);
    const path = reqUrl.pathname;
    let data = '';
    
    if (path === "/api") { 
        data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
        console.log(JSON.parse(data));
        res.setHeader('Content-Type', 'application/json');
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        data = "<h1>Welcome to this page</h1>";
    }

    res.end(data);
}).listen(3000);
