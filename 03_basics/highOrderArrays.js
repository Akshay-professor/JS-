// class notes

// 🔑 "for...of" loop ka basic concept:
// - Jab hum `for...of` loop ka use karte hain, toh hum har element ko directly access kar rahe hote hain.
// - `num` aur `greet` variables mein jo bhi value hai, wo uss iteration ke element ko store karta hai.
// - Iska matlab hai ki agar hum ek array iterate kar rahe hain, toh `num` mein array ka current element aayega.
// - Agar hum ek string iterate kar rahe hain, toh `greet` mein current character aayega.

const arr = [1, 2, 3, 4, 5]; // Ek array hai
for (const num of arr) {
    console.log(num);  // Ismein "num" ka matlab hai array ka current element
}

// Explanation for `arr`:
  // - Jab loop start hoga, pehla element (1) `num` variable mein assign hoga.
  // - Fir loop next element (2) ko `num` mein assign karega.
  // - Aise hi 5 tak, har element ko `num` ke through print kiya jayega.

const greetings = "hello world"; // Ek string hai
for (const greet of greetings) {
    console.log(`Each char is ${greet}`); // `greet` mein har character store hoga
}

// Explanation for `greetings`:
  // - Jab loop start hoga, pehla character ('h') `greet` variable mein assign hoga.
  // - Fir loop next character ('e') ko `greet` mein assign karega.
  // - Aise hi poore string ke har character ko `greet` ke through print kiya jayega.

// 🔑 Important difference:
  // 1. Jab array ke saath "for...of" use karte hain, toh `num` mein array ka value store hota hai.
  //    - Jaise: `num = 1`, `num = 2` (etc.) jab hum array ke elements iterate karte hain.
  // 2. Jab string ke saath "for...of" use karte hain, toh `greet` mein string ka character store hota hai.
  //    - Jaise: `greet = 'h'`, `greet = 'e'` (etc.) jab hum string ke characters iterate karte hain.
  
// Example for array (just for clarity):
const arr2 = [10, 20, 30];
for (const num of arr2) {
    console.log(num); // `num` will be 10, then 20, then 30
}

// Example for string (just for clarity):
const str = "abc";
for (const greet of str) {
    console.log(greet); // `greet` will be 'a', then 'b', then 'c'
}

// 📝 Maps: Explanation and Usage

// Maps ek collection type hota hai JavaScript mein jo key-value pairs ko store karta hai.
// Maps ka fayda ye hai ki keys kisi bhi data type (string, number, object, etc.) ke ho sakte hain.

// 🔸 Map Banaya aur Use Kiya:
const map = new Map();
map.set('in', "India"); // Key: 'in', Value: 'India'
map.set('usa', "United States of America"); // Key: 'usa', Value: 'United States of America'
map.set('fr', "France"); // Key: 'fr', Value: 'France'

console.log(map); // Output: Complete Map object with all key-value pairs

// 🔹 Iterating over Map:
for (const [key, value] of map) {
    console.log(key, ':-', value); // Key aur Value ko destructuring karke print kiya
}
// Output:
// in :- India
// usa :- United States of America
// fr :- France

// ❌ Ye part commented hai, aur ye chalega nahi:
// Objects ko directly "for...of" ke saath iterate nahi kar sakte.
//// const myobj = {
////     'game1': 'NFS',
////     'game2': 'Spiderman',
////     'game3': 'Sudoku'
//// };
//// for (const [key, value] of myobj) {
////     console.log(key, ':-', value);
//// }
// Error: myobj is not iterable

// 🔸 Correct Way to Iterate an Object:
const myobject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
};

// "for...in" loop ka use karke object ke properties (keys) iterate karte hain:
for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);
}
// Output:
// js shortcut is for JavaScript
// cpp shortcut is for C++
// rb shortcut is for Ruby
// swift shortcut is for Swift by Apple

// 🛠️ Differences between Map and Object:
// 1. **Key Type**:
//    - Object me keys hamesha strings ya symbols hoti hain.
//    - Map me keys kisi bhi data type ki ho sakti hain (string, number, object, etc.).
// 2. **Iteration**:
//    - Map directly iterable hai (use `for...of`).
//    - Object ko iterate karne ke liye `for...in` ya `Object.keys()`, `Object.entries()` ka use karte hain.
// 3. **Order of Keys**:
//    - Map me keys insertion order me stored hoti hain.
//    - Object me keys ka order guarantee nahi hota (but modern browsers maintain insertion order for strings).

// 🧠 Interview Question: Why use Map over Object?
// - Agar hume complex key-value pairs store karne hain jahan keys non-strings ho sakti hain, toh Map prefer karte hain.
// - Agar hume sirf string keys ka simple structure chahiye, toh Object sufficient hai.

// 🔍 Tricky Question:
// Q: Can we use `for...of` to iterate over an object directly?
// A: Nahi, `for...of` loop ko sirf iterable objects ke saath hi use kar sakte hain (like arrays, strings, maps, sets).
//    Agar hume objects iterate karna hai, toh `for...in` ya `Object.entries()` ka use karte hain.

// Example with `Object.entries`:
const entries = Object.entries(myobject);
console.log(entries);
// Output: [['js', 'JavaScript'], ['cpp', 'C++'], ['rb', 'Ruby'], ['swift', 'Swift by Apple']]

// Iterating using `Object.entries`:
for (const [key, value] of entries) {
    console.log(`${key} is for ${value}`);
}
// Output:
// js is for JavaScript
// cpp is for C++
// rb is for Ruby
// swift is for Swift by Apple

// 📝 forEach Method Notes in Hinglish

// 🔹 `forEach` JavaScript ka ek high-order array method hai 
// jo har array element par ek baar callback function ko call karta hai.

// 🔸 Example 1: Basic Usage
const coding = ["js", "ruby", "java", "python", "cpp"];
// Array ke har element ko iterate karne ke liye forEach ka use:
coding.forEach(function (val) {
    console.log(val); // Array ke elements ek-ek karke print honge
});
// Output:
// js
// ruby
// java
// python
// cpp

// 🔸 Example 2: Arrow Function ke Saath
coding.forEach((item) => {
    console.log(item); // Short syntax using arrow function
});
// Output remains the same

// 🔸 Example 3: Separate Function
function printme(item) {
    console.log(item); // Function ko pass kiya gaya `forEach` mein
}
coding.forEach(printme);
// Output remains the same

// 🔸 Example 4: Additional Parameters in Callback
coding.forEach((item, index, arr) => {
    console.log(item, index, arr); 
    // `item`: Current array element
    // `index`: Current element ka index
    // `arr`: Original array
});
// Output:
// js 0 ["js", "ruby", "java", "python", "cpp"]
// ruby 1 ["js", "ruby", "java", "python", "cpp"]
// java 2 ["js", "ruby", "java", "python", "cpp"]
// python 3 ["js", "ruby", "java", "python", "cpp"]
// cpp 4 ["js", "ruby", "java", "python", "cpp"]

// 🔸 Example 5: Array of Objects
const myCoding = [
    {
        langName: "java",
        fileName: "JAVA"
    },
    {
        langName: "python",
        fileName: "PYTHON"
    },
    {
        langName: "ruby",
        fileName: "RUBY"
    }
];

// Har object ke `langName` property ko print karte hain:
myCoding.forEach((item) => {
    console.log(item.langName); 
});
// Output:
// java
// python
// ruby

// 🔹 Important Notes:
// 1. `forEach` kisi bhi value ko return nahi karta (undefined return hoti hai).
// 2. `forEach` asynchronous nahi hai, toh ye sequentially run hota hai.
// 3. Agar loop ko break karna ho toh `forEach` suitable nahi hai, uske liye `for` ya `for...of` ka use karein.
// 4. `forEach` ke andar jo callback function pass karte hain, usme teen arguments ho sakte hain:
//    - Current element
//    - Index of current element
//    - Original array

// 🔸 Interview Questions:
// Q1: Can you stop a `forEach` loop prematurely?
// A: Nahi, `forEach` ko break ya continue nahi kar sakte. Agar stop karna ho toh `for` ya `for...of` use karein.

// Q2: What happens if `forEach` is called on an empty array?
const emptyArray = [];
emptyArray.forEach((item) => {
    console.log(item); // Callback function kabhi call nahi hoga.
});
// Output: Nothing will be printed.

// Q3: What's the difference between `map` and `forEach`?
// A: `forEach` kuch return nahi karta, jabki `map` ek nayi array return karta hai jo har element par callback ka result store karti hai.
