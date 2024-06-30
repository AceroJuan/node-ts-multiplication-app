import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

console.log(yarg)

const writeFileSync = fs.writeFileSync;
const mkdirSync = fs.mkdirSync;

let outputMessage ="";
let base = yarg.b;
let limit = yarg.l
const headerMessage = `
===================================
          Tabla del ${base}
===================================\n
`
for (let number = 1; number <= limit; number++) {
 outputMessage += `${base} X ${number} = ${base * number}\n`
}

outputMessage = headerMessage + outputMessage
if (yarg.s === true) console.log(outputMessage)
const outputPath = "outputs" 
mkdirSync(`${outputPath}`, {recursive:true})
writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage)
console.log("file created!")





