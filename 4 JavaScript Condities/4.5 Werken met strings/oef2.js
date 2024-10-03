const prompt = require ("prompt-sync")();
let tekst = prompt("geef een tekst in. ");
if(tekst.substring(tekst.length-1,1)!="."){
    tekst+=".";
}
console.log(tekst.toUpperCase());