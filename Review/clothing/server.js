const http = require('http');
const fs = require('fs');
const clothing_data_path = './data/clothing.json';
const clothing = fs.readFileSync(clothing_data_path);

http.createServer((req, res) => {
    const method = req.method;
    const path = req.url;

    res.setHeader('Content-Type', 'application/json');
    if (path === '/clothing' && method === 'GET') {
        res.statusCode = 200;
        res.write(clothing);
    } else if (path === '/clothing' && method === 'POST') {
        // now, rewrite this application using expressjs, with express.json
        // for the body parsing.
    } else if (path === '/clothing') {
        res.statusCode = 405;
    }
    res.end();
}).listen(3000);
