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

/* 
    The Read part of CRUD
    GET /api/v1/toys returns a list of toys 
    from the database (data.json)
*/
app.get('/api/v1/toys', (req, res) => {
    res.status(200).json({
        status: "success",
        data: toys
    });
});

/*
    The Create part of CRUD
    POST /api/v1/toys creates a new toy
    using the data posted in the body of
    the post request
*/
app.post('/api/v1/toys', (req, res) => {
    req.body;
    const newToy = Object.assign({id: getNewToyID()}, req.body)
    console.log(`the new toy is: ${JSON.stringify(newToy)}`);
    toys.push(newToy);

    fs.writeFile("./data/data.json", JSON.stringify(toys), err => {
        res.status(201).json({ status: "success", data: toys });
    });
});

// Find by ID could be considered to be Read from
// CRUD and it is essential to being able to 
// update or delete a specific item.
app.get('/api/v1/toys/:id', (req, res) => {
    const id = Number(req.params.id)
    let toy = toys.find(toy => toy.id == id );

    if(!toy) {
        return res.status(404).json(
            {
                status: 'fail',
                message: `No toy exists with an id: ${id}`
            }
        )
    }

    res.status(200).json({
        status: "success",
        data: toy
    });
});

app.listen(port);
