let persoon={
    naam:"tyrese",
    leeftijd:16,
    adres:{
        straat:"borreshoeftsraat",
        stad:"Dilsen-Stokkem",
        postcode:"3650"
    },
    introduceer : function(){
        console.log(`Hallo, ik ben ${this.naam} uit ${this.adres.stad}`)
    }
};
persoon.introduceer();