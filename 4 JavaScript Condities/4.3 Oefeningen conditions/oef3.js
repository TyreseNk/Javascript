const prompt = require ("prompt-sync")();
const score1 = Number(prompt("geef score 1."));
const score2 = Number(prompt("geef score 2."));
if(score1>50 && score2 >50){
    console.log("Beide scores zijn goed")
}else if(score1>50||score2>50){
    console.log("Een score is goed")
}else{
    console.log("Beide scores zijn slecht")
}