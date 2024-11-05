function SplitsInZinnen(tekst){ 
    let array = tekst.split(".");
    array.map(array=> array.trim() + ".");
    return array;
}
let zin = SplitsInZinnen("hey ik ben tyrese. tyrese hoi.")
console.log(zin)
zin = SplitsInZinnen(" hey ik ben tyrese. hoi tyrese. ")
console.log(zin)