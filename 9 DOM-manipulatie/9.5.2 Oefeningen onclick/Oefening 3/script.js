function voegToe(){
    let input = document.querySelector("#info")
    let inhoud = input.value;
    let div = document.createElement("div");
    div.innerHTML = inhoud;
    document.body.append(div)
    
}