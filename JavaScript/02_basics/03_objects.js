// Singleton
// A singleton is a design pattern that ensures only one instance of an object exists throughout the application.

// Object.create()
// Object.create() is a static method that creates a new object and sets the specified object as its prototype.

// Object Literal
// An object literal is the simplest way to create an object in JavaScript using curly braces {}.

const mySym = Symbol("key1")
const myObj ={
    name : "Shinchan",
    "full name" : "Shinchan Nohara",     //can't access this using myObj.full name    so use the second method of accessing
    age : 5,
    email : "shinchan@gmail.com",
    isLoggedIn : false,
    previousLoggedIn : ["Tuesday", "Thursday"],
    [mySym] : "newKey"           //way of using symbol in objects *******asked in interviews

}   //Object literal , stores key:value pairs

console.log(myObj);
console.log(myObj.name);         //usually use the "." method to access the lements in the object but for some it doesn't work like "full name" which has spaces and symbol
console.log(myObj["name"]); 
console.log(myObj["full name"]);
console.log(myObj[mySym]);


myObj.greeting = function(){
    console.log("Hello world")
}
console.log(myObj.greeting());

myObj.greeting2 = function(){
    console.log(`Hello my name is ${this.name}`)      //this is used to refer methods of current object
}
console.log(myObj.greeting2());

myObj.email = "shinchan@kbc.com";
Object.freeze(myObj);   //freezes the data cannot make a change in it
myObj.email = "shinchan@nothing.com";
console.log(myObj);