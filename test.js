//hi

currentsecond=1;

function printTime(){
    console.log(currentsecond);
    currentsecond++;
}
//print out 1 to 15 every second
var intervalid = setInterval(printTime, 1000);
setTimeout(clearInterval, 16000, intervalid);
