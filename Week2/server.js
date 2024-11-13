/* TODO:

Create a server that listen on port 3000 
and responds with the relevant data.json

*/

const http = require('node:http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const baseURL = req.protocol + '://' + req.headers.host + '/';
    const reqUrl = new URL(req.url, baseURL);
    const path = reqUrl.pathname;
    
    if (path === "/api") { 
        res.write("This should show the data.json");

    }
    else {
        res.write("<h1>Welcome to this page</h1>");
    }

    res.end();
}).listen(3000);
