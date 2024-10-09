const prompt = require("prompt-sync")();
function isPrime(n){
    let teller=0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
           teller++;  
        }      
    }
    if(teller==2){
        return true;
    }else{
        return false;
    }
}
function grootstePriem(limiet){
    let grootste=0;
    for(let i=1;i<=limiet;i++){
        if(isPrime(i)){
            grootste=i;
        }
    }
    return grootste;
}
const limiet= Number(prompt("geef een limiet in. "));;
console.log(grootstePriem(limiet));