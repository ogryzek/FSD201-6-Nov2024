const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.get('/', (req, resp) => {
    resp.send('Hello there!');
});

app.get('/firstpage', (req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.send(data.toString());
    });
});

app.listen(port);
