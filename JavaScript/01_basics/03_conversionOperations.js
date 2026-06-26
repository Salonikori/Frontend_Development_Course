//Convert to Number
let id = false
console.log(typeof id)
let numberId = Number(id)
console.log(typeof numberId)
console.log(numberId)

// "55" => 55
// "55abc" => NaN
// true => 1;  false => 0 

//Conversion to Boolean
let data = "Hello"
console.log(typeof data)
let booleanData = Boolean(data)
console.log(typeof booleanData)
console.log(booleanData)

// 1 => true; 0 => false
// "" => false
// "Hello" => true



//Conversion to String
let order = true
console.log(typeof order)
let stringOrder = String(order)
console.log(typeof stringOrder)
console.log(stringOrder)

// 5 => 5
// true => true

//**************** Conversion ******************//

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);

let str1 = "Hello"
let str2 = " Saloni"
let str3 = str1 + str2
console.log(str3);


console.log(2 + "2");  //22
console.log("2" + 2);  //22
console.log("1" + 2 + 2);  //122
console.log(2 + 2 + "1");  //41

console.log((3 + 2) * 5 / 6);

console.log(true);  //true
console.log(+true);  //1
// console.log(true+);  //Error
console.log(+"");  //0

let gameCounter = 100
gameCounter++
console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

