const prompt = require ("prompt-sync")();
let tekst = prompt("geef een tekst in. ");
let newstrng="";
tekest = tekst.toLowerCase();
newstrng = tekst.replace( "is","was");
newstrng = newstrng.substring(0,1).toUpperCase() + newstrng.substring(1,newstrng.length);
console.log(newstrng);