//PER LEGGERE E SCRIVERE SU UN FILE

const {readFileSync, writeFileSync} = require('fs');

//Le due scritture si equivalgono
// const fs = require('fs');
// fs.readFileSync

//LETTURA
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second)

//SCRITTURA
writeFileSync(
    './content/result-sync.txt',
     `Here is the result: ${first}, ${second}`,
     {flag: 'a'}
)

//è possibile impostare i flag --> se settato ad 'a' appende senza sovrascrivere il vecchio contenuto,
//altrimenti sovrascriverà il vecchio contenuto


