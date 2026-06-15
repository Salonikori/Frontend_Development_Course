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



//Memory storage
//Stack (Primitive) and Heap (Non Primitive)
//In stack we get a copy of the original so if we change anything it will not get changed in the original
//In heap we get a refernce of the original so if we change anything it will  get changed in the original


//stack example
let value1 = "Jethalal"
let value2 = value1
value2 = "Taarak"
console.log(value1);   //Jethalal
console.log(value2);   //Taarak

//heap example
let obj1={
    email: "abc@abc.com",
    uid: "687298"
}

let obj2 = obj1
obj2.email = "xyz@xyz.com"

console.log(obj1.email);
console.log(obj2.email);
