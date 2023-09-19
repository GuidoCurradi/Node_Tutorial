//Started operating system process
console.log('first')
setTimeout(()=>{
    console.log('second')
}, 0)
console.log('third')
//completed and exited operating system process

//- si esegue il console.log('first')
//- si esegue il console.log('third')
//- si esegue il console.log('second')