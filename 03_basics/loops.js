// Class notes
//  for loops
let i;
for (let i = 0; i <=10; i++) {
    const element = i;
    if (element == 5){
        console.log("5 is the best number");
    }
    console.log(element);  
} 
console.log(typeof i);

for (let i = 0; i <= 10; i++) {
    console.log(`outer loopvalue: ${i}`);
   for (let j = 0; j <= 10; j++) {
    // console.log(`inner loopvalue ${j} and inner loop ${i}`);
   console.log(i + '*' + j + '=' + i*j);
   
}
}

let myarray = ["flash", "batman","shaktiman"]
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    console.log(element);   
}

// break and continue
for (let i = 0; i <= 10; i++) {
    if (i == 5){
        console.log(`Detected 5`);
        break
    }
    console.log(`vlaue of i is ${i}`);
    
}

for (let i = 0; i <= 10; i++) {
    if (i == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`vlaue of i is ${i}`);
    
} 

// Detailed notes
// // 🔥 Loops, Break, and Continue in JavaScript 🔥

// Loops code ko repeatedly execute karte hain jab tak condition true ho.
// JavaScript mein commonly used loops hain: for, while, aur do-while.

// =====================================================
// 1️⃣ For Loop
// =====================================================
// Syntax: for (initialization; condition; increment/decrement)

for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}`); // i ke value print karega 1 se 5 tak
}

// 🔑 Note:
// - Initialization: Starting value set karta hai (e.g., `let i = 1`).
// - Condition: Jab tak condition true hai, loop chalega (e.g., `i <= 5`).
// - Increment/Decrement: Har iteration ke baad value change hoti hai (e.g., `i++`).

// Confusing Interview Question:
// Q: What happens if increment is missing in a for loop?
for (let i = 1; i <= 5; ) {
    console.log(i); // Infinite loop, kyunki i kabhi change nahi hoga
}

// =====================================================
// 2️⃣ While Loop
// =====================================================
// Syntax: while (condition)

let count = 1;
while (count <= 3) {
    console.log(`Count: ${count}`); // 1, 2, 3 print karega
    count++; // Increment zaroori hai loop ko terminate karne ke liye
}

// 🔑 Note:
// - While loop condition check karta hai **before** running the code.
// - Agar condition pehle hi false hai, loop kabhi nahi chalega.

let x = 0;
while (x > 5) {
    console.log("This won't run!"); // Yeh kabhi execute nahi hoga, because x > 5 is false
}

// =====================================================
// 3️⃣ Do-While Loop
// =====================================================
// Syntax: do { ...code... } while (condition);

let num = 0;
do {
    console.log(`Number: ${num}`); // Yeh ek baar chalega even though condition false hai
    num++;
} while (num < 0);

// 🔑 Note:
// - Do-while loop at least ek baar execute hota hai, chahe condition false ho.

// =====================================================
// 4️⃣ Nested Loops
// =====================================================

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i: ${i}, j: ${j}`); // Nested loop ka example
    }
}

// 🔑 Note: Nested loops ka use tab hota hai jab hume multi-level data ko traverse karna ho.

// Example: Printing a matrix
const matrix = [
    [1, 2],
    [3, 4],
    [5, 6],
];
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        console.log(`Element: ${matrix[row][col]}`);
    }
}

// =====================================================
// 5️⃣ Break Statement
// =====================================================
// "break" loop ko immediately terminate kar deta hai.

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Breaking the loop!"); // Jab i = 3, loop break karega
        break;
    }
    console.log(i); // 1, 2 print karega
}

// 🔑 Common Interview Question:
// Q: Can break exit only the innermost loop?
// A: Yes, break sirf current loop ko terminate karega, outer loop pe asar nahi hoga.

// Example: Exiting only the inner loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) break; // Sirf inner loop break karega
        console.log(`i: ${i}, j: ${j}`);
    }
}

// =====================================================
// 6️⃣ Continue Statement
// =====================================================
// "continue" current iteration ko skip karta hai aur next iteration pe jump karta hai.

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping iteration 3!"); // i = 3 ko skip karega
        continue;
    }
    console.log(i); // 1, 2, 4, 5 print karega
}

// 🔑 Confusing Trick: Combine break and continue
for (let i = 1; i <= 5; i++) {
    if (i === 2) {
        console.log("Skipping 2!");
        continue; // i = 2 skip karega
    }
    if (i === 4) {
        console.log("Breaking at 4!");
        break; // i = 4 pe loop terminate karega
    }
    console.log(i); // 1, 3 print karega
}

// =====================================================
// 7️⃣ Infinite Loops
// =====================================================
// Infinite loop tab hota hai jab condition kabhi false nahi hoti

// Example of infinite loop:
while (true) {
    console.log("Infinite loop!"); // Yeh rukega nahi
    break; // Iske bina loop infinite chalega
}

// 🔑 Common Pitfall:
// Be cautious while writing loop conditions, incorrect conditions can crash your program.

// =====================================================
// Trick Interview Questions
// =====================================================

// Q1: What’s the difference between "break" and "return" in loops?
// A1: "break" loop ko terminate karta hai, "return" function ko exit karta hai.

// Q2: Will this code execute?
for (let i = 0; i < 3; ) {
    console.log(i);
    i--; // Infinite loop, because i is decreasing
}

// Q3: Can continue be used in a while loop?
let y = 0;
while (y < 5) {
    y++;
    if (y === 3) continue; // Skips y = 3
    console.log(y); // Prints: 1, 2, 4, 5
}

// Q4: What’s the output?
for (let i = 0; i < 5; i++) {
    if (i > 2) {
        break;
    }
    console.log(i);
}
// Output: 0, 1, 2 (breaks at i > 2)

// =====================================================
// Summary:
// - Loops: Repeat code execution until a condition is met.
// - break: Exit the loop immediately.
// - continue: Skip the current iteration and move to the next.
// - Use loops wisely to avoid infinite loops and unnecessary computations.
// - Always dry-run your loop conditions to prevent bugs.
