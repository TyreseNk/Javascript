const prompt = require("prompt-sync")();
const grootte = Number(prompt("geef aantal lijnen in. "));
let regel ="";
for (let i= 0 ; i< grootte;i++) {
    if(i%2==0){

    
    for(let j= 1 ; j<= grootte;j++){
        if(j % 2 !=0){
            regel+="#";
        }else{
            regel+=" ";
        }
    }
    }else{
        for(let j= 1 ; j<= grootte;j++){
            if(j % 2 ==0){
                regel+="#";
            }else{
                regel+=" ";
            }
        }
    }
    console.log(regel);
    regel="";
}

