const http = require('http');

const myRouter = (req) => {
    const path = req.url;
    const verb = req.method;
    console.log(`path: ${path}`);
    console.log(`verb: ${verb}`);
    if (path === '/') {
        return 'The Home page was requested';
    } else if (path === '/lol') {
        if (verb === "GET") {
            return 'The lol page was requested';
        } else if (verb === "POST") {
            return 'The lol page was POST requested';
        }    
    } else if (path === '/hey') {
        return 'The hey path was requested';
    }
};

http.createServer((req, res) => {
    const response = myRouter(req);
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1>Hello Page</h1><br><p>${response}</p>`);
    res.end();
}).listen(3000);
