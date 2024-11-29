const http = require('http');
const lol = require('./myrouter');


http.createServer((req, res) => {
    const response = lol.myRouter(req);
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1>Hello Page</h1><br><p>${response}</p>`);
    res.end();
}).listen(3000);
