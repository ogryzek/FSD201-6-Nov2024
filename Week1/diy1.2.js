const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    .end('Request is for: ' + req.url);
}).listen(3000);
