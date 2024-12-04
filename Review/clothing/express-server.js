const express = require('express');
const app = express();
const fs = require('fs');
const clothing = fs.readFileSync('./data/clothing.json');

app.use(express.json());

app.get('/clothing', (req, res) => {
    res.write(clothing);
    res.end();
});

app.post('/clothing', (req, res) => {
    clothes = JSON.parse(clothing);
    console.log(JSON.stringify(req.body));
    // clothing.append(req.body)
    // fs.writeFileSync('./data/clothing.json', clothing);
    // res.write(clothing);
    // res.end();
});

app.listen(3000);