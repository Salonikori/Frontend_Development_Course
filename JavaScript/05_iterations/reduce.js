const nums = [1 ,2 , 3]

// const newNums = nums.reduce( (accumalator, currentValue) => {
//     console.log(`accumulator : ${accumalator} & currentvalue : ${currentValue}`);
//     return accumalator + currentValue
// },0 )

const newNums = nums.reduce( (acc, curr) => acc+curr,0 )

// console.log(newNums);

const ShoppingCart = [
    {
        name : "Js",
        price : 999
    },
    {
        name : "Java",
        price : 1999
    },
    {
        name : "Python",
        price : 2999
    },
    {
        name : "C",
        price : 599
    }

]

const bill = ShoppingCart.reduce( (acc, item) => acc + item.price,0 )
console.log(bill);
