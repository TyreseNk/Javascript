function verwijderWood(tekst,woord){
    let deelzin = tekst.split(woord)
    let nieuwezin = deelzin.join(" ")
    return nieuwezin;
}
let zin = verwijderWood("hey ik ben tyrese.","ben")
console.log(zin)
