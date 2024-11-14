//console. log(document.body);
//document.title = "changed title";
//document.body.innerHTML = "<button>Good job!</button";
/*
let eersteParagraaf = document.querySelector("p");
console.log( eersteParagraaf);
eersteParagraaf.innerHTML= "dit is de nieuwe eerste paragraaf";
let tweedeParagraaf = document.querySelector("#tweede-paragraaf");
tweedeParagraaf.innerHTML="dit is de nieuwe tweede paragraaf"
*/
/*
let alleParagrafen = document.querySelectorAll("p");
alleParagrafen.forEach(function(p) {
p.style.background= "lightgray";
});


const nieuweParagraaf = document.createElement("p");
nieuweParagraaf.innerHTML="Deze paragraaf is gemaakt in JS";

//document.body.appendChild(nieuweParagraaf)

let section = document.querySelector("section");
section.appendChild(nieuweParagraaf);


let vervang = document.querySelector("#js-vervang");
let nieuweParagraaf = document.createElement("p");
nieuweParagraaf.innerHTML = "vervangen!";

vervang.replaceWith(nieuweParagraaf);

let aanpassen = document.querySelector("#js-style");
aanpassen.style.margin = "10px";
aanpassen.style.color ="blue"
aanpassen.style.fontSize = "30pt";
*/
let link= document.querySelector("a");
link.setAttribute("href", "https:/en.wikipedia.org/wiki/Naked_Pumpkin_Run")
link.setAttribute("target","_blank");

if(link.getAttribute("target")=="_blank"){
    console.log("tesT");
}