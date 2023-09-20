//Stream: utili nella lettura dei file di grandi dimensioni.


//1) Crea un file di grandi dimensioni
// const { writeFileSync } = require('fs')

// for(let i=0; 1<1000; i++){
//     writeFileSync('./content/big.txt', `hello world ${i}\n`, {flag: 'a'})
// }

//2) Setta lo Stream
const {createReadStream} = require('fs');
const stream = createReadStream('./content/big.txt');

stream.on('data', (result)=>{
    console.log(result)
})

stream.on('error', (err)=> console.log(err))

//UTILIZZO DI CHUNCK
// default 64kb
// last buffer - remainder
// highWaternMark - control size
// const stream = createReadStream('./content/big.txt', {highWaternMark: 90000, encoding: 'utf8'});

const streamC = createReadStream('./content/big.txt', {highWaternMark: 90000, encoding: 'utf8'});
streamC.on('data', (result)=>{
    console.log(result)
})

streamC.on('error', (err)=> console.log(err))