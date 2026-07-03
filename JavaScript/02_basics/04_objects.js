// const myObj = new Object()

const instaUser = {}
instaUser.name = "abc"
instaUser.id = 67
instaUser.email = "abc@gmail.com"
console.log(instaUser);
console.log(Object.keys(instaUser));      //give keys in the form of array
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));
console.log(instaUser.hasOwnProperty("name"));


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}
//ways to join objects
// const obj4 = {obj1 , obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1 , ...obj2, ...obj3}    //spread operator
console.log(obj4);

const nestObj ={
    email : "noreply@gmail.com",
    fullname : {
        userName :{
            firstName : "shinchan",
            lastname : "nohara"
        }
    }
}
console.log(nestObj.fullname.userName.lastname);

//objects in array
const user = [
    {
        id :1,
        email : "a@gmail.com"
    },
    {
        id :2,
        email : "b@gmail.com"
    },
    {
        id :3,
        email : "c@gmail.com"
    }
]
console.log(user);
console.log(user[1].email);
