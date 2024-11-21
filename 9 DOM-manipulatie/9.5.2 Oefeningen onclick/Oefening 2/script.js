let count=0;
function countUp(){
    let div = document.querySelector("#counter")
    count++;
    console.log(count);
    div.innerHTML = count;

}