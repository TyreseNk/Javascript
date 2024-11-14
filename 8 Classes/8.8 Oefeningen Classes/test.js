class Car {
    //constructor
    constructor(name,year){
        this._name = name;
        this._year = year;       
    }
    //setter
    set name(name){
        this._name=name
    }
    //getter
    get name (){
        return this._name;
    }
}
const carOne = new Car("twingo",2005);
carOne.name = "Twingo met Spoiler";
console.log(carOne.name);