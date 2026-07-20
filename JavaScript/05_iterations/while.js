//while loop

let i = 0
while (i <= 5) {
    console.log(`The value is ${i}`);
    i = i+1
}

let myHeroes = ["Jethalal", "Mehta Sahab", "Iyer"]
let arr = 0
while (arr < myHeroes.length) {
    console.log(`Hero is ${myHeroes[arr]}`);
    arr++
}

//do while loop
//runs the function at least one time without checking the condition

let score = 0
// let score = 11     will print 11
do {
    console.log(`score is ${score}`);
    score = score + 2
} while (score <= 10);