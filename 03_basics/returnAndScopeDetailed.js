// **Scope and Return in JavaScript**

// 1️⃣ **Basics of Functions and `return`:**
// Jab function me kuch result chahiye hota hai, toh `return` ka use karte hain.
// Agar `return` nahi likha, toh function by default `undefined` return karega.

function add(a, b) {
    return a + b; // Explicit return
}
console.log(add(2, 3)); // Output: 5

function noReturn(a, b) {
    a + b; // No return statement
}
console.log(noReturn(2, 3)); // Output: undefined

// **Interview Question:** Agar function me `return` na ho, toh kya hota hai?
// ✅ Answer: Function automatically `undefined` return karega.

// 2️⃣ **Arrow Functions Without `{}` (Implicit Return):**
// Agar arrow function single-line ho aur `{}` curly braces na use karein, 
// toh `return` likhne ki zarurat nahi hoti. Isko "implicit return" kehte hain.

const multiply = (a, b) => a * b; // No curly braces, implicit return
console.log(multiply(2, 3)); // Output: 6

// **Arrow Functions With `{}` (Explicit Return Required):**
const multiplyWithCurly = (a, b) => {
    a * b; // No return, so undefined
};
console.log(multiplyWithCurly(2, 3)); // Output: undefined

const multiplyWithReturn = (a, b) => {
    return a * b; // Explicit return
};
console.log(multiplyWithReturn(2, 3)); // Output: 6

// **Confusing Example:** Implicit vs Explicit
const greet = (name) => `Hello, ${name}!`; // No return needed
console.log(greet("John")); // Output: Hello, John!

const greetWithCurly = (name) => {
    `Hello, ${name}!`; // No return, undefined
};
console.log(greetWithCurly("John")); // Output: undefined

// **Interview Question:** Arrow function me `{}` use karne ka kya effect hota hai?
// ✅ Answer: Agar `{}` use karein, toh explicit `return` likhna zaroori hota hai.

// 3️⃣ **High-Order Methods (like `forEach`, `filter`, etc.):**

// **forEach:** Sirf side effects ke liye hota hai, kuch return nahi karta.
const coding = ["js", "ruby", "java", "python", "cpp"];
coding.forEach((item) => {
    console.log(item); // Prints each item
    return item; // This return does nothing
});
console.log("ForEach does not return anything"); // Output: undefined

// **filter:** Condition apply karta hai aur filtered array return karta hai.
const nums = [1, 2, 3, 4, 5];
const greaterThanThree = nums.filter((num) => num > 3); // `return` zaroori hai
console.log(greaterThanThree); // Output: [4, 5]

// Confusing Example (Without Return):
const numsWithoutReturn = nums.filter((num) => {
    num > 3; // No return statement
});
console.log(numsWithoutReturn); // Output: []

// **map:** Har element par transformation lagata hai aur new array return karta hai.
const squaredNums = nums.map((num) => num * num); // Implicit return
console.log(squaredNums); // Output: [1, 4, 9, 16, 25]

// Interview Tip:
// `forEach` sirf print karne ya side-effect ke liye hota hai, return values ke liye nahi.

// 4️⃣ **for...of Loop:**
// Arrays aur strings ke elements ko iterate karta hai.

const arr = [1, 2, 3];
for (const num of arr) {
    console.log(num); // Prints each number
}

const greeting = "Hello";
for (const char of greeting) {
    console.log(char); // Prints each character
}

// **Interview Question:** for...of kis ke sath use hota hai?
// ✅ Answer: Strings, arrays, maps, sets (iterable objects).

// 5️⃣ **for...in Loop:**
// Objects ke keys iterate karne ke liye.

const myObject = { js: "JavaScript", py: "Python" };
for (const key in myObject) {
    console.log(`${key}: ${myObject[key]}`); // Prints keys and values
}

// **Confusion Example:** for...in vs for...of
// ✅ for...of arrays aur strings ke liye, ✅ for...in objects ke liye.

// 6️⃣ **Confusing Interview Questions:**
// Q1: `forEach` aur `map` me difference kya hai?
// A1: `forEach` kuch return nahi karta (side-effects ke liye), jabki `map` transformed array return karta hai.

// Q2: Arrow function me kab return likhne ki zarurat hoti hai?
// A2: Agar `{}` curly braces use ho rahe ho, toh `return` likhna zaroori hai.

// Q3: Agar `filter` me `return` miss karenge, toh kya hoga?
// A3: Empty array return karega kyunki `undefined` filter out ho jayega.
