const fruit= ["appel","bannaa","kiwi"];
const groenten =["komkommer","asperge"];
function maakBoodschappenlijst(array1,array2){
    let nieuwarray=array1.concat(array2);
    nieuwarray.sort();
  console.log(nieuwarray);
    for(index in nieuwarray){
        console.log(`${Number(index)+1}:${nieuwarray[index]}`);
    }
    
}
maakBoodschappenlijst(fruit,groenten);
