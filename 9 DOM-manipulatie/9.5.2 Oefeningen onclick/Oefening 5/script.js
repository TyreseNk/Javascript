const div = document.querySelector("#result");

function convertcm(){
    const input = document.querySelector("input");
    const waarde = input.value;
    div.innerHTML = waarde / 2.54;
    input.value="";
}
function convertinch(){
    const input = document.querySelector("input");
    const waarde = input.value;
    div.innerHTML= waarde * 2.54;
    input.value="";
}
