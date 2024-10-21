let array =[1,2,3];
function telDeElementen(...getallen){
    let som =0;
    getallen.forEach( getallen=>{
         som += getallen;
    });
    
    return som ;
}
let aantalelementen = telDeElementen(...array);
console.log (aantalelementen);