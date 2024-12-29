// Humne ek object `user` define kiya hai jisme kuch properties aur ek method hai

const user = {
    username: "hitesh",      // Ye username property hai
    price: 999,              // Ye price property hai

    // Ye ek method hai jo current object ke `username` ko print karega
    welcomeMessage: function(){
        // `this.username` ka use karke object ka username access kar rahe hain
        console.log(`${this.username}, welcome to website`);   // `this` refers to current object (user)
        
        // `this` ka use karke poora object print kar rahe hain
        console.log(this);  // `this` will refer to the entire `user` object
    }
}

// Pehla call user.welcomeMessage() karega aur output mein `username` ko show karega
user.welcomeMessage();  // Output: "hitesh, welcome to website" aur object ka content

// Username ko update kar diya "sam"
user.username = "sam";  // Ab user ka username "sam" ho gaya hai

// Dusra call user.welcomeMessage() karega aur ab `username` ko "sam" print karega
user.welcomeMessage();  // Output: "sam, welcome to website" aur object ka content

// Jab `console.log(this)` run karte hain, toh:
console.log(this);  // Agar browser mein ho toh 'window' object print hoga, aur Node.js mein `{}` print hoga

//------------------------------------------------------------------

// Next part: Function chai() ko samajhte hain

// Function chai ko define kiya hai jisme hum `this.username` print kar rahe hain
function chai(){
    let username = "hitesh"  // Ye local variable hai jo function ke andar defined hai
    // `this.username` ka use karke global object ka `username` print kar rahe hain
    console.log(this.username);  // Browser mein `this` global object (window) ko refer karega, toh undefined milega
}

chai();  // Jab function chai() call karte hain, `this.username` ko access karne ki koshish karenge jo undefined hoga

//------------------------------------------------------------------

// Important concept: `this` ka behavior depend karta hai function ke call context par

// 1. Jab `this` object ke method mein use hota hai, toh `this` object ko refer karta hai
// 2. Agar function ko global context mein call kiya jaata hai, toh `this` global object ko refer karega
// 3. Browser mein `this` ka value `window` object hota hai, jabki Node.js mein `{}` hota hai

//------------------------------------------------------------------


// Arrow functions in JavaScript ka use karna bohot simple hai!
// Regular function aur arrow function mein ek major difference hota hai `this` ka behavior
// Arrow function mein `this` ka behavior lexical hota hai, jo ki parent scope se inherit hota hai
// Matlab: Arrow function `this` ko apne surrounding context se lega, na ki apne andar se

// Regular function:
function regularFunction() {
    console.log(this); // Yahan pe `this` kis context mein call ho raha hai, woh depend karega
}
regularFunction(); // Agar yeh global context mein run ho raha ho, toh `this` will refer to global object

// Arrow function:
const arrowFunction = () => {
    console.log(this); // Arrow function mein `this` lexical hota hai, yani yeh surrounding context ko refer karega
}
arrowFunction(); // Yahan pe `this` parent scope se inherit hoga, yeh global object ya kisi object ko refer kar sakta hai

//------------------------------------------------------------------

// Example with objects:
const user = {
    username: "hitesh",
    greet: function() {
        console.log(`Hello ${this.username}`);  // Traditional function mein `this` refers to the object itself
    },
    greetArrow: () => {
        console.log(`Hello ${this.username}`);  // Arrow function mein `this` will refer to the global object, not the object
    }
}

user.greet(); // Output: Hello hitesh  (Works fine, `this` refers to the object)
user.greetArrow(); // Output: Hello undefined  (Because arrow function `this` is inherited from the global context, and `this.username` is not found)

//------------------------------------------------------------------

// Arrow function with parameters:
const add = (a, b) => a + b; // Single line arrow function without curly braces, direct return
console.log(add(5, 10)); // Output: 15

// Arrow function with block body:
const multiply = (a, b) => {
    console.log("Multiplying..."); // You can add statements inside arrow functions
    return a * b;
}
console.log(multiply(2, 3)); // Output: Multiplying... 6

//------------------------------------------------------------------

// Advantages of Arrow Functions:
// 1. Short syntax: Arrow functions are much shorter to write than regular functions
// 2. Lexical `this`: Arrow functions inherit `this` from the surrounding context, making them useful in callbacks or event handlers

//------------------------------------------------------------------

// One more cool trick with arrow functions: Returning an object directly
const createUser = (username, price) => ({ username, price });
console.log(createUser("hitesh", 999)); // Output: { username: 'hitesh', price: 999 }

//------------------------------------------------------------------

// Summary:
// - Arrow functions ka syntax bohot compact hota hai aur `this` ke behavior ko handle karna easy hota hai.
// - Arrow functions apne parent scope se `this` inherit karte hain, jo ki regular function ke comparison mein different hai.
// - Arrow functions ko use karte waqt `this` ko samajhna zaroori hai, kyunki wo apne surrounding context ka reference leta hai.
// - Arrow function ko kabhi bhi direct return ke liye bhi use kiya jaa sakta hai, jaise object return karna ho.

