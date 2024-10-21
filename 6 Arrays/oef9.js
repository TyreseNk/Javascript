let array =[1,2,3];
function wisselOm(array){
    let [a,b]=array;
    let nieuwarray =[b,a];
    return nieuwarray 
}
let nieuwarray = wisselOm(array);
console.log (nieuwarray);