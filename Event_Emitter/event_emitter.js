const EventEmitter = require ('events') //si importa il modulo necessario

//Ora abbiamo due opzioni:
// 1) Creare un EventEmitter personalizzato --> e ciò necessita un'estensione della classe
// 2) Emettere semplicemente un evento

//2)
const customEmitter = new EventEmitter() //istanza d'oggetto

customEmitter.on('response', (name,id)=>{
    console.log(`Data Recieved ${name} with id : ${id}`)
}) //Listener

customEmitter.on('response', ()=>{
    console.log('Some other logic here')
}) //Listener

customEmitter.emit('response', 'john', 34) //Emit: per poter funzionare deve prima registrare i listener ed è possibile inoltre passare dei parametri
