const name = "Akshay"
const repocount = "50"
console.log(`Hello my name is ${name} and my repo is ${repocount}`);

const gamename = new String( 'Akshay-kummar-poddar' );
console.log(gamename.charAt(2));
console.log(gamename.indexOf('r'));
console.log(gamename.toUpperCase());

const newString = gamename.substring(0,6)
console.log(newString);
const anotherstring = gamename.slice(-21,6)
console.log(anotherstring);

// slice(-stringLength, endIndex) will behave like slice(0, endIndex) only when the negative index corresponds to the start of the string
// as in this example above.
// For substring(), negative indices are always treated as 0, so it consistently behaves like substring(0, endIndex) in such cases.

const newStringone = "     akshay   "
console.log(newStringone.trim());
const url = "https://github.com/git%20hub"
console.log(url.replace('%20','-'));
console.log(url.includes('git'));
console.log(gamename.split('-'));




// Strings created with single or double quotes work the same.
//there is no difference between the two.


//Templates are strings enclosed in backticks (`This is a template string`).
//Templates allow single and double quotes inside a string:
// let text = `He's often called "Johnny"`;

// +++++++++++++++++++++  String Length +++++++++++++++++++++++++
// To find the length of a string, use the built-in length property:
// example:
let text = "Abcddedkjfskfdshfi";
let length = text.length;
console.log(length); // 18 characters


// Do not create String objects.
// The 'new ' keyword complicates the code and slows down execution speed.
// String objects can produce unexpected results:

let x = "John";              // String (primitive)
let y = new String("John");  // Object (String wrapper object)

console.log(x == y); // true

// Yahan x ek primitive string hai.
// y ek object hai (JavaScript ka new String() ek wrapper object banata hai).
// Loose equality me y ke object ko primitive string me convert kiya gaya comparison ke liye.
// Dono ki value "John" hone ki wajah se comparison true deta hai


let x1 = "John";              // String (primitive)
let y1 = new String("John");  // Object (String wrapper object)

console.log(x === y); // false

// Yahan x ek primitive string hai.
// y ek object hai.
// Strict equality ke liye type aur value dono ka same hona zaroori hai.
// Kyunki x aur y ke types alag hain (string vs object), comparison false deta hai


