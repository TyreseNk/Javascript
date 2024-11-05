let persoon ={
    voornaam:"frank",
    achternaam:"De Tank",
    leeftijd: 30,
    beroep:"programmeur",
    adres:{
        straat: "kerkstraat",
        huisnummer: 12,
        postcod:"3650",
        stad: "dilsen-Stokkem"
    },
    verjaar: function(){
        this.leeftijd++
    },
    stelvoor: function(){
        return `Hallo, ik ben ${this.voornaam} de ${this.beroep}`
    }
};

let {voornaam, ...overig} = persoon;
console.log(voornaam);
console.log(overig);

/*
let kopiePersoon = {...persoon,geslacht:"man"};
persoon.leeftijd =50;
console.log(kopiePersoon.geslacht);
console.log(kopiePersoon.leeftijd);


let {voornaam, leeftijd}=persoon;
console.log(voornaam);
console.log(leeftijd);
persoon.beroep ="vuilnisman";
console.log (persoon.stelvoor());
persoon.verjaar();
console.log(persoon.adres.stad);
console.log(persoon.leeftijd);
*/