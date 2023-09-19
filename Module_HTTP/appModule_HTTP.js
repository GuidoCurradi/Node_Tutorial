const http = require ('http');

//req = richiesta dal client
//res = risposta al client
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is out short hist')
    }
    res.end(`
        <h1>Ooops!</h1>
        <p>We can't seem to find the page you are looking for </p>
        <a href="/"> Back Home </a>
    `)
})

server.listen(3000) //specifico la porta dove il server è in ascolto