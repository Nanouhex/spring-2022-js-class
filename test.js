//hi

//today we do lots of things

var string1 = "This is not cool"; //cant change it
console.log(string1);
console.log(string1[0]+string1[2]);
console.log(string1.slice(5));
console.log(string1.indexOf("i"));

var classes = ["pge", "de", "physics", "rhe"];
var thatonesong = ["je", "ne", "sais", "pas", "comment", "te", "dire"];

for (var i = 0; i < thatonesong.length; i++){
    console.log(thatonesong[i]);
}

function Person(name, height, age){
    this.name=name;
    this.height=height;
    this.age=age;
}

var me = new Person(nate, "6'5", 18);
var txtoutput = "";
for (i in me){
    txtoutput += me[i];
}
console.log(txtoutput);
