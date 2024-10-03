const prompt = require("prompt-sync")();
let driehoek = "#";
const aantallijnen = Number(prompt("geef aantal lijnen in. "));

for (let i = 1; i <= aantallijnen; i++) {
    let regel= "";
    for(let e= 1; e <= aantallijnen-i;e++){
        regel += " ";
    }
   for( let j =1; j <=(i*2)-1;j++){
    regel+="#"
   }
    console.log(regel);
    regel="";
   
}