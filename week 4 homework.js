function powersOfThree() {
    for (i=0; i<10; i++){
        console.log(3**i);
        if(i==5){
            console.log("this is my favorite");
        }
    }
}

setTimeout(powersOfThree,3000);

var oklol = setInterval(console.log, 10000,"Hello World!");
setTimeout(clearInterval, 130000, oklol);