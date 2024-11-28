const express = require('express');
const app = express();
const port = 3000;

function getOriginalURL(req, res, next) {
    console.log('Request URL: ', req.originalUrl);
    next();
}

function getMethod(req, res, next) {
    console.log('Request Method: ', req.method);
    next();
}

const listOfMiddlewarFunctionCalls = [getOriginalURL, getMethod];

app.get('/getURL', listOfMiddlewarFunctionCalls, (req, res) => {
    res.send('<h1>Get URL</h1>');
})

app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

app.use('/users', (req, res, next) => {
    console.log('Req url: ', req.method);
    next();
});

app.get('/', (req, res) => {
    res.send("Hey");
});

app.get('/users', (req, res) => {
    res.send("<h1>Users</h1>");
});

app.get('/users/:id', (req, res) => {
    res.send('<h1>Users/:id</h1>')
});


app.listen(port);