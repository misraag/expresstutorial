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

app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params;
    const singleProduct = products.find((product) => 
        product.id === Number(productId)
    )
    if(!singleProduct) {
        return res.status(404).send('<h1>This product does not exist!</h1>')
    }

    return res.json(singleProduct)
})

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query
    let filteredProducts = [...products]

    if(search) {
        filteredProducts = filteredProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if(limit) {
        filteredProducts = filteredProducts.slice(0, Number(limit))

    }
    if(filteredProducts.length < 1) {
        return res.status(200).json({'success':true, 'data': []});
    }

    return res.status(200).json(filteredProducts)

    //Search for http://localhost:5000/api/v1/query?search=a&limit=1 and you will get result that will search for product that has name starting with a and will limit the output to 1 product

})

app.get('/api/products')

app.listen(5000, ()=> {
    console.log('server is listening to port 5000....')
})