let array =[1,2,2,3,6,5,6,7];
let getal = 3;
function verdubbel(array){
    let nieuwarr= array.map(function(num){
        return num * 2;
    });
    return nieuwarr; 
}
let nieuwarray = verdubbel(array);
console.log (nieuwarray);