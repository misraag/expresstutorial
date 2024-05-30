const express = require('express')
const app = express();
const { products } = require('./data.js');

app.get('/', (req,res)=> {
    res.send('<h1>Homepage</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res)=> {
    const newProducts = products.map((product) => {
        const {id, name, image } = product;
        return { id, name, image };
    })

    res.json(newProducts)
})

app.listen(5000, ()=> {
    console.log('server is listening to port 5000....')
})