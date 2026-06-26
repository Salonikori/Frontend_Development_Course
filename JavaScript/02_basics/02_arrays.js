const Marvel_heroes = ["Ironman", "Hulk", "Spiderman"]
const dc_heroes = ["Shaktiman", "Batman", "Superman"]

Marvel_heroes.push(dc_heroes)     //add the new array as a element in the previous array i.e add all the elements of dc_heroes as a element in Marvel_heroes
console.log(Marvel_heroes[3][2]);

const All_heroes = Marvel_heroes.concat(dc_heroes)     // add each element of the array as individual elements in the new array
console.log(All_heroes);

// console.log(...Marvel_heroes,...dc_heroes);      //mostly used it spreads both the arrays

const newArr = [ 1, 2, 3, [5, 7, 9, [9, 3, 8]],6]
const realNewArr = newArr.flat(2)      //returns a new array with all the subarray concadinated with depth
console.log(realNewArr);


console.log(Array.isArray("Jethalal"));     //checks if the given element is a array or not
console.log(Array.from("Jethalal"));        //converts the given element to a array
console.log(Array.from({name: "Jethalal"}));   //interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
