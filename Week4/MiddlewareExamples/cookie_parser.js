const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 3000;

app.use(cookieParser());

app.get('/', (req, res) => {
    console.log('Cookies: ', req.cookies);
    console.log('Signed cookies: ', req.signedCookies);
    res.send("<H1>My Response</h1>");
});

app.listen(port);