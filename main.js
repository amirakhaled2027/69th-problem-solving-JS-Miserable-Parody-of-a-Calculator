//Create a function that will handle simple math expressions. The input is an expression in the form of a string.


//APPROACH
// add +
// subtract -
//multiplication *
// division /


//create a variable that transform the str into a string
// create a variable that calculate the number into the string [nums]
// eval() ... it's a function used to evaluate mathematical expressions written as strings





function calculator(str) {
    let nums = str.toString()
    let mathExp = eval(nums); 

    return mathExp;
}

console.log(calculator("23+4"));
console.log(calculator("45-15"));
console.log(calculator("13+2-5*2"));
console.log(calculator("49/7*2-3"));