const prompt = require ("prompt-sync")();
const getal = Number(prompt("geef een getal. "));
if(getal<0){
    console.log("negatief")
}else if(getal>0){
    console.log("positief")
}else{
    console.log("nul")
}