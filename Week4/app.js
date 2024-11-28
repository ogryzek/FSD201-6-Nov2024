const express = require('express');
const app = express();

function logOriginal(req, res, next) {
    console.log('Request URL: ', req.originalUrl);
    next();
}

function logMethod(req, res, next) {
    console.log('Request Type: ', req.method);
    next();
}

const logStuff = [logOriginal, logMethod];

app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next()
});

app.use('/users/:id', (req, res, next) => {
    console.log('Request Type: ', req.method);
    next();
});

app.get('/users/:id', (req, res) => {
    res.end('lol');
});

app.get('/hello', logStuff, (req, res, next) => {
    res.send('<h1>My Response</h1>');
});

app.listen(3000);
