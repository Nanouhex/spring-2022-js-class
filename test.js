//hi

//today we do objects

var burger = {
    price: 2.99,
    name: "i wish",
    ingredients: {
        buns: "sesame",
        cheeseSlices: 2,
        pickles: false,
        tomato: true,
        patties: 2,
    }
}

console.log(burger.ingredients.buns);

function MyClass(name,location,starttime,endtime){
    this.name = name;
    this.location = location;
    this.starttime = starttime;
    this.endtime = endtime;
}

var pge301 = new MyClass("pge301","cpe 2.204",10,11);
console.log(pge301.name);


function Student(firstname, lastname, university, major, gradyear) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.university = university;
    this.major = major;
    this.gradyear = gradyear;
    this.hasgraduated = gradyear <= 2021;
}

var me = new Student("Naoufal", "Ennadi", "UT Austin", "PGE", 2025);

console.log(me.hasgraduated);

function Course(student,name, location){
    this.student = student;
    this.name = name;
    this.location = location;
}

var jslearn = new Course(me, "Intro JS", "GDC 6.302");

console.log(jslearn.name, jslearn.location, jslearn.student.gradyear);
