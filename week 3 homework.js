function countUpwardsByThree(){
    for (i=0; i<=30; i+=3){
        console.log(i);
    }
}
countUpwardsByThree();

function guessMyFavoriteNumber(guess){
    if (guess == 252){
        console.log("You guessed my favorite number!");
    } else {
        console.log("Try again!");
    }
}

guessMyFavoriteNumber(20);
guessMyFavoriteNumber(90);
guessMyFavoriteNumber(252);

function convertNumberToDay(number){
    switch (number){
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("That's not a day *bonk*");
            break;
    }
}
convertNumberToDay(0);
convertNumberToDay(1);
convertNumberToDay(2);
convertNumberToDay(3);
convertNumberToDay(4);
convertNumberToDay(5);
convertNumberToDay(6);
convertNumberToDay(7);
