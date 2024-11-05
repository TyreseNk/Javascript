let student ={
    naam:"Tyrese",
    leeftijd:16,
    studie:"talen",
    beschrijf: function(){
        console.log(`${this.naam} van ${this.studie}`);
    }
}
function verwelkomStudent(naam,studie){
    console.log(`Welkom, ${naam} van ${studie}`)
}
let{ naam,studie}=student;
verwelkomStudent(naam,studie);