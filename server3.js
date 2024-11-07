const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    .end(`client asked: ${req.url}\n`);
}).listen(3000);
