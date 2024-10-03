const prompt = require("prompt-sync")();
const maand = Number(prompt("Geef de maand als getal"));
switch(maand){
    case 1:
    case 2:
    case 12:
        console.log("Winter");
    break;
    case 3:
    case 4:
    case 5:
        console.log("Lente");
    break;
    case 6:
    case 7:
    case 8:
        console.log("Zomer");
    break;
    case 9:
    case 10:
    case 11:
        console.log("Herfst");
    break;
}