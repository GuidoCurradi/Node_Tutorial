//npm - global command, comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i<packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash') 

const items = [1, [2,[3, [4]]]]
console.log(items)
const newItems = _.flattenDeep(items); //restituisce --> da: [ 1, [ 2, [ 3, [Array] ] ] ] a [ 1, 2, 3, 4 ]
console.log(newItems);


//PUSH SU GIT:
// - git init
// - git add .
// - git commit -m "first commit"
// - git remote add origin "http della repository"
// - git branch -M main
// - git push -u origin main

//Nel caso di un Clone ragionevolmente non avremo tutte le dipendenze (che ricordiamo aver inserito nel gitignore proprio per non includere
//nel push), dopo aver importato il progetto clonato, basterà aprire il terminale e digitare npm install.

//npm uninstall <packageName>
