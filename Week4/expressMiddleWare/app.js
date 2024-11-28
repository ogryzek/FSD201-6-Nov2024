const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

app.use('/user/:id', (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
  })
  

app.get('/user/:id', (req, res, next) => {
    res.send('USER')
})

app.use('/user/:id', (req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    next()
  }, (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
})

app.get('/user/:id', (req, res, next) => {
    console.log('ID:', req.params.id)
    next()
}, (req, res, next) => {
    res.send('User Info')
})
  
// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', (req, res, next) => {
    res.send(req.params.id)
})

app.get('/user/:id', (req, res, next) => {
    // if the user ID is 0, skip to the next route
    if (req.params.id === '0') next('route')
    // otherwise pass the control to the next middleware function in this stack
    else next()
}, (req, res, next) => {
    // send a regular response
    res.send('regular')
})
  
// handler for the /user/:id path, which sends a special response
app.get('/user/:id', (req, res, next) => {
    res.send('special')
})

function logOriginalUrl (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }
  
function logMethod (req, res, next) {
    console.log('Request Type:', req.method)
    next()
}
  
const logStuff = [logOriginalUrl, logMethod]
    app.get('/user/:id', logStuff, (req, res, next) => {
    res.send('User Info')
})

// error handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})