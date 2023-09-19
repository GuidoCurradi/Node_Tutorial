const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }

    console.log(result)
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err)
            return
        }

        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`
        , (err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})

//se all'interno della funzione non specifichiamo l'UTF-8, in console ci verrà restituito il seguente buffer:
// - <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
//altrimenti ci verrà restituito:
// - Hello this is first text file



