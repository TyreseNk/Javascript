const prompt = require ("prompt-sync")();
let tekst = prompt("geef een tekst in. ");
const scheldwoord = prompt("geef een scheldwoord. ");
let sensor = "";
if (tekst.includes(scheldwoord)){
    for(let i = 0 ; i<scheldwoord.length;i++){
        sensor+="*";
    }
    tekst= tekst.replace(scheldwoord,sensor)
    //console.log("Ongepast");
}
else{
    tekst = tekst;
    //console.log("Gepast");
}
console.log(tekst);