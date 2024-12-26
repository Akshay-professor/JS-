const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

// 1. toString() method number object ko string mein convert kar deta hai.
// Is case mein,
// balance.toString() se 100 string type mein convert hoga aur print hoga.
// 2. toFixed(2) method number ko fixed number of decimal places ke saath convert karta hai.
// Yahan, balance (jo 100 tha) ko 2 decimal places ke saath show karega. 
// Toh output 100.00 hoga.

const otherNUmber = 123.8966
console.log(otherNUmber.toPrecision(4));
const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN'));

// 1. toPrecision(4):
// Yeh method number ko 4 significant digits tak round karne ka kaam karta 
// hai. Is case mein 123.8966 ko 4 digits tak round karke 123.9 dega.

// 2. toLocaleString('en-IN'):
// Yeh method number ko ek specific locale (jaise 'en-IN' for India) ke hisaab se format karta hai. 
// Isse large numbers mein commas add hote hain jaise Indian format mein hota hai (e.g., 1,00,00,00,000 for 1 billion)





// ++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.max(4,3,3,6,9));
console.log(Math.min(4,6,9,2,1,0));


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * ( max - min + 1)) + min);

// 1. Math.random():
// Yeh function ek random floating-point number generate karta hai,
// jo 0 (inclusive) aur 1 (exclusive) ke beech hota hai.

// 2. Math.random() * 10 + 1:
// Isme Math.random() se jo number milta hai, usko 10 se multiply karte hain,
// jisse 0 aur 10 ke beech ek random number milta hai. Phir 1 add karke range ko 1 aur 11 ke beech shift karte hain.

// 3. Math.floor():
// Math.floor() method number ko neeche ki taraf round kar deta hai,
// jisse hum ek integer number milta hai. Jab hum Math.random() * 10 ke saath use karte hain,
// toh yeh range ko 0 se 9 tak shift kar deta hai. Phir +1 se range ko 1 se 10 tak shift karte hain.
// ******This formula generates a random integer between 1 and 10 (both inclusive),****** 
// ******and the +1 ensures that the value is never 0, so the minimum value is 1.******

// 4. Random number between min and max:
// Jab humein kisi custom range ke beech random number chahiye hota hai
// (for example, 10 se 20 ke beech), toh hum Math.random() * (max - min + 1) use karte hain. 
// Phir Math.floor() ke saath integer generate karte hain aur min ko add kar ke range ko shift karte hain.
// This formula generates a random integer between min and max, both inclusive.
// In our example, if min = 10 and max = 20, the possible output could be any integer between 10 and 20, including both.