// let and const are block scoped 
// var is global scoped

var c = 300

if(true){
    let a =10
    const b = 20
    var c = 30
}

// console.log(a);   //show error
// console.log(b);   //show error
// console.log(c);     //30

function one(){
    const username = "Jethalal"
    function two(){
        const friend = "Taarak Mehta"
        console.log(username);
    }
    // console.log(friend);   // friend is only accesiblein function two
    two()
}

one()


//ways of defining function
console.log(addone(4))  //can be accessed before the function 
function addone(num){
    return num + 1
}

// console.log(addtwo(1));   //cannot be accesed before the function
const addtwo = function(num){
    return num + 2
}
console.log(addtwo(1));
