//array
//array copy operations create shallow copies i.e has the same reference
//deep copies do not share the same reference

const myArr = [0,1,2,3,4,5]
const tvChars = ["Jethalal", "Taarak Mehta", "Bhide"]

const myArr2 = new Array(54,87,23,75)

console.log(myArr);
console.log(myArr[3]);

console.log(tvChars);
console.log(myArr2);

//Operations 
myArr.push(6)     //adds element at the end
myArr.push(7)
myArr.pop()       //removes the element from the end
console.log(myArr);

myArr.unshift(8)      //add the lement at start
myArr.shift()         //remove the element from the start
console.log(myArr);


//slice and splice
console.log("A", myArr);
console.log(myArr.slice(1,3));      //prints only the elements starting from the index 1 till 2 (3-1)  but does not change the original array
console.log("B", myArr);

console.log(myArr.splice(1,3));     //prints the elements starting from the index 1 till the ending index 3 and also change the original array i.e it removes this elements from the original array

console.log("C", myArr);

