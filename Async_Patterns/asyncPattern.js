const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.end('Home Page')
    }

    if(req.url === '/about'){
        for(let i=0; i<50; i++){
            for(let j=0; j<50; j++){
                console.log(`${i} ${j}`)
            }
        }

        res.end('About page')
    }
    if(req.url === '/error'){
        res.end('error page')
    }
})

server.listen(5000, ()=>{
    console.log('Server listening on port 5000...')
})