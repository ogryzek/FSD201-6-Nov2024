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

## Move Router to its own module  
  
```js
// myrouter.js
exports.myRouter = function(req) {
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

```

Import into the webserver:

```js
// webserver.js
const http = require('http');
const lol = require('./myrouter.js');

http.createServer((req, res) => {
    const response = lol.myRouter(req);
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h1>My Page</h1><br><p>${response}</p>`);
    res.end();
}).listen(3000);
```

## Read/Write to files  
  
```js
const http = require('http');
const fs = require('fs');
const pathToFile = './foods/fruit.js'

http.createServer((req, res) => {
    const fruits = fs.readFileSync(pathToFile);
    res.setHeader('Content-Type', 'application/json');
    res.write(fruits);
    res.end();
}).listen(3000);

```

### Writing to a file  
  
To write to a file, we can use `fs.writeFile`, `fs.writeFileSync` or `fs.appendFile`, `fs.appendFileSync`. You can think through a little how these may differ and what makes sense for your own use case.  
  
`./data/clothing.js`: 
```json
[
    {
        "id": 1,
        "type": "t-shirt",
        "size": "medium",
        "color": "white",
        "description": "this is a t-shirt"
    },
    {
        "id": 2,
        "type": "t-shirt",
        "size": "small",
        "color": "white",
        "description": "this is a t-shirt"
    },
    {
        "id": 3,
        "type": "t-shirt",
        "size": "large",
        "color": "white",
        "description": "this is a t-shirt"
    }
]

```

Let's create an endpoint called `/clothing` that accepts a GET request and returns all of the clothing as a json list.  
  
```js
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const method = req.method;
    const path = req.url;
    res.setHeader('Content-Type', 'application/json');
    if (path === '/clothing' && method === 'GET') {
        res.status(200);
        res.write("This is allowed, yay!");
    } else if (path === '/clothing') {
        res.status(405);
        res.write('Method Not Allowed');
    }
    res.end();
}).listen(3000);

```
