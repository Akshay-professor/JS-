// ***************** JavaScript: Function Nesting and Lexical Scope *****************

// Function `one` ke andar ek constant `Username` declare hua hai.
function one() {
    const Username = "Akshay"; // Yeh variable sirf function `one` ke andar accessible hai.

    // Function `two` define hua hai function `one` ke andar.
    function two() {
        const website = "Youtube"; // Yeh variable sirf function `two` ke andar accessible hai.
        console.log(Username); // Yeh `Username` ko access kar raha hai, jo function `one` ke scope me hai.
    }

    // Agar aap yahan `console.log(website)` likhoge to error aayega:
    // Error: website is not defined
    // Reason: `website` ka scope sirf function `two` ke andar limited hai.

    two(); // Function `two` ko yahan call karte hain.
}

// Function `one` ko call karte hain.
one();

// **************** Explanation ****************
// 1. **Lexical Scope:**
// - JavaScript me functions ke andar nested functions ho sakte hain.
// - Ek nested function (jaise `two`) apne parent function (jaise `one`) ke variables ko access kar sakta hai.
// - Iska matlab hai ki `two` ke andar se `Username` access karna valid hai, kyunki wo `one` ke scope me declared hai.

// 2. **Scope of Variables:**
// - `Username` ka scope function `one` tak limited hai. Wo function `two` me accessible hai, kyunki `two` ka scope `one` ke andar hai.
// - `website` ka scope sirf function `two` tak limited hai. Isliye `console.log(website)` function `one` ke andar kaam nahi karega.

// 3. **Error:**
// - Agar `console.log(website)` ko `one` ke andar likhne ki koshish karte ho, to JavaScript bolega "ReferenceError: website is not defined".
// - Reason: Kyunki `website` sirf `two` ke andar declare hua hai, wo `one` ke scope ke bahar hai.

// **************** Practical Notes ****************
// - Nested functions me parent ke variables ko access kar sakte ho, par parent function child ke variables ko access nahi kar sakta.
// - Lexical scope ka matlab hai ki ek function apne declaration ke environment ke variables ko access kar sakta hai.
// - Ye behavior closures ke liye bhi base ka kaam karta hai.



function one1() {
    const Username = "Akshay"; // Local variable in function 'one'.

    function two1() {
        const website = "Youtube"; // Local variable in function 'two'.
        console.log(Username); // Accessing 'Username' from the parent scope.
    }

    // two(); // Function 'two' is not called, so its code won't execute.
}

one1(); // Only 'one' is called, but 'two' is never executed.

// Another example -

if (true) {
    const username = "Akshay"; // Block-scoped variable
    if (username === "Akshay") {
        const website = "youtube";
        console.log(username + website); // Outputs: "Akshayyoutube"
    }

    // console.log(website); // Uncommenting this will throw an error
}

// console.log(username); // Uncommenting this will throw an error

// +++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++

// Function call before declaration using hoisting
console.log(addone(5));  // Outputs: 6

// Function Declaration
function addone(num) {
    return num + 1;
}

// Position of log matters here:
// - 'addone' function is hoisted, so we can call it before it's defined in the code.


// Trying to log 'addtwo' before it's defined will cause an error
console.log(addtwo); // Error: Cannot access 'addtwo' before initialization

// Function Expression (assigned to a variable)
const addtwo = function(num) {
    return num + 2;
};
