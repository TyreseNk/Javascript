let persoon={
    naam:"tyrese",
    leeftijd:16,
    adres:{
        straat:"borreshoeftsraat",
        stad:"Dilsen-Stokkem",
        postcode:"3650"
    }
};
function toonPersoonDetails(object){
    console.log(object.naam);
    console.log(object.leeftijd);
    console.log(object.adres);
}
toonPersoonDetails(persoon);