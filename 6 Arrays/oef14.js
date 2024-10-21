const fruit= ["appel","banana","kiwi"];
function vindNaamMetLengte(namen,n){
    let newarr = namen.find(function(a){
        return a.length==n;
    })
    return newarr
}
let nieuwearray = vindNaamMetLengte(fruit,4);
console.log(nieuwearray)
