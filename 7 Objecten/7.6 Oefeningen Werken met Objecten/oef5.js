let auto ={
    merk:"bmw",
    model:"x",
    bouwjaar:2002
};
console.log(auto);
function upgradeAuto(){
    let upgradedauto = {...auto,nieuweBouwjaar:2002}
    return upgradedauto
}
let nieuwe = upgradeAuto()
console.log(nieuwe);