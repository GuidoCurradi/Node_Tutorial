//ESEMPIO 1

const{readFile, writeFile, read} = require('fs')

console.log('started a first task')
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('complete first task')
})

console.log('starting next task')

//Il ciclo della procedura è il seguente:
// - si esegue il console.log('started a first task')
// - si esegue il console.log('starting next task')
// - si entra nel read file, si stampa il risultato e si esegue il console.log('complete first task')