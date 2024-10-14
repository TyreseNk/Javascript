function maakTeller() {
    let count =0

    return{
        verhoog: function(n){
            count+=n;
            return count;
        },
        resset: function(){
            count=0;
            return count;
        }
    }
}
let teller = maakTeller();
console.log(teller.verhoog(7))
console.log(teller.verhoog(5))
console.log(teller.resset())
