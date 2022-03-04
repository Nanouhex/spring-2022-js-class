console.log("hello nate");
var Greeting = "Bonjour Nanouf, tu es si seul";
console.log(Greeting);


var speed = 4;
var time = 2;
console.log(speed * time);

function showDistance(speed, time){
    console.log(speed * time);
}

showDistance(5,5);


function getArea(width, length){
    var area = width * length;

    return area;
}

console.log(getArea(2,5));

function areaExponent(area, power){
    return area ** power;
}

console.log(areaExponent(getArea(2,5),3));

function convertFeetToInches(length){
    return length*12;
}
