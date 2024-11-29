const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const fruits = fs.readFileSync('./foods/fruit.json');
    res.setHeader('Content-Type', 'application/json');
    res.write(fruits);
    res.end();
}).listen(3000);
