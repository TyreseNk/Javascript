const prompt = require ("prompt-sync")();
const temperatuur = prompt("wat is de temperatuur? ") ;
if(temperatuur>20){
    console.log("Het is warm");
}else{
    console.log("Het is koud");
}