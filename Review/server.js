const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>Hello Webserver</h1>');
    res.end();
}).listen(3000);
