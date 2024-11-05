let auto ={
    merk:"bmw",
    model:"x",
    bouwjaar:2002,
    kilometerstand:15000
};
function updateKilometerstand(object,getal){
    object.kilometerstand +=getal;
}
function toonAutoInfo(object){
    console.log(object.merk)
    console.log(object.model)
    console.log(object.bouwjaar)
    console.log(object.kilometerstand)
}
updateKilometerstand(auto,2000)
toonAutoInfo(auto);