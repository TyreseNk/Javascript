let array =[1,2,2,3,6,5,6,7];
function eersteEnLaatste(array){
    let nieuwarr= [];
    nieuwarr = array.shift();
    nieuwarr= nieuwarr.concat(array.pop());
    return nieuwarr 
}
let nieuwarray = eersteEnLaatste(array);
console.log (nieuwarray);