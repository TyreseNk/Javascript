const prompt = require("prompt-sync")();
let driehoek = "#";
const aantallijnen = Number(prompt("geef aantal lijnen in. "));
for (i = 0; i < aantallijnen; i++) {
    console.log(driehoek);
    driehoek += "#"
}