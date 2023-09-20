//Import
const express = require('express')
const path = require('path')

const app = express() //new express app
app.use(express.static(path.join(__dirname, 'public'))); //Import static and middleware file --> css, js, image


//setup url
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './index.html'))
}) 

//for all different url from the base '/' 
app.all('*', (req, res)=>{
    res.status(404).send('Resource not found')
})

//Di base, potremmo evitarci app.get semplicemente spostando l'index.html all'interno della cartella public. Così
//facendo aggiungeremmo tutti gli elementi necessari alla pagina web in modo del tutto statico

//Server port
app.listen(5000, ()=>{
    console.log('server is listening on port 5000...')
})





//-----------------------------BASIC ANNOTATION------------------------------------------

// app.get('/', (req, res)=>{
//     console.log('user hit the resource')
//     res.status(200).send('Home Page')
// })

// app.get('/about', (req, res) =>{
//     res.status(200).send('About Page')
// })

// app.all('*', (req, res)=>{
//     res.status(404).send('<h1> Resorce not found </h1>')
// })

// app.listen(5000, ()=>{
//     console.log('Server is listening on port 5000')
// })




