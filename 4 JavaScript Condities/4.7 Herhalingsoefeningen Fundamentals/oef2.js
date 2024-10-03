const bovengrens= 10; 
const ondergrens= 1; 
let som=0;
for(let i = ondergrens; i <= bovengrens;i++){
    if( i % 3 == 0){
        som+=i;
    }
}
console.log(som)