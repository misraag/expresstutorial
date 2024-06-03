const express = require('express');
const morgan = require('morgan');
const app = express();
// const logger = require('./logger')
// const authorize = require('./authorize')

// app.use([authorize, logger])
app.use(morgan('tiny'))


app.get('/', (req, res) => {
    res.send("Home")
})

app.get('/about', (req, res) => {
    res.send("About")
    console.log(req.user)
})

app.get('/api/items', (req, res) => {
    res.send("Items")
})

app.get('/api/products', (req, res) => {
    res.send("Products")
})

app.listen(5000, () => {
    console.log("Server is listening to port 5000.....")
})