let obj1 = {key:"value"};
let obj2 = obj1;
obj1.key="newvalue";

console.log(obj1.key);
console.log(obj2.key);