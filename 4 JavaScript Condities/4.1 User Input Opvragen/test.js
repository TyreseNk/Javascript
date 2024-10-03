// Maakt het mogelijk om prompt() te gebruiken
const prompt = require ("prompt-sync")();

// Laat de gebruikers zijn naam typen en slaat hem op
let naam = prompt("Wat is je naam? ");
console.log("Je naam is "+ naam+".")