const express = require('express')
const app = express()
const logger = require('./logger')
const morgan = require('morgan')
const authorize = require('./authorize')

//Schema di base: req => middleware => res
app.use(logger) //applicazione della funzione di middleware ad ogni router definito in seguito.
                //Le suddette andrebbero inserite in un modulo a parte e esportate con la dici-
                //tura module.export. Una valida alternativa, sarebbe quella di inserire la fun-
                //funzione di middleware all'interno del singolo router --> non giovando però 
                //alla pulizia del codice. Ad esempio:

                //app.get('/',logger, (req, res)=>{
                //   res.send('Home')
                //})
app.use([logger, authorize])
app.use(morgan('tiny'))


//First Application
app.get('/', (req, res)=>{
    res.send('Home')
})

app.get('/about', (req, res)=>{
    res.send('About')
})
app.get('/api/products', (req, res)=>{
    res.send('Products')
})

app.get('/api/items', (req, res)=>{
    res.send('Items')
})



app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})