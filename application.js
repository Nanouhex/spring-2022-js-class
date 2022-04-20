function Dog(name, age){
    this.name = name;
    this.age = age;
}

dogs = [];


for (i = 0; i < 3; i++){
    dogs.push(new Dog("Juanita", i+2));
    console.log(dogs[i]);
}