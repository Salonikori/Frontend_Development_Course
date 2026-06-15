//Primitive
//7 types : String, Number, Boolean, BigInt, null, undefined, symbol

const value = 500  //number
const isLoggedIn = true;  //boolean
let name = "Saloni";  //string
const BigNumber = 76879n  //bigint
const temp = null  //object
let data;     //undefined
const id = Symbol("ABC")  //symbol
const anotherId = Symbol("ABC")
console.log(id == anotherId)  //false


//Reference (Non Primitive)
//Array, Object, Function

const heroes = ["Ironman","Batman","Dr. Strange"]  //array
const myobj={                   //object
    name : "Saloni",
    age : 18
}
const myFunction = function(){     //function
    console.log("Hello World")
}

console.log(typeof myFunction)