function Car(model,year,color,mpg){
    this.model=model;
    this.year=year;
    this.color=color;
    this.mpg=mpg;
}

var car1 = new Car("IDK",2020,"black",22);
var car2 = new Car("i dont know cars",2004,"white",14);
var car3 = new Car("...",2014,"blue",18);

console.log(car1.mpg, car2.mpg, car3.mpg); // i figured out how to console log more than one thing x))))) only took 5 weeks


function Vehicle(car){
    this.car=car;
}

var veh1 = new Vehicle(car1);
var veh2 = new Vehicle(car2);
var veh3 = new Vehicle(car3);

console.log(veh1.car.mpg, veh2.car.mpg, veh3.car.mpg);