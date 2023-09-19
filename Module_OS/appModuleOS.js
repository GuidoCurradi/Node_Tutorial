//Il modulo OS, del sistema operativo, fa parte dei moduli integrati che Node ci fornisce.
//La configurazione di base è la seguente:

const os = require('node:os') //essendo un modulo built-in non è necessario eseguire nessuna installazione
                         //quindi, mediante os abbiamo accesso a tutti i metodi messi a disposizione.

//informazioni sull'utente corrente
const user = os.userInfo()
console.log(user)

//Per runnare file.js all'interno di una cartella, specificare il percorso della sottodirectory: node Module_OS/appModuleOS.js

//Tempo di attività del sistema in secondi
console.log(`The System Uptime is ${os.uptime} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)
