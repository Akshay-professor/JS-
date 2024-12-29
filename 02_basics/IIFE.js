// **1. What is an IIFE?**    // code 45 aur contradictory wli acche se smjh lena
// An IIFE is a function that:
// 1. Defines itself immediately.
// 2. Executes itself immediately.

// Example of an IIFE:
(function() {
    console.log("This is an IIFE. It runs immediately!");
})(); // Output: This is an IIFE. It runs immediately!

// **Key Points:**
// - It runs once as soon as it's defined.
// - The function itself cannot be reused directly.
// - You can store the return value for later use.

// --------------------------------------------------

// **2. Understanding the favoriteDrink Example**
const favoriteDrink = (function() {
    return "Masala Chai"; // This value is returned immediately
})();
console.log(favoriteDrink); // Output: Masala Chai

// **How This Works:**
// 1. The IIFE runs immediately and returns "Masala Chai".
// 2. The return value is stored in the variable `favoriteDrink`.
// 3. `favoriteDrink` now holds the string "Masala Chai", which can be reused.
// Note: The IIFE itself is gone and cannot be reused, only its result is reusable.

// --------------------------------------------------

// **3. Why It Seems Contradictory**
// - The IIFE itself is not reusable because it runs only once and disappears.
// - However, its **return value** (like "Masala Chai") can be saved and reused.
// This is not contradictory—it’s a different way to use IIFE.

// Why It Seems Contradictory?

// You might think:
// If IIFE cannot be reused, how are we reusing something here?
// Here’s the distinction:
// ->
// The function itself (the IIFE) is not reusable—it runs only once.
// But the value it returns can be stored in a variable and reused.
// This is similar to making chai once and storing it in a thermos. You cannot "make" chai again with the thermos, but you can drink the chai repeatedly because it was saved.

 

// --------------------------------------------------

// **4. Comparing to the Last Real-World Example**
const config = (function() {
    const apiKey = "12345-SECRET"; // Private variable inside the IIFE
    return {
        apiKey, // Exposed return value
        environment: "production",
    };
})();
console.log(config); // Output: { apiKey: "12345-SECRET", environment: "production" }

// **What Happens Here:**
// 1. The IIFE runs once and creates a private variable `apiKey`.
// 2. It returns an object containing `apiKey` and `environment`.
// 3. The returned object is stored in `config` for later use.
// 4. The private variable `apiKey` is encapsulated and cannot be accessed outside the IIFE.

// --------------------------------------------------

// **5. Key Differences Between IIFE and Normal Functions**

// Example of a normal function:
function makeChai(type) {
    return `${type} Chai`;
}
const chai1 = makeChai("Masala");
const chai2 = makeChai("Green");
console.log(chai1); // Output: Masala Chai
console.log(chai2); // Output: Green Chai

// Example of an IIFE:
const chaiInThermos = (function() {
    return "Masala Chai"; // The function runs once and stores this value
})();
console.log(chaiInThermos); // Output: Masala Chai

// **Key Differences:**
// 1. **Execution Timing:**
//    - Normal Function: You must call it explicitly (e.g., `makeChai()`).
//    - IIFE: Runs automatically when defined (no separate call needed).

// 2. **Reusability:**
//    - Normal Function: Can be reused multiple times.
//    - IIFE: Runs once and is not reusable, but its return value can be reused if saved.

// 3. **Scope:**
//    - Normal Function: Variables inside may leak if not handled properly.
//    - IIFE: Variables inside are private and cannot be accessed globally.

// --------------------------------------------------

// **6. Analogy for Better Understanding**
// Normal Function: Like a chai-making machine (reusable)
function makeChaiAgain(type) {
    return `${type} Chai`;
}
console.log(makeChaiAgain("Masala")); // Output: Masala Chai
console.log(makeChaiAgain("Green"));  // Output: Green Chai

// IIFE: Like making chai once and saving it in a thermos
const chaiOnce = (function() {
    return "Masala Chai"; // Made once
})();
console.log(chaiOnce); // Output: Masala Chai
// You cannot "remake" chai here, but you can reuse the saved chai (return value).

// --------------------------------------------------

// **7. Real-World Example: IIFE Initialization**
const appConfig = (function() {
    const secretKey = "ABC-123"; // Private variable
    const mode = "production"; // Private variable
    return {
        secretKey, // Exposed as part of the return value
        mode,
    };
})();
console.log(appConfig); // Output: { secretKey: "ABC-123", mode: "production" }

// --------------------------------------------------

// **8. Key Takeaway:**
// - IIFE itself is **non-reusable**, as it runs once and disappears.
// - Its **return value**, if stored, can be reused (e.g., `favoriteDrink` or `config`).

// ********** Class Notes **********
( () => {
    console.log(`Db connected`);
} ) ()

( (name) => {
    console.log(`Db connected 2 ${name}`);
} ) ("Akshay")
