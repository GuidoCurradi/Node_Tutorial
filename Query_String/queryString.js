const express = require('express');
const { products } = require('../JSON_Basics/data');
const app = express();


//Accetta tutti i queryParams quindi url della forma /api/v1/query?name=john&id=4
// - http://localhost:5000/api/v1/query?search=a
// - http://localhost:5000/api/v1/query?limit=2
app.get('/api/v1/query', (req,res)=>{
    // console.log(req.params)

    const{search, limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }

    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }

    if(sortedProducts.length < 1){
        // res.status(200).send('No products matched your search')
        return res.status(200).json({success:true, data:[]})
    }

    res.status(200).json(sortedProducts)
    

})


app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
}) 