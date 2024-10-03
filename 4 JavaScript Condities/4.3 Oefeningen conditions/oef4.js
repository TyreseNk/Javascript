const prompt = require("prompt-sync")();
const jaar = Number(prompt("Geef het jaar "));
const maand = Number(prompt("Geef de maand "));
if(jaar%4 ==0 &&jaar%100!=0||jaar%400==0){
    if(maand == 2){
        console.log("Februari in een schrikkeljaar");        
    }
    else{
        console.log("geen februari")
    }
}else{
    if(maand == 2){
        console.log("Februari in een februari in een normaal jaar");        
    }else{
        console.log("geen februari")
    }
}
