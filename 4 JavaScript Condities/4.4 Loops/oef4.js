const prompt = require ("prompt-sync")();

const tekst = prompt("geef een text in. ");
let nieuwetekst="";

for (let i = tekst.length-1; i >=0 ; i--){
    nieuwetekst += tekst[i];
    
}

console.log(nieuwetekst);