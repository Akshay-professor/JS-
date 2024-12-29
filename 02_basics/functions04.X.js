// ****************** JavaScript: Scope in Browser vs Node.js (With Reasons) ******************

// 1. Global Scope in Browser vs Node.js
// Browser:
// - The global object is `window`. Variables declared using `var` are added to `window`.
// - Variables declared with `let` and `const` are NOT added to `window` due to ES6 design 
//   for better scoping and modularity.

var browserVar = "I am global in the browser";
console.log(window.browserVar); // Outputs: "I am global in the browser"

let browserLet = "I am not added to window";
console.log(window.browserLet); // Outputs: undefined

// Node.js:
// - The global object is `global`.
// - In Node.js, each file is treated as a module. Variables declared using `var`, `let`, 
//   or `const` are confined to that module and not attached to `global`.
// - This is to prevent pollution of the global namespace in server-side applications.

var nodeVar = "I am global in Node.js";
console.log(global.nodeVar); // Outputs: undefined (doesn't attach to global)

let nodeLet = "I am not added to global";
console.log(global.nodeLet); // Outputs: undefined

// ***************************************************************************

// Reason: 
// - In the browser, global variables were traditionally attached to `window` for simplicity 
//   as it was designed for single-page applications with a single global context.
// - Node.js was designed for server-side programming where multiple modules/files run 
//   simultaneously. To avoid conflicts, Node.js uses a module system where each file has 
//   its own scope.

// ***************************************************************************

// 2. File Scope in Node.js
// - In Node.js, each file is a module. Variables declared in one file are NOT accessible in another file.

var fileVar = "I am local to file1.js";

console.log(global.fileVar); // Outputs: undefined (not attached to global)

// File: file2.js
console.log(fileVar); // Error: fileVar is not defined (not accessible in file2.js)

// ***************************************************************************

// Reason:
// - Node.js uses the CommonJS module system where each file is treated as a separate module.
// - This design ensures encapsulation and avoids polluting the global scope across files.

// ***************************************************************************

// 3. Strict Mode
// - In Node.js, strict mode is enabled by default in modules. This ensures better error handling 
//   and prevents accidental global variable declarations.
// - In the browser, strict mode must be explicitly enabled.

"use strict"; // Enables strict mode
function example() {
    undeclaredVar = "This will throw an error in strict mode"; // ReferenceError
}
example(); // Run in both browser and Node.js to observe behavior.

// ***************************************************************************

// Reason:
// - Strict mode in Node.js is enabled by default to catch common mistakes early.
// - In the browser, strict mode is optional for backward compatibility with older code.

// ***************************************************************************

// 4. Block Scope and `var`
// - `var` is function-scoped and behaves similarly in both environments.
// - `let` and `const` are block-scoped and confined to their block in both environments.

if (true) {
    var varVariable = "I am function-scoped";
    let letVariable = "I am block-scoped";
}
console.log(varVariable); // Outputs: "I am function-scoped" (accessible outside the block)
console.log(letVariable); // Error: letVariable is not defined (block-scoped)

// ***************************************************************************

// Reason:
// - `var` was designed before ES6 and is function-scoped, leading to scope leaks.
// - ES6 introduced `let` and `const` for better scoping, preventing unintended access outside blocks.

// ***************************************************************************

// 5. Comparing Browser and Node.js Scopes
// Run this code in both environments to observe differences:

var globalVar = "I am global";

if (typeof window !== "undefined") {
    console.log("In Browser: Global Variable is on Window");
    console.log("Browser globalVar on window:", window.globalVar); // Outputs: "I am global"
} else if (typeof global !== "undefined") {
    console.log("In Node.js: Global Variable is not on Global");
    console.log("Node.js globalVar on global:", global.globalVar); // Outputs: undefined
}

// ***************************************************************************

// Reason:
// - In the browser, `window` serves as the single global context for the page.
// - In Node.js, global variables are intentionally NOT added to `global` to avoid conflicts 
//   in multi-file, multi-module applications.

// ***************************************************************************

// Key Points to Remember:
// 1. In the browser, `var` is added to `window`, but `let` and `const` are not.
// 2. In Node.js, variables are confined to the module and not added to `global`.
// 3. Each file in Node.js is treated as a module to promote encapsulation.
// 4. Always use `let` and `const` for better scoping and avoid using `var` for global variables.
// 5. Test code in both environments to understand how scope behaves differently.

// ***************************************************************************

// Practical Recommendations:
// - Write modular code to avoid global variable pollution.
// - Prefer `let` and `const` to confine variables to their intended scope.
// - Use strict mode (`"use strict";`) for safer code in both environments.
// - Be aware of the global object (`window` vs `global`) and their behavior in different contexts.
