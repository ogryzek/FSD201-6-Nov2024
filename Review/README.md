# Review - Up to Week 4  
  
Items for Review  
  - Standard Library
    - REST Web Server
    - Read/Write files
  - Promises Sync vs Async
  - Express CRUD
  - Postman
  - Middleware  

## Standard Library Web Server  

A basic web server:
```js
const http = require('http');


http.createServer((req, res) => {
        res.write('<h1>Hello There</h1>');
        res.end();
}).listen(3000);

```

Routing web requests based on path and method (http verb): 

```js
const http = require('http');

function myRouter(req) {
    const path = req.url;
    const verb = req.method;
    if(path === '/') {
        return `The home page was ${verb} requested`;
    } else if (path === '/lol') {
        if (verb === 'GET') {
            return 'GET ME the /lol page.';
        } else if (verb === 'POST') {
            return 'POST to /lol is not implemented yet';
        } else if (verb === 'DELETE') {
            return 'You cannot delete me!';
        }
    }
}

http.createServer((req, res) => {
    const response = myRouter(req);
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1>My Page</h1><br><p>${response}</p>`);
    res.end();
}).listen(3000);

```
