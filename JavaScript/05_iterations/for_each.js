//for each

const coding = ["js", "Java", "C", "Python"]

coding.forEach( function(key) {
    console.log(key);
} )

// same using arrow function
// if using curly bracket than have to write return keyword otherwise not
coding.forEach( (val) => {
    console.log(val);
} )

function printme(val){
    console.log(val);
}

// coding.forEach(printme)

coding.forEach( (val, index, arr) => {
    console.log(val, index , arr);
} )

const newArr = [
    {
        courseName : "JavaScript",
        price : 2999
    },
    {
        courseName : "Python",
        price : 999
    },
    {
        courseName : "C",
        price : 299
    }
]

newArr.forEach( (arr) => {
    console.log(arr.courseName);
    
} )