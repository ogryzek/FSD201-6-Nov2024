const http = require('http');
// const url = require('url');

http.createServer((req, resp) => {
    console.log(`the req url is: ${req.url}`);
    // const baseURL = req.protocol + '://' + req.headers.host + '/';
    // const reqURL = new URL(req.url, baseURL);
    // const searchParams = new URLSearchParams(reqURL.searchParams);

    // for (const p in searchParams) console.log(p);
    params = req.url.split('/')
    for (const p in params) console.log(params[p]);

    resp.setHeader('Content-Type', 'text/html');
    resp.end('<h1>Search Parameters</h1>');
}).listen(3000);