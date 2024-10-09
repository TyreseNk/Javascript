const prompt = require("prompt-sync")();
function berekenSom(start,eind){
    let som=0;
    if(start>eind){
        for(let i = eind;i<=start;i++){
            som+=i
        }
    }
    else{
        for(let i = start;i<=eind;i++){
            som+=i
        }
    }
    return som;
}
const start = Number(prompt("geef aantal start getal in. "));
const eind = Number(prompt("geef aantal eind getal in. "));
console.log(berekenSom(start,eind));
