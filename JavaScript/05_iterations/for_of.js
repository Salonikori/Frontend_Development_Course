//for of
//can be used for array and map but objects are not iteratable

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const element of arr) {
    console.log(element);
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Character is ${greet}`);
    
}

// const myObj = {
//     course : "Javascript",
//     price : 999
// }
// for (const obj of myObj) {      //object is not iterable 
//     console.log(obj);
// }

const myMap = new Map()
myMap.set('IN', "India")
myMap.set('JP', "Japan")
myMap.set('CN', "China")
myMap.set('USA', "United State")

for (const [key,value] of myMap) {
    console.log(key,value);
}