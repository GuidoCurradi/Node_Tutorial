const amount = 12

if(amount < 10){
    console.log('small number');
}else{
    console.log('large number');
}

console.log(`it's my first node app!!!`);


//GLOBALS - NO WINDOW

//__dirname: restituisce la posizione della cartella del file Javascript corrente --> restituisce: C:\Users\ACER\Desktop\Develop\Node.js
//__filename: rappresenta il percorso assoluto del file in esecuzione --> C:\Users\ACER\Desktop\Develop\Node.js\app.js
//require: funzioni per usare il modulo
//module: informazioni circa il modulo corrente
//process: informazioni circa l'ambiente dove il programma viene eseguito: macchina locale o browser


setInterval(()=>{
    console.log('hello wold')
}, 1000) //Ogni tot secondi (circa 1) stamperà in console 'hello world' finché l'app js non verrà arrestata
