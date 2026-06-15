console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);

console.log("2" > 1);

//Avoid these types of comparisons
console.log(null == 0);  //false
console.log(null > 0);  //false
console.log(null >= 0);  //true

console.log(undefined == 0);  //false
console.log(undefined > 0);  //false
console.log(undefined >= 0);  //false

// === is strict check it chceks the value along with its datatype
console.log("2" === 2);  //false
