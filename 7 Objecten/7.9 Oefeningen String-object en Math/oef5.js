function genereerWillekeurigGetal(min,max){
    let random = Math.floor(Math.random()* (max-min+1)+min);
    return random
}
let zin = genereerWillekeurigGetal(60,100)
console.log(zin)
