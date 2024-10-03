const prompt = require ("prompt-sync")();
const getalstart = Number(prompt("geef een start getal. "));
const getaleind = Number(prompt("geef een eind getal. "));
for ( i = getalstart; i<=getaleind;i++){
    if( i % 2 == 0){
        console.log(i)
    }
}