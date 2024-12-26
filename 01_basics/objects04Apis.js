const numbers = [10, 20, 30];

// Array Destructuring: numbers array ke values ko variables mein assign karna
const [a, b, c] = numbers; // yha arrays ke destr ke liye square brackets rhenge,objects ke liye curly

console.log(a); // Outputs: 10
console.log(b); // Outputs: 20
console.log(c); // Outputs: 30

/*
Explanation in Hinglish:

1. `const [a, b, c] = numbers;` line mein hum array destructuring use kar rahe hain.
   - Ye line `numbers` array ke first element ko `a` variable mein assign karti hai.
   - Dusre element ko `b` mein aur teesre element ko `c` mein assign kiya jata hai.

2. Destructuring ka matlab hai ki hum ek array ke elements ko directly variables mein assign kar sakte hain bina har element ko manually assign kiye.

3. Jab hum `console.log(a)` likhte hain, toh `a` mein jo value hai (jo ki `numbers` array ke pehle element, yani `10`, ke equal hoti hai), wo print hoti hai.

4. Is tarah se:
   - `a` mein `numbers[0]` ki value (10) assign hoti hai.
   - `b` mein `numbers[1]` ki value (20) assign hoti hai.
   - `c` mein `numbers[2]` ki value (30) assign hoti hai.

5. **Important**: Destructuring ke baad, `a`, `b`, aur `c` variables mein directly values hoti hain, na ki array ka reference. Isliye, hum `a` ko access karke direct `10` value dekhte hain, na ki array `numbers[0]`.

*/
// Skipping Array Elements
const [first, , third] = numbers; // Second element ko skip kar diya

console.log(first); // Outputs: 10
console.log(third); // Outputs: 30


// 2. Object Destructuring (Object se properties ko extract karna)

// Example: Simple Object Destructuring
const person = {
    name: "Alice",
    age: 25,
    job: "Engineer"
};

// Object ke properties ko variables mein assign karna
const { name, age, job } = person;

console.log(name); // Outputs: "Alice"
console.log(age);  // Outputs: 25
console.log(job);  // Outputs: "Engineer"

// Renaming Variables during Destructuring
const { name: fullName, age: yearsOld, job: occupation } = person;

console.log(fullName);  // Outputs: "Alice"
console.log(yearsOld);  // Outputs: 25
console.log(occupation); // Outputs: "Engineer"


// 3. Destructuring with Default Values (Default values dena agar property undefined ho)

const person2 = {
    name: "Bob",
    age: 30
};

// Fix: Rename destructured variables for person2 to avoid conflict
const { name: person2Name, age: person2Age, job: person2Job = "Not Defined" } = person2;

console.log(person2Job);  // Outputs: "Not Defined" (kyunki "job" property defined nahi thi)
console.log(person2Name); // Outputs: "Bob"
console.log(person2Age);  // Outputs: 30
