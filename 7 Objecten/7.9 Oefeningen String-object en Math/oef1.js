function haalSubzin (tekst , woord){
    let zinnen= tekst.split(". ");
    let juistezin="";
    zinnen.forEach(x => {
        if(x.indexOf(woord)==0){
            juistezin= x;            
        }
    });
    let startindex = juistezin.indexOf(woord);
    if(startindex===-1){
        return "";
    }
    let eindindex = juistezin.indexOf(".",startindex)
    let subzin = juistezin.slice(startindex,eindindex + 1);
    return subzin;
}
let zin = haalSubzin("hey ik ben tyrese. tyrese hoi.","hoi")
console.log(zin)
zin = haalSubzin("hey ik ben tyrese. hoi tyrese.","hoi")
console.log(zin)