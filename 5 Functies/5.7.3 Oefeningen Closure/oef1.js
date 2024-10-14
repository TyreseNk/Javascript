function maakTeller(n) {
    let count =n

    return function(){
        count++;
        console.log(count);
    };
}
let teller1 = maakTeller(100);
teller1();
teller1();
let teller2 = maakTeller(10);
teller2();
teller2();
