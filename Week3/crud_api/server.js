const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const toys = JSON.parse(fs.readFileSync("./data/data.json", 'utf-8'));
app.use(express.json())

function getNewToyID() {
    const lastToy = toys[toys.length -1];
    return lastToy.id + 1;
}

app.get('/api/v1/toys', (req, res) => {
    res.status(200).json({
        status: "success",
        data: toys
    });
});

app.post('/api/v1/toys', (req, res) => {
    req.body;
    const newToy = Object.assign({id: getNewToyID()}, req.body)
    console.log(`the new toy is: ${JSON.stringify(newToy)}`);
    toys.push(newToy);

    fs.writeFile("./data/data.json", JSON.stringify(toys), err => {
        res.status(201).json({ status: "success", data: toys });
    });
});

app.listen(port);
