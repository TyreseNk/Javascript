const fruit= [9,2,34];
const groenten =[6,8];
const begin = 1;
const eind = 5;
function combineerEnManipuleer(array1,array2,beginwaarde,eindwaarde){
    let newarr = [];
    newarr = [...array1,...array2];
    newarr =[beginwaarde,...newarr,eindwaarde];
    newarr.sort(function(a,b){return b - a});
    return newarr;
}
let nieuwearray=combineerEnManipuleer(fruit,groenten,begin,eind);
console.log(nieuwearray)
