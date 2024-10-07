function berekenKorting(prijs,kortingsgroep,aantal){
    let totaalprijs = prijs*aantal;
    let kortingpercentage;
    if(kortingsgroep ==="a"||kortingsgroep==="b"){
        if(kortingsgroep==="a"){
            kortingpercentage="10%";
            totaalprijs-= totaalprijs* 0.10;
        }else if(kortingsgroep==="b"){
            kortingpercentage="20%";
            totaalprijs-= totaalprijs* 0.20;
        }
        console.log(`De totaalprijs na ${kortingpercentage} korting is ${totaalprijs} euro.`);
    }else{
        console.log("Geef een juiste kortingsgroep.");
    }
    
}
berekenKorting(10,"b",20);