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


http.createServer((res, req) => {
        res.write('<h1>Hello There</h1>');
        res.end();
}).listen(3000);

```
