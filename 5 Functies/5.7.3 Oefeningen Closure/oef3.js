function maakRekening(){
    let saldo = 0;
    return{
        stort:function(storting){
            return saldo += storting;                
        },
        opnemen: function(opname){
            return saldo-=opname;
        },
        bekijkSaldo:function(){
            return saldo
        }
    }
}
let Rekening = maakRekening();
console.log(Rekening.stort(5000));

