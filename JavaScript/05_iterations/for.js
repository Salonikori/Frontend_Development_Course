//for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        console.log("5 is best no");
        
    }
    console.log(element);
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop ${j} for outer loop ${i}`);
        console.log(`${i} * ${j} = ${ i * j}`);
    }
}

let myArr = ["Jethalal", "Taarak", "Bhide"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}

//break : comes out of the loop
//contiinue : skips one iteration

for (let i = 0; i < 20; i++) {
    if(i == 5){
        console.log(`5 is detected`);
        break
    }
    console.log(`Loop of iteration ${i}`);
    
}

for (let i = 0; i < 20; i++) {
    if(i == 5){
        console.log(`5 is detected`);
        continue
    }
    console.log(`Loop of iteration ${i}`);
    
}