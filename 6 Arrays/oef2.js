let array =[1,2,2,3,6,5,6,7];
function KeerOm(arr){
    let reversearr=[];
    for(let i=arr.length- 1; i>=0;i--){
        reversearr.push(arr[i]);
    }   
    return reversearr;
}
let reverse = KeerOm(array);
console.log (reverse);