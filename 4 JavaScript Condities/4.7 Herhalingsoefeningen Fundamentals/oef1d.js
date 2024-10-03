const prompt = require("prompt-sync")();
let driehoek = "#";
const aantallijnen = Number(prompt("geef aantal lijnen in. "));
const interval = 5;
let teller=0;

for (let i = 1; i <= aantallijnen; i++) {
    let regel= "";
    for(let e= 1; e <= aantallijnen-i;e++){
        regel += " ";
    }
    for( let j =1; j <=(i*2)-1;j++){
        if(teller%interval==0){
        regel+="@";
        teller++;
        }else{
            regel+="#";
            teller++;
        }
    }
    console.log(regel);
    regel="";
   
}