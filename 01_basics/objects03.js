// ++++++++++++++++++ JavaScript: Object of an Array & Object.keys() +++++++++++++++++++++

// 1. Object of an Array: 
// An array where each element is an object, or an object where the values are arrays.

// Example 1: Array of Objects
const employees = [
    { name: "Alice", age: 30, position: "Engineer" },
    { name: "Bob", age: 25, position: "Designer" },
    { name: "Charlie", age: 35, position: "Manager" }
];

// Accessing properties of the objects in the array
console.log(employees[0].name); // Outputs: "Alice"
console.log(employees[1].position); // Outputs: "Designer"

// Example 2: Object with Array Values
const company = {
    engineering: ["Alice", "Bob", "Charlie"],
    hr: ["David", "Eve"],
};

// Accessing array inside an object
console.log(company.engineering[0]); // Outputs: "Alice"
console.log(company.hr[1]); // Outputs: "Eve"

// 2. Object.keys() Method:
// Object.keys() returns an array of an object's own enumerable property names (keys).

// Syntax:
// Object.keys(object)

// Example: Using Object.keys() to get the keys of an object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Using Object.keys() to get the keys of the object
const keys = Object.keys(person);

console.log(keys);  // Outputs: ["name", "age", "city"]
console.log(Object.values(person));
console.log(Object.entries(person)); // Entries array mai create kr deti harek key and value ko sath lake

// Key Points:
// 1. Object of an Array: An array can contain objects, or an object can have arrays as its values.
// 2. Object.keys(): Returns an array of keys (property names) of an object.
// 3. Object.keys() is useful for iterating over an object's properties or for checking the structure of the object.

// Practical Use Cases:
// - To access and manipulate data in an array of objects.
// - To retrieve and loop through object properties dynamically using Object.keys().
