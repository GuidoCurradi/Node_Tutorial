const express = require('express')
const app = express();
const{products} = require('./data.js')

app.get('/', (req, res)=>{
    res.send('<h1> Home Page </h1><a href="/api/products"> products</a>')
})

app.get('/api/products/:productID', (req, res)=>{
    const {productID} = req.params;
    const singleProduct = products.find((product)=> product.id === Number(productID))

    if(!singleProduct){
        res.status(404).send('Product does not exists')
    }

    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res)=>{
    console.log(req.params)
    res.send('Hello World')
})

app.get('/api/products', (req, res)=>{
    const newProducts = products.map((product)=>{
        const{id, name, image} = product;
        return {id,name,image}
    })

    res.json(newProducts)
})




app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
}) 