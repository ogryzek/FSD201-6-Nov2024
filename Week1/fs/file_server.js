const http = require('http');
const fs = require('fs'), path = require('path');

http.createServer((req, res) => {
    fs.readFile('./lib/second.html', (err, data) => {
        res.setHeader('Content-Type', 'text/html').end(data)
    });
}).listen(3000);
