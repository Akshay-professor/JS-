// **JavaScript Scope - Global aur Local Scope Code Notes in Hinglish**

// 1. **Global Scope**
// - Global variables poore program me accessible hote hain.
// - Ye kisi bhi function ya block ke andar nahi declare hote.

// Example:
let globalVar = "This is global"; // Global scope variable

function checkGlobal() {
    console.log(globalVar); // Global variable ko function ke andar access kar sakte hain
}
checkGlobal(); // Output: "This is global"

console.log(globalVar); // Function ke bahar bhi access kar sakte hain
// Output: "This is global"

// Note: Agar kisi variable ko bina `let`, `const`, ya `var` ke define karein, wo automatic global ban jata hai.
// Example (Not Recommended):
function makeGlobal() {
    implicitGlobal = "I am also global"; // Implicit global variable
}
makeGlobal();
console.log(implicitGlobal); // Output: "I am also global"

// 2. **Local Scope**
// - Local variables sirf usi function ya block ke andar accessible hote hain jaha wo define kiye gaye hain.
// - Ye bahar access nahi hote.

function localExample() {
    let localVar = "This is local"; // Local scope variable
    console.log(localVar); // Function ke andar access ho sakta hai
}
localExample(); // Output: "This is local"

// console.log(localVar); 
// Error: localVar is not defined (kyunki ye global nahi hai)

// 3. **Block Scope (let, const)**
// - `let` aur `const` block scope ko follow karte hain.
// - Block scope ka matlab hai ki ye variables sirf us block ke andar accessible hain jisme define kiye gaye hain.

if (true) {
    let blockVar = "This is block scope"; // Block scope variable
    console.log(blockVar); // Block ke andar access hoga
}
// console.log(blockVar); 
// Error: blockVar is not defined (block ke bahar accessible nahi hai)

if (true) {
    var blockVarWithVar = "This behaves like global inside a function"; // `var` ka behaviour alag hai
    console.log(blockVarWithVar);
}
console.log(blockVarWithVar); 
// Output: "This behaves like global inside a function" (kyunki `var` block scope ko nahi maanta)

// 4. **Function Scope (`var`)**
// - `var` variables function ke andar scoped hote hain, lekin block ke andar nahi.

function varExample() {
    if (true) {
        var functionScopedVar = "This is function scoped"; // Function scope
    }
    console.log(functionScopedVar); // Accessible within the function
}
varExample(); // Output: "This is function scoped"

// console.log(functionScopedVar); 
// Error: functionScopedVar is not defined (global nahi hai)

// 5. **Lexical Scope**
// - Inner functions apne parent function ke variables ko access kar sakti hain.

function outerFunction() {
    let outerVar = "Outer Variable";

    function innerFunction() {
        console.log(outerVar); // Parent function ka variable access hota hai
    }
    innerFunction();
}
outerFunction(); 
// Output: "Outer Variable"

// 6. **Global Variable Overriding**
// - Agar local aur global variables ka naam same ho, to local variable global variable ko shadow karta hai (override).

let sameName = "Global Variable";

function shadowingExample() {
    let sameName = "Local Variable"; // Local variable global variable ko shadow karega
    console.log(sameName); // Output: "Local Variable"
}
shadowingExample();
console.log(sameName); // Output: "Global Variable"

// 7. **Variables in Different Scopes**
let globalVariable = "Global"; // Global variable

function functionScopeExample() {
    let localVariable = "Local"; // Local variable
    if (true) {
        let blockVariable = "Block"; // Block variable
        console.log(globalVariable); // Accessible
        console.log(localVariable); // Accessible
        console.log(blockVariable); // Accessible
    }
    // console.log(blockVariable); 
    // Error: blockVariable is not defined
}
functionScopeExample();

// 8. **Best Practices for Scope**
// - Use `let` and `const` to define variables, avoid `var`.
// - Keep global variables minimum to avoid conflicts.
// - Use clear and meaningful names to differentiate variables in different scopes.
