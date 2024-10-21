let array =[1,2,2,3,6,5,6,7];
let getal = 3;
function filterGroterDan(arr,getal){
    let filterdearray=[];
    filterdearray = arr.filter(element =>{ 
        return element >getal;
    });
    return filterdearray;
}

let filterarr = filterGroterDan(array,getal);
console.log (filterarr);