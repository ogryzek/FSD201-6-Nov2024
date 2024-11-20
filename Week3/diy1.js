const express = require('express');
const app = express();
const port = 3000;

app.get('/api/name', (req, res) => {
    res.status(200).send('Drew Ogryzek');
});

app.get('/students/number', (req, res) => {
    let myNum = Math.ceil(Math.random() * 100);
    res.send(`${myNum}`);
});

app.post('/courses/n1ton2', (req, res) => {
    let myNum = 1000 + Math.floor(Math.random() * 1000);
    res.status(200).send(`${myNum}`);
});

app.listen(port);
