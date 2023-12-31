const express = require('express')
const app = express()
const {people} = require('../JSON_Basics/data.js')

app.get('/api/people', (req, res)=>{
    res.status(200).json({success:true, data:people})
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})