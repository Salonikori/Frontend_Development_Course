// *****
// for (let i = 0; i < 5; i++) {
//     process.stdout.write("*");
// }

// // 12345
// for (let i = 1; i <= 5; i++) {
//     process.stdout.write(`${i}`);
// }

// // ABCDE
// for (let i = 1; i <= 5; i++) {
//     process.stdout.write(String.fromCharCode(64 + i));
// }

// // *****
// // *****
// // *****
// // *****
// // *****
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         process.stdout.write("*")
//     }
//     console.log()
// }

// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5

let number = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        number = number + j;
    }
    console.log(number);
    
}