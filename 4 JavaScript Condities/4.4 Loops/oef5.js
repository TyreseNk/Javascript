const prompt = require ("prompt-sync")();
let getal=0,som=0;
do{
    getal = Number(prompt("geef een getal. "));
    som+=getal;
}  while(getal>0);
console.log(som);