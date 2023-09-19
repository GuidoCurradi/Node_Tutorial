//MODULES: Sostanzialmente quando programmiamo in node, come in ogni linguaggio di programmazione, è impensabile poter includere tutto il
//codice necessario all'applicazione all'interno di un unico file. Per questo motivo, gran parte delle linee di codice verranno "smistati"
//in moduli, per favorirne la leggibilità e l'interoperabilità. Sostanzialmente si tratta di codice incapsulato, del quale condividiamo solo
//lo stretto necessario. NodeJS utilizza quello che viene definito COMMONJS che, di default, interpreta ogni file come un modulo a se stante.

const names = require('./4-names')
const sayHi = require('./utils')
console.log(names)
console.log(sayHi)

const data = require ('./6-alternative-flavor')
console.log(data)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

require('./7-mind-grenade') //in questo modulo abbiamo definito una funzione che verrà eseguita anche se non l'abbiamo assegnata ad
                                   //una variabile specifica.

