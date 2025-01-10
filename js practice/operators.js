let a=11;
let b=2;
console.log("a=",a,"b=",b);
console.log("a+b=",a+b);
console.log("a -b=",a -b);
console.log("a*b=",a*b);
console.log("a/b= ", a / b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);
// unary operator
// a++[ post increament] or ++a[ pre increament] = a+1, a--= a-1

console.log("a++=", a++); // post increament
console.log("a--=", a--); // here a became a++, for next a, its 11.  
console.log("--a=", --a); // here a was 11, so pre decrement it became 10. 
console.log("++a=",++a); // here a was 10, so it must be 11. agar post increment hota toh ye 10 hota.

// assignment opearators 
// =, +=, -=, *=, %=, **= [ value goes from right to left]
//a += 4; // a = a+4
 
// console.log("a+=4",a);
// console.log("a%=",a);
console.log("4**=a", a);