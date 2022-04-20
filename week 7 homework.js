function Car(id){
    this.model = "Honda Element";
    this.color = "Grey";
    this.year = 2004;
    this.mpg = 22;
    this.id = id;
}

let cars = [];
for (i = 0; i <10; i++){
    cars[i] = [];
    for (j = 1; j <= 10; j++){
        cars[i].push(new Car(j+i*10));
    }
}

function getCarsBetweenIds(idMin, idMax){
    temp = [];
    for (i = 0; i <10; i++){
        for (j = 0; j <= 9; j++){
            if (cars[i][j].id >= idMin && cars[i][j].id <= idMax){
                cars[i][j].color = "Blue";
                temp.push(cars[i][j]);
            }
        }
    }
    return temp;
}

console.log(getCarsBetweenIds(20,30));
console.log(getCarsBetweenIds(5,7));
console.log(getCarsBetweenIds(9,25));