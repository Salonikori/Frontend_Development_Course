function printMyName(){    //reusable block of code that performs a specific task, takes inputs, and returns an output
    console.log("J");
    console.log("E");
    console.log("T");
    console.log("H");
    console.log("A");
}

printMyName()

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);          //it just prints the value does not return it
// }
// addTwoNumbers(5,8)

function multilpyTwoNumbers(number1, number2){        //number1, number2 is parameter
    // const result = number1 * number2
    // return result
    return number1 * number2
    console.log("abc");                              //will not print anything after return
}
const result = multilpyTwoNumbers(6,8)          //6,8 are arguments
console.log(result);

function intro(username = "sam"){
    if(!username){             //username === undefined
        console.log("Please enter a username");
        return
    }
    return `Hello ${username}`
}
console.log(intro("taarak"));
