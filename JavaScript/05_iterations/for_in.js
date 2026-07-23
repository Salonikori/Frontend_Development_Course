//for in

const myObj ={
    js : "Javascript",
    cpp : "C++",
    p : "Python"
}
console.log(myObj);

for (const key in myObj) {
    console.log(key);    //it only prints the keys not value
    console.log(myObj[key]);    //prints the value
    console.log(`${key} is the shortcut of ${myObj[key]}`);
}

const myArr = ["A", "B", "V"]
for (const key in myArr) {
    console.log(key);       //it prints the index
    console.log(myArr[key]);
}

const myMap = new Map()         //Map is not iteratable
myMap.set('IN', "India")
myMap.set('JP', "Japan")
myMap.set('CN', "China")
myMap.set('USA', "United State")

for (const key in myMap) {
    console.log(key);                //no output
}