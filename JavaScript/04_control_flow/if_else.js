//if statement
const isLoggedIn = true
if(2==="2"){
    console.log("User has logged in");
}

const temp = 90
if(temp < 80){
    console.log("Temperature is less than 80");
}else{
    console.log("Temperature is more than 80");
}

// <, >, <=, >=, ==, ===, !=

//Nested if-else
const score = 1000
if (score < 500) {
    console.log("Score is less than 500");
} else if(score < 700) {
    console.log("Score is less than 700");
}else if(score < 900) {
    console.log("Score is less than 900");
}else {
    console.log("Score is less than 1200");
}


//not a good practice to write if statement in one line
const balance = 100
if(balance < 200) console.log("test"),console.log("test2");


//Logical operator
// && if all values are true than execute
// || if any value is true than execute

const userEmail = "abc@gmail.com"
const creditCard = true
const googleAccount = true
const yahooAccount = false

if(userEmail && creditCard && 2===2){
    console.log("User has email and credit card");
}

if(googleAccount || yahooAccount || false){
    console.log("User has a account");
    
}