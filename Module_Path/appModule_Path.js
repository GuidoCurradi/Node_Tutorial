const path = require('path')
console.log(path.sep)


const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath) //restituisce il percorso con il carattere delimitatore --> \content\subfolder\test.txt

const base = path.basename(filePath)
console.log(base) //restituisce l'ultima porzione del path passato come parametro, in questo caso --> test.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute) //restituisce il percorso assoluto --> C:\Users\ACER\Desktop\Develop\Node.js\Module_Path\content\subfolder\test.txt

