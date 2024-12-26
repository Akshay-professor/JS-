let score = 15
console.log(typeof score);
console.log(typeof (score));

let score2 = "15abc"
console.log(typeof score2);

let valueInNumber = Number(score2)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => Nan
// true => 1
// false => 0

let HEplayed = 1;
let booleanIsHeplayed = Boolean(HEplayed);
console.log(booleanIsHeplayed);

// 1 => true
// "" => false
// "any name" => true

let number = 33
let stringNumber = String(number)
console.log(stringNumber);
console.log(typeof stringNumber);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// Key Notes:
// Relational operators (<, >, <=, >=) convert null to 0 for the comparison.
// Equality operators (== or ===) treat null and 0 as different values. Only null == undefined is true.

5 == 5;    // true
"hello" == "hello";  // true
5 == "5";   // true (string "5" is converted to number 5)
true == 1;   // true
false == 0;  // true
null == undefined;  // true
null == 0;          // false

5 === "5";    // false (number vs string)
true === 1;   // false (boolean vs number)
5 === 5;       // true
"hello" === "hello";  // true
 

// Summary:
// The == operator does not restrict comparison to values of the same type. Instead, it performs type conversion to make the comparison.
// To avoid unexpected results, it’s generally better to use === (strict equality), which avoids type coercion altogether.
