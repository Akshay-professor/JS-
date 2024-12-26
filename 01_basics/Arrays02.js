/* ++++++++++++++++++++++

in JavaScript, there are several array methods that return true or false based on a condition. 
These methods are particularly useful for checking properties of arrays or their elements. 
Below is a list of such methods with explanations and examples:

+++++++++++++++++++++++++ */


// 1. includes()- Checks if an array contains a specified value.

const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.includes("Banana")); // Output: true
console.log(fruits.includes("Mango"));  // Output: false

// 2. some() - Checks if at least one element satisfies a condition.

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.some(num => num > 3)); // true
console.log(numbers.some(num => num > 10)); // false

// 3. every()- Checks if all elements satisfy a condition.

const numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.every(num => num > 0)); // true
console.log(numbers2.every(num => num > 3)); // false

// 4. indexOf()- returns -1 if a value is not found, otherwise it will the value at that index

console.log(numbers.indexOf(3)); // 2
console.log(numbers.indexOf(9)); // -1

// 5. slice() Method
// Use: slice() method se hum ek part (subset) array ka nikaalte hain,
// bina original array ko modify kiye. Iska output ek new array hota hai.

const fruits4 = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

const slicedFruits = fruits4.slice(1, 4);
console.log(slicedFruits); // Output: ["Banana", "Cherry", "Date"]

// Agar endIndex nahi diya, toh array ka last part lega:

const slicedFruits2 = fruits4.slice(2);
console.log(slicedFruits2); // Output: ["Cherry", "Date", "Elderberry"]

// **** Important: slice() original array ko modify nahi karta. 
// Yeh ek new array return karta hai.****


// 6. splice()
// Use: splice() method se hum array ko modify kar sakte hain. 
// Isse hum elements ko add, remove, ya replace kar sakte hain. 
// Yeh method original array ko directly modify karta hai.

// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
// startIndex: Jahan se changes shuru honge.
// deleteCount: Kitne elements ko hataana hai. Agar 0 diya, toh koi element delete nahi hota.
// item1, item2, ...: Ye optional items hain jo hum array me add kar sakte hain.


const fruits5 = ["Apple","banana","cherry","date","abc"];
const newfruits5 = fruits5.splice(1,2);
console.log(fruits5);  // Output: ["Apple", "Date", "abc"]
console.log(newfruits5); 

// Add new elements at index 2
fruits5.splice(2, 0, "Fig", "Grapes");
console.log(fruits5); // Output: ["Apple", "Date", "Fig", "Grapes", "abc"]
console.log(newfruits5); 

// Replace 1 element at index 1 with "Blueberry"
fruits5.splice(1, 1, "Blueberry");
console.log(fruits5); // Output: ["Apple", "Blueberry", "Fig", "Grapes", "abc" ]
console.log(newfruits5); 