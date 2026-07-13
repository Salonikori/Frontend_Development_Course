//Immediately Invoked Function Expression

//used to : 1. avoid global scope pollution or conflict  
// 2. to immediately invoke or run the function

function one(){
    console.log("DB connected one");
}
one();

//Using IIFE
(function two(){
    //named iife
    console.log("DB connected two");
})();

//semicolon is used to terminate that invoked function otherwise the next function will not run

( (name)=> {
    console.log(`${name}, your DB is connected`);
})("Jethalal")