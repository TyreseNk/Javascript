function isEven(n){
    if(n%2==0){
        return true;
    }else{
       return false;
    }
}
for(let i=1;i<=10;i++){
    if(isEven(i)){
        console.log(`${i} is even`);
    }else{
        console.log(`${i} is oneven`);
    }
}