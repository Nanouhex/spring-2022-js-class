//hi

//today we do lots of things: advanced objects oriented programming

var broccoli = {
    name: "broccoli",
    price: 2.00,
    inventory: 30,
}

console.log(broccoli.inventory);

broccoli.inventory = 25;
console.log(broccoli.inventory);

broccoli.brand = "green giant";
console.log(broccoli.brand);


var broccoli2 = {
	color: "green",
}
var packofbroccoli = {
	weight: 2,
}
console.log(packofbroccoli.color);
packofbroccoli.__proto__ = broccoli2;
console.log(packofbroccoli.color);

console.log(3==="3"); //USE THIS???!!?!?!!?!

