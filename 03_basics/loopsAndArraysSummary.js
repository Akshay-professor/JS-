// 🔥 Basic Loops

// 1. for Loop
// Kaha use karein? Jab fixed iteration chahiye ya break/continue ka use karna ho.
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// 2. for...of Loop
// Kaha use karein? Arrays ya iterables (like strings) ko directly access karna ho.
const arr = [10, 20, 30];
for (const num of arr) {
    console.log(num); // 10, 20, 30
}

// String ke liye for...of
const greetings = "hello world";
for (const char of greetings) {
    console.log(`Character: ${char}`);
}

// 3. for...in Loop
// Kaha use karein? Objects ke properties/keys ko loop karna ho.
const obj = { a: 1, b: 2 };
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`); // a: 1, b: 2
}

// -----------------------------------------------
// 🔥 High-Order Array Methods

// 1. forEach
// Kaha use karein? Har element par kuch action perform karna ho (like print karna).
const numbers = [1, 2, 3];
numbers.forEach((num) => console.log(num)); // 1, 2, 3

// Callback function ke saath
function printNumber(num) {
    console.log(num);
}
numbers.forEach(printNumber);

// 2. map
// Kaha use karein? Array ko modify karke ek nayi array banani ho.
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]

// 3. filter
// Kaha use karein? Kuch specific elements ko filter karke nayi array banani ho.
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2]

// 4. reduce
// Kaha use karein? Puri array ka ek single value (sum, product, etc.) find karna ho.
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 6

// 5. find
// Kaha use karein? Pehla element jo condition satisfy kare, usko find karna ho.
const firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // 2

// 6. some / every
// some: Check karna ho ki koi ek element condition satisfy kar raha hai.
// every: Check karna ho ki saare elements condition satisfy kar rahe hain.
console.log(numbers.some((num) => num > 2)); // true
console.log(numbers.every((num) => num > 0)); // true

// -----------------------------------------------
// 🔥 Objects aur Maps

// 1. for...in for Objects
const myObject = { js: "JavaScript", py: "Python", rb: "Ruby" };
for (const key in myObject) {
    console.log(`${key} stands for ${myObject[key]}`);
}

// 2. for...of for Maps
const map = new Map();
map.set("in", "India");
map.set("us", "United States");
map.set("fr", "France");
for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// Object.entries ke saath object loop karna
Object.entries(myObject).forEach(([key, value]) => {
    console.log(`${key} means ${value}`);
});

// -----------------------------------------------
// 🔥 Common Confusions (Interview Questions)

// 1. forEach vs map
// forEach: Har element par action karega, but kuch return nahi karega.
numbers.forEach((num) => console.log(num)); // Prints numbers
// map: Har element par action karega aur ek nayi array return karega.
const squared = numbers.map((num) => num ** 2);
console.log(squared); // [1, 4, 9]

// 2. Break/Continue in forEach?
// forEach mein break ya continue nahi ho sakta.
numbers.forEach((num) => {
    if (num === 2) return; // Ye skip nahi karega, bas agla callback chalega
    console.log(num);
});

// 3. for...of vs for...in
// for...of: Arrays, strings, ya iterables ke elements ko access karta hai.
// for...in: Objects ke keys ko access karta hai.

// 4. How to loop through an object using forEach?
const objectExample = { a: 1, b: 2 };
Object.entries(objectExample).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// -----------------------------------------------
// 🔥 Summary (Kaha Kya Use Karein):
// Task                        | Best Method         | Why?
// ----------------------------|---------------------|-----------------------------------
// Fixed number of iterations  | for                | Break/continue supported
// Access array elements       | for...of           | Clean syntax for arrays
// Loop through object keys    | for...in           | Designed for objects
// Action on each element      | forEach            | Clean, easy-to-read
// Transform an array          | map                | Returns new array
// Filter specific elements    | filter             | Returns filtered array
// Single value from array     | reduce             | For sums, products, etc.
// Find specific element       | find               | First matching element
// Check any/all conditions    | some / every       | Logical checks
