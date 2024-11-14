class Car {

    constructor(brand,mileage){
        this._brand = brand;
        this._mileage = mileage;       
    }
    
    get mileage (){
        return this._mileage;
    }

    set mileage(mileage){
        if(this._mileage<mileage){
            this._mileage = mileage
        }else{
            console.log("mileage kan niet verlaagd worden")
        }
    }
    showinfo(){
        console.log(this._brand+" "+this._mileage);
    }
}
const carOne = new Car("bmw",12);
carOne.showinfo();
carOne.mileage+=50;
carOne.showinfo();
carOne.mileage-=50;
