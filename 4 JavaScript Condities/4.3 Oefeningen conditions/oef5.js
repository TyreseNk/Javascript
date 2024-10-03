const prompt = require ("prompt-sync")();
const inkomen = prompt("Geef een inkomen. ");
let belasting=0;
if(inkomen<10000){
    belasting = 0;
}else if(inkomen>10000&&inkomen<20000){
    belasting= inkomen*0.10;
}else if(inkomen>20000&&inkomen<50000){
    belasting= inkomen*0.20;
}else{
    belasting= inkomen*0.30;
}
console.log(belasting);
console.log(inkomen-belasting)