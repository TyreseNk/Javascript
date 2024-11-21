function changetext(){
    let button = document.querySelector("#subscribe-button");
    if(button.innerHTML=="Subscribe"){
        button.innerHTML = "Subscribed";
        button.style.backgroundColor = "lightgrey"
        button.style.borderColor = "lightgrey"
        button.style.color = "black"
    } else{
        button.innerHTML="Subscribe";
    }
}