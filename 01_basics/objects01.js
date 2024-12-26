// JavaScript Object with Symbol and Object.freeze()
// Object literal

// 1. Define a Symbol for a unique key
const mysymb = Symbol("key1");

// 2. Define an object using an object literal
const person = {
    firstname: "john",          // Normal property
    "full name": "john dsuza",  // Property with a space in the name
    Lastname: "dsuza",          // Property with a different casing
    age: 50,                    // Numeric property
    color: "white",             // Another property
    [mysymb]: "mykey1",         // Symbol property (computed property name)
};

// Accessing properties
console.log(person.firstname);       // Access using dot notation
console.log(person["firstname"]);    // Access using bracket notation
// console.log(person.full name);    // Error: Property name contains a space
console.log(person["full name"]);    // Correct: Access using bracket notation
console.log(person[mysymb]);         // Accessing Symbol property
console.log(typeof mysymb);          // Symbol is a unique primitive data type

// Modifying properties
person.color = "black";              // Change the color property
// Object.freeze(person);               // Prevent further changes to the object
person.color = "brown";              // This change is ignored due to freeze
console.log(person);                 // Check the state of the object after freeze

// Question 1: Why do we use square brackets for accessing Symbol properties?
// Answer: Symbols are unique identifiers and cannot be accessed using dot notation 
// because the property name is not a string. Square brackets allow the property key 
// to be dynamically computed.

// Question 2: What is the significance of the Symbol data type?
// Answer: Symbols are immutable and unique. They are often used as keys for object 
// properties to avoid name collisions and to create private-like properties.

// Question 3: What would happen if you tried to access `person.full name` without square brackets?
// Answer: It would throw a syntax error because `full name` contains a space, and JavaScript 
// interprets it as two separate identifiers.

// Question 4: How does Object.freeze() affect the person object?
// Answer: Object.freeze() makes the object immutable, meaning you cannot add, delete, or modify 
// its properties. However, existing property values that are objects or arrays can still be mutated 
// unless they are also frozen.

// Question 5: What happens if you try to modify a frozen property?
// Answer: The modification will be silently ignored in non-strict mode or will throw a TypeError in strict mode.

// Question 6: What is the typeof operator's return value for a Symbol?
// Answer: The typeof operator returns "symbol" for Symbol values, distinguishing them from other primitive types.

// Question 7: Why is mysymb used in brackets but not "firstname"?
// Answer: "firstname" is a string literal and can be used with dot notation. mysymb is a variable that 
// holds a Symbol, so square brackets are required to evaluate it as a property key.

// Question 8: What happens if you try to enumerate over the person object? Will the Symbol key show up?
// Answer: Symbol keys are not enumerated in standard for...in loops or Object.keys(). They can be retrieved 
// using Object.getOwnPropertySymbols().

// Question 9: How does Object.freeze() interact with Symbol properties?
// Answer: While Object.freeze() prevents adding, deleting, or modifying properties, it does not affect the behavior 
// of Symbol keys that point to mutable values.

// Question 10: What is the difference between Symbol("key1") and Symbol.for("key1")?
// Answer: Symbol("key1") creates a new unique Symbol every time it is called. Symbol.for("key1") checks if a Symbol 
// with the given key exists in the global Symbol registry and returns it; otherwise, it creates a new one.








// +++++++++++++++++ JavaScript: Methods in Objects and Function Invocation ++++++++++++



// Adding methods to the object
person.greeting = function() {
    console.log("hello Js User"); // Simple method
};

person.greeting2 = function() {
    console.log(`hello js user, ${this.firstname}`); // Method using 'this' keyword
};

// Accessing and invoking methods using dot notation
console.log(person.greeting);      // Without (): Outputs the function reference
person.greeting();                 // With (): Executes the function

console.log(person.greeting2);     // Without (): Outputs the function reference
person.greeting2();                // With (): Executes the function and uses 'this'

// Accessing and invoking methods using bracket notation
console.log(person["greeting"]);   // Without (): Outputs the function reference
person["greeting"]();              // With (): Executes the function

console.log(person["greeting2"]);  // Without (): Outputs the function reference
person["greeting2"]();             // With (): Executes the function and uses 'this'

// Key Points:
// 1. Functions assigned as object properties are called "methods" of the object.
// 2. To execute a method, use parentheses `()` after the property name.
// 3. Without `()`, the method is not executed; instead, it returns a reference to the function.
// 4. The `this` keyword inside an object method refers to the object itself, allowing access to its properties.
// 5. Bracket notation allows dynamic access using property names as strings, especially useful for names with spaces or symbols.

// Practical Examples:
// Accessing method references
console.log(person.greeting);     // Outputs: [Function: greeting] (the method itself)
console.log(person["greeting"]); // Outputs: [Function: greeting] (the method itself)

// Invoking methods
person.greeting();               // Outputs: "hello Js User"
person["greeting"]();            // Outputs: "hello Js User"

// Using 'this' inside a method
person.greeting2();              // Outputs: "hello js user, john"
person["greeting2"]();           // Outputs: "hello js user, john"

// Notes:
// - Dot notation is simpler and often preferred but requires the property name to be a valid identifier.
// - Bracket notation is useful for dynamic property access or when property names include spaces, special characters, or are Symbols.
// - Adding `()` invokes the function. Without it, you're only referencing the function without executing it.

// Question:
// Why do we use square brackets, and when are they necessary?
// Answer:
// 1. Square brackets are required when:
//    - The property name is not a valid identifier (e.g., it contains spaces or special characters).
//    - The property key is stored as a variable or is a Symbol.
//    - You need to dynamically compute or access a property name at runtime.
// 2. Examples:
//    - Accessing a property with a space in its name: `person["full name"]`.
//    - Accessing a Symbol-based property: `person[mysymb]`.
//    - Accessing a property with a key stored in a variable: `person[varKey]`.
// 3. Bracket notation allows for more flexibility but can make code harder to read when overused.