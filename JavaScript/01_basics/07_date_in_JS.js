//Date is an object it is calculated from 1 Jan 1970
let myDate = new Date()
console.log(myDate);

let myCreatedDate = new Date()
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toJSON());
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toISOString());

// let myNewDate = new Date(2023,0,24)       //YY-MM-DD
// let myNewDate = new Date(2023,0,24,5,30)     //YY-MM-DD-HH-MM
let myNewDate = new Date("2023-01-30")       //to get the date in the desired format
console.log(myNewDate.toLocaleString())


//To calculate the Timestamp in quizzes or competitions
let timeStamp = Date.now()
console.log(timeStamp);         //It's in milliseconds
console.log(Math.floor(timeStamp/1000));         //It's in seconds


let anotherDate = new Date()
console.log(anotherDate.getDay());
console.log(anotherDate.getHours());
console.log(anotherDate.getMinutes());

anotherDate.toLocaleString('default',
    {
        weekday:"long"
    }
)

let webDate = new Date();
console.log(`Todays day is ${webDate.toDateString()} and time is ${webDate.getHours()}:${webDate.getMinutes()}:${webDate.getSeconds()}`);

