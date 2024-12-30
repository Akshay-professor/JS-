// 🔥 Control Flow in JavaScript 🔥

// JavaScript ka control flow code ke execution ka order define karta hai.
// By default, JS top-to-bottom execute karta hai, lekin conditions, loops, aur functions control flow ko alter karte hain.

// =====================================================
// 1️⃣ if-else Statement
// =====================================================
const age = 20;

if (age >= 18) {
    console.log("You are eligible to vote."); // Age 18+ hai toh yeh chalega
} else {
    console.log("You are not eligible to vote."); // Age 18 se kam hai toh yeh chalega
}

// 🔑 Note: Agar ek hi statement execute karna hai, toh curly braces optional hain.
if (age >= 18) console.log("Eligible to vote");

// =====================================================
// 2️⃣ if-else if-else Ladder
// =====================================================
const marks = 75;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B"); // Yeh chalega agar marks 75 aur 90 ke beech ho
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Fail");
}

// 🔑 Interview Trick: What happens if all conditions are false? 
// Answer: else block execute hoga, agar woh present hai.

// =====================================================
// 3️⃣ switch Statement
// =====================================================

const fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("You selected Apple."); // Yeh match karega
        break;
    case "banana":
        console.log("You selected Banana.");
        break;
    default:
        console.log("Fruit not available."); // Default block agar koi case match nahi kare
}

// 🔑 Note: Agar "break" nahi lagate, toh switch fall-through karta hai.
// 🔑 Common Trick: If no "break", next case execute hoga even if it doesn't match.

// Example of fall-through:
switch (fruit) {
    case "apple":
        console.log("Apple selected."); // This will execute
    case "banana":
        console.log("Banana selected."); // This will also execute because there's no break
        break;
}

// =====================================================
// 4️⃣ Ternary Operator
// =====================================================

// Ternary operator ek shorthand hai for if-else condition
const isAdult = age >= 18 ? "Yes, adult" : "No, not an adult";
console.log(isAdult);

// 🔑 Note: Yeh complex conditions ke liye confusing ho sakta hai. Simplicity maintain karo.

// =====================================================
// 5️⃣ Loops: for, while, do-while
// =====================================================

// For loop
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i + 1}`);
}

// 🔑 Interview Question: What happens if there’s no increment/decrement? 
// Answer: Infinite loop hoga, execution rukega nahi.

// While loop
let count = 0;
while (count < 3) {
    console.log(`While Loop: Count is ${count}`);
    count++;
}

// Do-while loop
let num = 0;
do {
    console.log(`Do-While Loop: Number is ${num}`);
    num++;
} while (num < 2);

// 🔑 Trick: Do-while loop at least ek baar execute hota hai, even if condition false ho.

// =====================================================
// 6️⃣ break and continue
// =====================================================

// "break" loop ko immediately terminate kar deta hai
for (let i = 0; i < 5; i++) {
    if (i === 3) break; // Loop ends at i = 3
    console.log(i);
}

// "continue" current iteration skip karta hai
for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // Skips when i = 2
    console.log(i);
}

// =====================================================
// 7️⃣ Logical Operators in Control Flow
// =====================================================

const user = "admin";
const password = "123";

if (user === "admin" && password === "123") {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}

// 🔑 Common Pitfall: "&&" pehle check hota hai, uske baad "||"

// =====================================================
// 8️⃣ Nullish Coalescing Operator (??)
// =====================================================

let userName = null;
console.log(userName ?? "Guest"); // Output: Guest (because userName is null)

// 🔑 Interview Trick: What's the difference between `||` and `??`?
// Answer: `||` falsy values ko check karta hai, jabki `??` sirf null aur undefined ko check karta hai.

// =====================================================
// Tricky Interview Questions
// =====================================================

// Q1: What will be the output?
const value = 0;
if (value) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
// A1: Falsy, because 0 is a falsy value

// Q2: What's the output of the following code?
switch (1) {
    case true:
        console.log("True case");
        break;
    case 1:
        console.log("1 case");
        break;
    default:
        console.log("Default case");
}
// A2: 1 case, because switch uses strict equality (===).

// Q3: Will the loop run?
while (false) {
    console.log("This won't run.");
}
// A3: No, because the condition is false from the start.

// =====================================================
// Summary:
// 1️⃣ Control flow manages the order in which code executes.
// 2️⃣ Use if-else, switch, and loops effectively.
// 3️⃣ Avoid common pitfalls in logical operators, loops, and break/continue.
// 4️⃣ Practice tricky scenarios to be interview-ready.
