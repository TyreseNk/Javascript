let array =[1,2,2,3,6,5,6,7];
function dubbeleVerwijder(array){
    let uniqueArr=[];
    array.forEach(Element => {
        if(uniqueArr.indexOf(Element)==-1){
            uniqueArr.push(Element);    
        }
    });
    return uniqueArr;
}
let uniquenum = dubbeleVerwijder(array);
console.log(uniquenum);