
if(tekst.substring(tekst.length-1,1)!="."){const prompt = require ("prompt-sync")();
let tekst = prompt("geef een tekst in. ");
    tekst+=".";
}
console.log(tekst.toUpperCase());