function maakRekening(){
    let saldo = 0;
    return{
        stort:function(storting){
            saldo+= storting;                
        },
        opnemen: function(){

        },
        bekijkSaldo:function(){

        }
    }
}