// ++++++++++++++ JavaScript Functions in Hinglish ++++++++++++++

// 1. Function Declaration (Function Statement)
// Function ko declare karte waqt hum function keyword ka use karte hain.
// Function declaration mein function name specify karna padta hai.

function greet() {
    console.log("Hello, welcome to JavaScript!");  // Simple function that prints a message
}

greet();  // Function ko call karte hain. Output: "Hello, welcome to JavaScript!"

// 2. Function with Parameters (Arguments)
// Functions ko arguments pass karke values de sakte hain.
function greetUser(name) {
    console.log(`Hello, ${name}!`);  // Parameter 'name' ko use karke greeting print kiya gaya
}

greetUser("John");  // Function ko call karte waqt argument "John" diya gaya. Output: "Hello, John!"

// 3. Function with Return Value
// Functions ko values return karne ke liye return statement ka use karte hain.

function addNumbers(a, b) {
    return a + b;  // 'a' aur 'b' ko add kar ke return karte hain
}

const sum = addNumbers(5, 3);  // Function call mein arguments pass kiye gaye, aur return value ko 'sum' mein store kiya gaya
console.log(sum);  // Output: 8

// 4. Function Expression
// Functions ko variables ke andar bhi store kiya ja sakta hai. Isse function expression kehte hain.

const multiply = function(a, b) {
    return a * b;  // Multiplication of a and b
};

console.log(multiply(4, 6));  // Output: 24

// 5. Arrow Functions (ES6)
// Arrow functions ek concise aur modern tarika hai functions likhne ka.

const subtract = (a, b) => {
    return a - b;  // a aur b ka difference return karte hain
};

console.log(subtract(10, 4));  // Output: 6

// Agar function sirf ek statement return kar raha ho, toh return keyword bhi optional ho sakta hai.
const divide = (a, b) => a / b;  // Shorter syntax, return keyword ki zarurat nahi

console.log(divide(12, 4));  // Output: 3

// 6. Default Parameters
// JavaScript mein function parameters ko default values bhi de sakte hain.

function greetPerson(name = "Guest") {
    console.log(`Hello, ${name}!`);  // Agar argument pass nahi kiya, toh "Guest" default hoga
}

greetPerson();  // Output: "Hello, Guest!"
greetPerson("Alice");  // Output: "Hello, Alice!"

// 7. Rest Parameters
// Rest parameter ka use karke hum multiple arguments ko ek array ke roop mein pass kar sakte hain.

function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);  // Array ke elements ko add karte hain
}

console.log(sumAll(1, 2, 3, 4));  // Output: 10

// 8. Function Hoisting
// JavaScript mein function declaration hoisted hota hai, iska matlab function ko call karne se pehle bhi use kiya ja sakta hai.

console.log(hoistedFunction());  // Output: "This is hoisted!" 

function hoistedFunction() {
    return "This is hoisted!";  // Function declaration ke baad function call kiya gaya
}

// Lekin function expressions ko hoist nahi kiya jata, unko declare karne ke baad hi use kiya ja sakta hai.
try {
    console.log(nonHoistedFunction());  // Error: nonHoistedFunction is not a function
} catch (e) {
    console.log(e.message);  // Output: nonHoistedFunction is not a function
}

const nonHoistedFunction = function() {
    return "This function is not hoisted!";
};

// 9. Callback Functions
// Callback functions wo functions hote hain jo kisi aur function mein argument ke roop mein pass kiye jaate hain.

function fetchData(callback) {
    const data = "Sample data";
    callback(data);  // Callback function ko call kiya
}

fetchData(function(data) {
    console.log(`Received: ${data}`);  // Callback function ko pass kiya
});  // Output: "Received: Sample data"

// 10. Anonymous Functions
// Anonymous function wo functions hote hain jinka koi name nahi hota.

const anonymousFunction = function() {
    console.log("This is an anonymous function");
};

anonymousFunction();  // Output: "This is an anonymous function"

// 11. Immediately Invoked Function Expressions (IIFE)
// IIFE wo functions hote hain jo immediately call kiye jaate hain jab declare kiye jaate hain.

(function() {
    console.log("This function is immediately invoked!");
})();  // Output: "This function is immediately invoked!"

// 12. Function Inside Another Function
// Ek function ko doosre function ke andar bhi declare kiya ja sakta hai.

function outerFunction() {
    function innerFunction() {
        console.log("This is the inner function!");
    }
    innerFunction();  // Inner function ko outer function ke andar call kiya
}

outerFunction();  // Output: "This is the inner function!"

// 13. The 'this' Keyword Inside Functions
// JavaScript mein 'this' keyword ko function ke context ke according use kiya jaata hai.

// In a regular function, 'this' refers to the object calling the function.
const person = {
    name: "John",
    greet: function() {
        console.log(`Hello, ${this.name}!`);  // 'this' refers to the person object
    }
};

person.greet();  // Output: "Hello, John!"

// In an arrow function, 'this' does not refer to the object but to the lexical scope.
const personArrow = {
    name: "Alice",
    greet: () => {
        console.log(`Hello, ${this.name}!`);  // 'this' refers to the global object, not the personArrow object
    }
};

personArrow.greet();  // Output: "Hello, undefined!"

// 14. Function as First-Class Citizens
// JavaScript mein functions ko variables, arrays, objects mein store kiya ja sakta hai.

const functionsArray = [
    function() { return "First function"; },
    function() { return "Second function"; }
];

console.log(functionsArray[0]());  // Output: "First function"
console.log(functionsArray[1]());  // Output: "Second function"

// 15. Function with Multiple Return Statements
// Ek function mein multiple return statements ho sakte hain.

function compareNumbers(a, b) {
    if (a > b) {
        return "a is greater";  // Agar a greater hai toh yeh return hoga
    } else if (a < b) {
        return "b is greater";  // Agar b greater hai toh yeh return hoga
    } else {
        return "Both are equal";  // Agar dono equal hain toh yeh return hoga
    }
}

console.log(compareNumbers(5, 3));  // Output: "a is greater"
console.log(compareNumbers(2, 4));  // Output: "b is greater"
console.log(compareNumbers(3, 3));  // Output: "Both are equal"

// ================== Key Points ==================
// - Functions are reusable blocks of code that can take input (parameters) and return output (values).
// - Functions can be defined using function declarations, function expressions, or arrow functions.
// - Functions can accept parameters, return values, and be invoked with arguments.
// - Functions can also be passed as arguments to other functions (callback functions) or stored as variables.
// - The 'this' keyword behaves differently in regular functions and arrow functions.
// - Functions can be used immediately (IIFE), hoisted, and even nested inside other functions.








