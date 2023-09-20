const {readFile, writeFile} = require('fs').promises;
const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

//-------------------VERSIONE INIZIALE-----------------------------------

// console.log('START APPLICATION')
//   const getText1 = (path)=>{
//       return new Promise((resolve, reject)=>{
//           readFile(path, 'utf8', (err, data)=>{
//               if(err){
//                   reject(err)
//               }else{
//                   resolve(data)
//               }
//           })
//       })
//  }

//  getText1('./content/first.txt')
//  .then(result =>console.log(result))
//  .catch((err)=>console.log(err))

//  const start1 = async() =>{
//      try{
//          const first = await readFile('./content/first.txt', 'utf8');
//          const second = await readFile('./content/second.txt', 'utf8');
//          await writeFile('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second}`, {flag: 'a'})
//          console.log(first,second)
//      } catch(err){
//          console.log(err)
//      }
    
// }


// start1()



//-------------------------REFACTOR TO ASYNC -----------------------------------------


 const start2 = async() =>{
     try{
         const first = await readFilePromise('./content/first.txt', 'utf8');
         const second = await readFilePromise('./content/second.txt', 'utf8');
         await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first} ${second}`, {flag: 'a'})
         console.log(first, second)
     }catch(err){
         console.log(err)
     } 
 }

 start2()
