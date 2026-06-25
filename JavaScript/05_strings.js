const name ="Saloni"
const repoCount = 10

console.log(name + repoCount + "Value")   //This syntax is not used now so avoid it

console.log(`My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Jethalal-Taarak')   //way of declaring a string
console.log(gameName);

//various functions in string
console.log(gameName[0]);
console.log(gameName.__prot__);
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('T'));
console.log(gameName.includes("Taarak"));


const newGame = gameName.replace('Taarak','Bhide')
console.log(newGame);

const newString = gameName.substring(1,5)     //cannot include negative index
console.log(newString)

const anotherString = gameName.slice(0,4)   //can include negative index values
console.log(anotherString);

const otherString = "      Hello     "
console.log(otherString);
console.log(otherString.trim());

console.log(gameName.split('-'));
