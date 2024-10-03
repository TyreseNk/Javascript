const prompt = require ("prompt-sync")();
const cijfer=Number(prompt("Geef een cijfer in tussen 1 en 3 "))
switch(cijfer){
    case 1:
        console.log("Een");
    break;
    case 2:
        console.log("Twee");
    break;
    case 3:
        console.log("Drie");
    break;
}