const http = require('http');

http.createServer(({ url: path}, resp) => {
    console.log(`Someone requested: ${path}`)
    resp.setHeader('Content-Type', 'text/html');
    if (path === '/') {
        resp.write('client requests home page.');
    } else if (path === '/products') {
        resp.write('client requests products page.');
    } else if (path === '/persons') {
        resp.write('client requests persons page.');
    } else {
        resp.statusCode = 404;
        resp.write('<h1>page not found</h1>');
    }

    resp.end();
 
}).listen(3000);
