const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const path = req.url.split('?')[0];
    const searchParams = req.url.split('?')[1];
    console.log(path);
    console.log(searchParams);

    if (path === "/params") {
        for (const p in searchParams) 
            console.log(p);

        res.write(searchParams);
    } else {
        res.write("I don't know how to respond to that.");
    }
    res.end();
}).listen(3000);
