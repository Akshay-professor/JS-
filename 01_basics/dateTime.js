let myDate = new Date();
// This creates a new Date object with the current date and time.
console.log(myDate.toString());  // Outputs the full string representation of the current date and time.
console.log(myDate.toDateString());  // Outputs only the date part, like "Mon Dec 24 2024".
console.log(myDate.toLocaleString());  // Outputs a localized date and time string based on the browser's locale.

console.log(typeof myDate);  // Outputs "object" because Date objects are considered objects in JavaScript.

let myCreatedDate = new Date(2024, 11, 24);  
// The months are 0-based, so 11 corresponds to December. This creates a date for Dec 24, 2024, at 00:00:00.
let myCreatedDate2 = new Date("12-24-2024");  
// This creates a date from a string. The format can vary based on the browser, but "12-24-2024" is usually accepted as December 24, 2024.
let myCreatedDate3 = new Date(2024, 11, 24, 19, 16, 38);  
// This creates a date for Dec 24, 2024, at 19:16:38 (7:16 PM).

console.log(myCreatedDate.toString());  
console.log(myCreatedDate2.toLocaleString());  
console.log(myCreatedDate3.toDateString()); 

let myTimestamp = Date.now(); 
console.log(myTimestamp); 
console.log(myCreatedDate.getTime()); 
console.log(Math.floor(Date.now()/1000));