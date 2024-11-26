const cart = document.querySelector("#cart")
function voegToe(item){
    const itemdiv = document.createElement("div");
    itemdiv.innerHTML=`- ${item}`;
    cart.appendChild(itemdiv);
    
}
function clearCart(){
   cart.innerHTML = "";
}