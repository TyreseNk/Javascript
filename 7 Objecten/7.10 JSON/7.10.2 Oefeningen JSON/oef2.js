// Maakt een localStorage aan indien dit nog niet gebeurd is.
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage; 
    localStorage = new LocalStorage('./scratch');
}
let gebruikersVoorkeuren = {
    kleurenschema: "donker",
    lettergroote:"16px",
    meldingen : true
};
const gebruikersVoorkeurenString = JSON.stringify(gebruikersVoorkeuren);
localStorage.setItem("gebruikersVoorkeuren",gebruikersVoorkeurenString);

const opgeslagenGebruikersVoorkeuren = localStorage.getItem("gebruikersVoorkeuren");
if(opgeslagenGebruikersVoorkeuren){
    //zet JSON string om naar object
    gebruikersVoorkeuren = JSON.parse(opgeslagenGebruikersVoorkeuren);
}
console.log(gebruikersVoorkeuren)
gebruikersVoorkeuren.kleurenschema="groen";
console.log(gebruikersVoorkeuren)
