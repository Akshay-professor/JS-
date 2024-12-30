// Detailed Notes on Truthy, Falsy, and Nullish Coalescing in JavaScript with Examples

// 1. **Truthy and Falsy Values**

// JavaScript mein kuch values `truthy` hoti hain (jo true ke jaisi behave karti hain)
// aur kuch values `falsy` hoti hain (jo false ke jaisi behave karti hain).

// Falsy Values (jo if condition mein `false` treat hoti hain):
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

const userEmail = " hitesh"; // Example: Non-empty string
if (userEmail) {
    console.log("Got user mail"); // Output: Got user mail (kyunki userEmail truthy hai)
} else {
    console.log("Don't have email");
}

// Truthy Values (jo if condition mein `true` treat hoti hain):
// "0" (string), "false" (string), " " (space string), [], {}, function(){}

const userEmail2 = []; // Empty array
if (userEmail2.length === 0) { // Array ki length check karenge
    console.log("Array is empty"); // Output: Array is empty
} else {
    console.log("False!"); // Ye run nahi hoga
}

// **Additional Example: Object keys check**
const emptyObj = {}; // Empty object
if (Object.keys(emptyObj).length === 0) { // Object.keys() se properties count karte hain
    console.log("Object is empty"); // Output: Object is empty
}

// -------------------------------------------------------------------

// 2. **Nullish Coalescing Operator (??)**

// Nullish Coalescing Operator (`??`) sirf `null` aur `undefined` ke against kaam karta hai.
// Matlab agar left-hand side null ya undefined ho, toh right-hand side ka value assign hota hai.

let val1 = 5 ?? 10; // Agar 5 truthy hai, toh wahi assign hoga
let val2 = null ?? 10; // null hone ki wajah se 10 assign hoga
let val3 = undefined ?? 15; // undefined hone ki wajah se 15 assign hoga
let val4 = null ?? 10 ?? 15; // Sabse pehle 10 assign hoga (pehle jo truthy milega)
let val5 = null ?? undefined; // Sab falsy hai, toh undefined assign hoga

console.log(val1); // Output: 5
console.log(val2); // Output: 10
console.log(val3); // Output: 15
console.log(val4); // Output: 10
console.log(val5); // Output: undefined

// Important: `??` operator sirf null aur undefined ke liye kaam karta hai.
// Agar 0, false ya empty string ho, toh ye truthy maane jayenge. 

let val6 = 0 ?? 20; // Output: 0 (kyunki 0 falsy nahi hai in ?? context)
console.log(val6);

// -------------------------------------------------------------------

// 3. **Ternary Operator**

// Ek shorthand way hai `if-else` condition likhne ka. Syntax:
// condition ? trueValue : falseValue

const icePrice = 100; // Example: Ice cream price
icePrice <= 80 ? console.log("Less than 80") : console.log("More than 80"); 
// Output: More than 80 (kyunki 100 > 80 hai)

// Nested Ternary Operator
const weather = "rainy";
weather === "sunny" 
    ? console.log("Picnic Time!") 
    : weather === "rainy" 
    ? console.log("Stay indoors!") 
    : console.log("Check weather updates!");

// -------------------------------------------------------------------

// **Interview Questions (Tricky and Confusing)**

// Q1. `console.log([] == false);` // Output kya hoga?
// A1: true, kyunki empty array truthy hai but loose equality coercion ke saath ye `false` ban jata hai.

// Q2. Difference between `==` and `===`?
// A2: `==` loose equality karta hai (type conversion), `===` strict equality karta hai (no type conversion).

console.log(0 == false); // true (type coercion hoti hai)
console.log(0 === false); // false (strict comparison hai)

// Q3. What is the difference between `null` and `undefined`?
// A3: `null` manually assign kiya gaya hai (intentional empty value), `undefined` ka matlab hai value abhi defined nahi hai.

let a; // Default undefined
let b = null; // Manually assigned null
console.log(a, b); // Output: undefined null

// Q4. Why does `0 ?? 20` return 0, but `0 || 20` returns 20?
// A4: `??` nullish coalescing operator sirf null/undefined check karta hai. 
// `||` logical OR operator falsy values (0, "", false) bhi check karta hai.

console.log(0 ?? 20); // Output: 0 (kyunki 0 null ya undefined nahi hai)
console.log(0 || 20); // Output: 20 (kyunki 0 falsy hai in `||`)

// Q5. How to check if an object is empty?
// A5: Use `Object.keys(obj).length === 0`.
const obj = {};
console.log(Object.keys(obj).length === 0); // true (empty object)

// Q6. Difference between `null` and `""` in a falsy check?
// A6: `null` is intentional no value, while `""` is an empty string but valid.

console.log(Boolean(null)); // false
console.log(Boolean("")); // false

// -------------------------------------------------------------------

// **Key Points to Remember**
// 1. Always check the type of value you're dealing with (truthy vs falsy).
// 2. Nullish coalescing (`??`) handles null/undefined, while logical OR (`||`) handles all falsy values.
// 3. Objects and arrays are always truthy, but their content needs separate checks (length, keys).
// 4. Ternary operator is a clean way to write simple conditions but avoid over-nesting it.

