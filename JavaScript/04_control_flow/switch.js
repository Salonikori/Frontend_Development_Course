/* Switch Statement
switch (key) {
    case value:
        
        break;

    default:
        break;
} */


//if break statement is not there it will execute the remaining cases without checking the condition except default
const month = 2
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Default");
        break;
}
