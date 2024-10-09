function macht(x,n){
    if(n===0){
        return 1;
    }else{
        return x * macht(x,n-1);
    }
}
console.log(macht(2,8));