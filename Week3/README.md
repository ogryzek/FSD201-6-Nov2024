# Week 3  
  
## Exercise 01  
  
1. Create a web server using [Express](https://expressjs.com/) that responds to a get request. Use [Postman](https://www.postman.com/) to test your web server.  
  
## Exercise 02  
  
2. Look at the `getNewToyID()` function. What are some noticeable issues with it and how might they be resolved?  

```js
function getNewToyID() {
    const lastToy = toys[toys.length -1];
    return lastToy.id + 1;
}
```

## Exercise 03  
  
Debug the post request:  
  
```js
app.post('/api/v1/toys', (req, res) => {
    const newToy = Object.assign({id: getNewToyID()}, req.body)
    toys.push(newToy);

    fs.writeFile("./data/data.json", JSON.stringify(toys), err => {
        res.status(201).json({ status: "success", data: toys });
    });
});
```
