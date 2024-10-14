function maakGroet(){
    let groet="hallo ,";
    let huidigenaam="";
    return {
        wijzigNaam : function(naam){
            huidigenaam = naam;
        },groet : function(){
            return groet + huidigenaam; 
        }
    }
}
let groet = maakGroet();
groet.wijzigNaam("tyrese");
console.log(groet.groet());