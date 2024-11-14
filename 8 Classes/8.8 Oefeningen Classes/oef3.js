class Person {
    #nrn;
    constructor(name,nrn){
        this._name = name;
        this.#nrn = nrn;
    }
    showNrn(){
        console.log(this.#nrn);
    }
}
let person = new Person("tyrese","125454");
person.showNrn();
console.log(person.nrn)