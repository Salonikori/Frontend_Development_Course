// this keyword is used to refer the current context

const user = {
    username : "Nobita",
    money : 999,

    welcomeMessage : function(){
        console.log(`Hi ${this.username}, how are you ?`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Gian"
user.welcomeMessage()

console.log(this);



const add = function(num1, num2){
    let username = "xyz"
    console.log(this.username);         //undefined
    console.log(this);                  //gives a long output
    
}
console.log(add(4,9))

//arrow functions
const addTwoNumbers = (num1, num2) => {
    let username = "xyz"
    console.log(this.username);         //undefined
    console.log(this);                  //{}
}

console.log(addTwoNumbers(7,9));

const addition = (num1, num2) => (num1 + num2)
console.log(addition(27,9));
