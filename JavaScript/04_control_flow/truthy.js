//truthy and falsy values
const userEmail = false
if(userEmail){
    console.log("User has email ");
}else{
    console.log("User don't have email");
}

//falsy values
// false, 0, -0, null, undefined, "", BigInt 0n, NaN

//truthy values
// "0", 'false, " ", [], {}, function(){}

//arrays
const name = []
if(name.length===0){
    console.log("Array is empty");
}

//objects
const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}


// Nullish Coelascing Operator (??): null undefined
const num = 10 ?? 15   //10
const num = null ?? 20    //20
const num = undefined ?? 30   //30
const num = 10 ?? 15 ?? 20     //10
console.log(num);


//Ternary operator
// condition ? true : false

const value = 150
value < 100 ? console.log("Val is less than 100") : console.log("Val is more than 100");


