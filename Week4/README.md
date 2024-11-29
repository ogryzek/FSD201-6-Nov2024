# Week 4  
  
Weekly Priorities:  
  - [Basic Node and Express](https://www.freecodecamp.org/learn/back-end-development-and-apis)  
  - Chapter 10 – DIY  3  
  - Chapter 11 – DIY  3  
  
Further Reading:  
  - [Writing Middleware](https://expressjs.com/en/guide/writing-middleware.html)
  
Have a read of [Using Middleware](https://expressjs.com/en/guide/using-middleware.html) from the ExpressJS docs for a nice, additional overview.  
  
## Chapter 10 - Middleware  

We can call middleware functionality with the `.use` syntax, for example in this case, not binding it to any particular path, it will activate this middleware function call with every API call...  

```js
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("Hahahaha");
    next();
});

app.user('/lol', (req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

app.get('/', (req, res) => {
    req.end('<h1>Hello</h1>');
});

app.get('/lol', (req, res) => {
    req.end('<h1>LoL</h1>');
});

```

### Using an array for composability/reusablity:  
  
```js
function getOriginalURL(req, res, next) {
    console.log('Request URL: ', req.originalUrl);
    next();
}

function getMethod(req, res, next) {
    console.log('Request Method: ', req.method);
    next();
}

app.get('/', [getOriginalUrl, getMethod], (req, res) => {
    res.send('<h1>Hello</h1>');
});

```

### Error handling  
  
You can also log or respond with errors using middleware, e.g.  
  
```js
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke');
});

```

### Third-party Middleware

Have a look at some of the [common middleware](https://expressjs.com/en/resources/middleware.html) to use with express.  
  
Here's an example using [cookie-parser](https://www.npmjs.com/package/cookie-parser):  
  
```js
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
```
