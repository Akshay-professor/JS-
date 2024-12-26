// Primitive
// 7 types : string, number, boolean, null, undefiend, symbol, Bigint

// Non-primitive
// Arrays, Objects, and functions

// +++++++++++++++++ Memory management ++++++++++++++++++

let mytname = "maiHuKING";
let yourtname = mytname;
yourtname = "maihuquuen";
console.log(yourtname);
console.log(mytname);

// `user1` object create kiya gaya, jisme `email` aur `upi` properties hain.
let user1 = {
    email: "www.example.com", // Initial email value
    upi: "user@ybl"          // UPI ID
};

// `user2` ko `user1` ka reference assign kiya gaya.
// Yahan `user2` aur `user1` dono same object ko point karte hain.
let user2 = user1;

// `user2.email` property ko update kiya gaya.
// Kyunki `user2` aur `user1` same object ko point karte hain, yeh change `user1` pe bhi reflect hoga.
user2.email = "user@example.com";

// `user1.email` print kiya gaya.
// Dono variables same object ko reference karte hain, to updated value dikhayi degi.
console.log(user1.email); // Output: "user@example.com"

// `user2.email` print kiya gaya.
// Yeh bhi updated value hi dikhayega, kyunki dono variables ek hi object ko refer karte hain.
console.log(user2.email); // Output: "user@example.com"




// stack mai copy milta hai aur heap mai refrence milta hai.