let array =[1,2,3];
function printAlleMogelijkheden(array){
    array.forEach(element1 => {
        array.forEach(element2=>{
            console.log(element1,element2);
        });
    });
}
//let nieuwarray = printAlleMogelijkheden(array);
//console.log (nieuwarray);