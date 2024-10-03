const prompt = require("prompt-sync")();
let driehoek = "#";
const aantallijnen = Number(prompt("geef aantal lijnen in. "));

for (let i = 1; i <= aantallijnen; i++) {
    let regel= "";
    for(let e= 1; e <= aantallijnen-i ;e++){
        regel += " ";
    }
    console.log(regel+driehoek);
    driehoek += "#";
   
}