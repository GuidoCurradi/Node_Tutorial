const http = require('http')
const {readFileSync} = require('fs')
const path = require('path')

//get all files --> se si hanno problemi con il percorso relativo, utilizzare il percorso assoluto con path.join (__dirname, 'file.html)
const indexPath = path.join(__dirname, './navbar-app/index.html')
const indexStyles = path.join(__dirname, './navbar-app/styles.css')
const indexImage = path.join(__dirname, './navbar-app/logo.svg')
const indexLogic = path.join(__dirname, './navbar-app/browser-app.js')


const homePage = readFileSync(indexPath, 'utf8')
const homeStyles = readFileSync(indexStyles, 'utf8')
const homeImage = readFileSync(indexImage, 'utf8')
const homeLogic = readFileSync(indexLogic, 'utf8')

const server = http.createServer((req, res)=>{
    // console.log(req.url)  //req.methos - req.url 
    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    //About page
    }else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end() 

    //Styles
    }else if(url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()    

    //Logo
    }else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'text/svg'})
        res.write(homeImage)
        res.end()
    
    //Logic
    }else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)
        res.end()
    
    //404
    }else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>page not found</h1>')
        res.end() 
    }
})

server.listen(5000, () => { //Il numero di porta può essere arbitrario
    console.log('Server is listening on port 5000');
  });