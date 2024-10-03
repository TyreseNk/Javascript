const prompt = require ("prompt-sync")();
const getal = Number(prompt("geef een getal. "));
for (let i = getal; i > 0; i--){
    console.log(i);
}