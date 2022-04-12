function reverse(string){
    temp = "";
    for ( var i = string.length-1; i >= 0; i-- ){
        temp += string[i];
    }
    return temp;
}

console.log(reverse("IT WORKS??? MAYBE"));


function numVowels(string){
    temp = 0;
    string = string.toLowerCase();
    for (var i = 0; i <= string.length; i++ ){
        switch(string[i]){
            case "a" : 
                temp +=1;
                break;
            case "e" : 
                temp +=1;
                break;
            case "y" :  
                temp +=1;
                break;
            case "u" :   
                temp +=1;
                break;
            case "i" :   
                temp +=1;
                break;
            case "o" :     
                temp +=1;
                break;
            default: 
                temp+=0;
        }
    }
    return temp;
}

console.log("The word hello has "+numVowels("hello")+" vowels.")
console.log("The word goodbye has "+numVowels("goodbye")+" vowels.")
console.log("The word Ukraine has "+numVowels("Ukraine")+" vowels.")

function numStringsShorterThanLength (strings, length){
    temp = 0;
    for (i=0; i<= strings.length-1; i++){
        if(strings[i].length < length){
            temp+=1;
        }
    }
    return temp;
}

console.log("The array of apple, banana and pear has "+numStringsShorterThanLength(["apple", "banana", "pear"], 5) + " strings with a length less than 5.");
console.log("The array of hello, sup and greetings has "+numStringsShorterThanLength(["hello", "sup", "greetings"], 6) + " strings with a length less than 6.");
console.log("The array of France, Spain, Italy and UK has "+numStringsShorterThanLength(["France", "Italy","Spain", "UK"], 7) + " strings with a length less than 7.");

