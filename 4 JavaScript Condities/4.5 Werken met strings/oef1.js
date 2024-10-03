const prompt = require ("prompt-sync")();
const tekst = prompt("geef een tekst in. ");
if(tekst.length > 10){
    console.log("Dit is een lange tekst.");
} else {
console.log("Dit is een korte tekst.");
}