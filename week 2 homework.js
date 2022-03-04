function sumOfSquareAreas (a, b){
    return a**2 + b**2;
}

console.log(sumOfSquareAreas(9,3));
console.log(sumOfSquareAreas(4,5));
console.log(sumOfSquareAreas(1,7));


function gradeCalculator(homeworkAvg, quizAvg, examAvg){
    return homeworkAvg*.10 + quizAvg*.15+examAvg*.75;
}

console.log("The final grade is "+gradeCalculator(70,90,90)+"%");
console.log("The final grade is "+gradeCalculator(100,100,60)+"%");
console.log("The final grade is "+gradeCalculator(90,70,70)+"%");
