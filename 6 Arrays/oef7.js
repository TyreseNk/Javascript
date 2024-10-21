let array =[1,2,2,3,6,5,6,7];
let getal=4;
function splitsArray(array,getal){
    let eerstevanarr= [];
    let restarr=[];
    eerstevanarr = array.slice(0,getal);
    restarr = array.slice(getal,array.length);
    return{
        eerstedeel:function(){
            return eerstevanarr;
        },
        rest:function(){
            return restarr;
        }
        
        
    }
}
let nieuwarray = splitsArray(array,getal);
console.log (nieuwarray.eerstedeel());
console.log (nieuwarray.rest());