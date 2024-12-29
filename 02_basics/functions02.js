
function add2numbers(number1, number2){
    let result = number1 + number2
    return result;
}
const result = add2numbers(3,5);
console.log("result:", result );

function login(user){
    if(user === undefined){
        console.log("please enter a username");
        return "No username provided"; // Explicit return for better clarity
    }
    return `${user} just logged in`;
}
console.log(login("Akshay"));  // Output: "Akshay just logged in"
console.log(login());  // Output: "please enter a username" and "No username provided"

function login2(user = "sam"){
    if(!user){
        console.log("please enter a username");
        return "No username provided"; // Explicit return to avoid undefined
    }
    console.log(`${user} logged in`); // Log if valid username
    return `${user} logged in`; // Explicit return
}

console.log(login2("Akshay")); // Output: "Akshay logged in"
console.log(login2()); // Output: "sam logged in"
