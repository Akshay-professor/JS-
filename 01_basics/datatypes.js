let x = 18 + "december";
console.log("x"); // it will print just x
console.log(x);
console.log(typeof(x));

// it will print the value of the x

// above you have seen the thing that when you haved added a number and 
// string , js treated number as a string.

// JavaScript evaluates expressions from left to right. Different sequences can produce different results:
let y = 16 + 4 + "Volvo";
console.log(y); 

let z = "Volvo" + 16 +4;
console.log(z);

// In the first example, JavaScript treats 16 and 4 as numbers, 
// until it reaches "Volvo".
// In the second example, since the first operand is a string, 
// all operands are treated as strings.

