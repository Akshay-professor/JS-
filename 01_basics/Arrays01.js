// You can create by using following syntax
// const array_name = [item1, item2, ...];

// You can also create an array, and then provide the elements:
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

// The following example also creates an Array, and assigns values to it:
const cars = new Array("Saab", "Volvo", "BMW");

// The two examples above do exactly the same.
// There is no need to use new Array(). it takes more time to return data.






// +++++++++ Changing an Array Element +++++++++++

const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
console.log(cars);





// ++++++++++ Converting an Array to a String +++++++
// 1. Using toString()
// The toString() method converts all elements of the array into a comma-separated string.

const fruits = ["Apple", "Banana", "Cherry"];
const result = fruits.toString();
console.log(result); // Output: "Apple,Banana,Cherry"

// 2. Using join()
// The join() method converts the array into a string and lets you specify a custom separator.

const fruits2 = ["Apple", "Banana", "Cherry"];
const result2 = fruits.join(" - ");
console.log(result); // Output: "Apple - Banana - Cherry"






/*
| Method             | Separator         | Output                          |
|--------------------|-------------------|----------------------------------|
| toString()         | , (default)      | "Apple,Banana,Cherry"           |
| join("-")          | Custom ("-")     | "Apple - Banana - Cherry"       |
| JSON.stringify()   | None (JSON format)| '["Apple","Banana","Cherry"]'   |
| String()           | , (default)      | "Apple,Banana,Cherry"           |
*/

// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// Arrays length 
// the length property returns the number of elements in an array. it is automatically 
// updated when elements are added or removed

const fruits3 = ["Apple", "Banana", "Cherry", "Date"];

console.log(fruits3.length); // Output: 4

// Adding an element
fruits.push("Elderberry");
console.log(fruits3.length); // Output: 5

// Removing an element
fruits.pop();
console.log(fruits3.length); // Output: 4

// Additional Notes:
// -----------------
// 1. Empty Array:
   const emptyArray = [];
   console.log(emptyArray.length); // Output: 0

// 2. Modifying `length`:
   const numbers = [1, 2, 3, 4, 5];
   numbers.length = 3; // Truncate the array
   console.log(numbers); // Output: [1, 2, 3]

   numbers.length = 5; // Extend the array
   console.log(numbers); // Output: [1, 2, 3, <2 empty items>]

// 3. Arrays with Holes:
   const sparseArray = [1, , , 4];
   console.log(sparseArray.length); // Output: 4

// Key Points:
// -----------
// - Returns: The number of elements in the array.
// - Dynamic: Automatically updates as elements are added or removed.
// - Writable: Can be used to truncate or extend arrays.
