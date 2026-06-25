const score = 100
console.log(score);

const balance = new Number(500)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);    //after converting a number to a string we can also use string functions
console.log(balance.toFixed(2));       //after decimal point only 2 digits should be shown

const anotherNumber = 129.76
console.log(anotherNumber.toPrecision(3));     //130
console.log(anotherNumber.toPrecision(4));     //129.8

const hundreds = 100000000
console.log(hundreds.toLocaleString("en-IN"));     //adds comma based on region which is currenty set to INDIA but default it is USA


//++++++++++++++++ MATHS +++++++++++++++++
console.log(Math);
console.log(Math.abs(-9));       //9
console.log(Math.round(5.8));    //6
console.log(Math.floor(4.6));    //4
console.log(Math.ceil(4.6));     //5
console.log(Math.min(3,5,81,8,9));
console.log(Math.max(3,5,81,8,9));

console.log(Math.random());     //gives random values between 1 and 0
console.log((Math.random()*10) + 1);     //gives random values between 1 and 10
console.log(Math.floor((Math.random()*10) + 1));     //gives random values between 1 and 10 in whole numbers 

const min = 20
const max = 30
console.log(Math.floor((Math.random() * (max - min + 1)) + min));
