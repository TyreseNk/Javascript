const prompt = require ("prompt-sync")();
let getal=0
do{
    getal = Number(prompt("geef een getal in tussen 1 en 10. "));
} while(getal<1||getal>10)
    console.log( getal);