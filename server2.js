const http = require('http');

http.createServer((req, res) => { res.end("Hello world!\n")}).listen(3001);
