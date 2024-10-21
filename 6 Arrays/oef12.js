const array1= [9,2,6,8,34];
function filterComplex(array1){
    let nieuwarray = array1.filter(function(a){
        return a > 10 && a % 2==0;
    })
    
    return nieuwarray;
}
let nieuwearray = filterComplex(array1);
console.log(nieuwearray)
