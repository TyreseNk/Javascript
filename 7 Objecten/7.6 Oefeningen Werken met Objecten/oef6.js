let boeken={
    titel:"kaka",
    auteur:"Harry",
    jaar:"1992",
    genre:"Roman"
};
let {titel,auteur, ...details} = boeken;
toonBoekInfo(titel,auteur,details);


function toonBoekInfo(titel,auteur,details){
    console.log(`${titel} is geschreven door ${auteur}.`);
    console.log(details)
};
