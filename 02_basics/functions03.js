// JavaScript Functions - 

// 1. Rest Parameters (`...`) se multiple values ko function me pass karte hai
function calculatedPrice(...num1) {
    return num1; // Sabhi values ek array ke form me return hongi
}
console.log(calculatedPrice(200, 400, 500, 2000)); 
// Output: [200, 400, 500, 2000]

// 2. Object ko function ke andar pass karna
const user = {
    username: "akshay",
    price: 199
};

// Object handle karne wale function ka example
function handledObject(anyObject) {
    // Template literals ka use karke object properties ko access karte hai
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`); 
}

handledObject(user); // Function me `user` object pass kiya
// Output: Username is akshay and price is 199

// Function ko directly object pass karke bhi call kar sakte hain
handledObject({
    username: "sam",
    Price: 399 // Note: Is case me "Price" property capitalized hai, jo galat hai
    // Expected: "price" hona chahiye tha
});

// Output: Username is sam and price is undefined
// Reason: `anyObject.price` ke liye "Price" nahi mila object me

// 3. Array ko function me pass karna aur specific value ko return karna
const myNewArray = [200, 500, 600, 100];

function returnSecondValue(getArray) {
    return getArray[1]; // Array ke second element ko access karna (index 1)
}
console.log(returnSecondValue(myNewArray)); 
// Output: 500

// Direct array ko function me pass karke bhi call kar sakte hain
console.log(returnSecondValue([200, 2550, 1200, 800, 700])); 
// Output: 2550

// **Important Notes:**
// - `...` Rest parameters se multiple values ko ek array ke form me capture karte hain.
// - Objects ko handle karte waqt correct property names use karna zaroori hai.
// - Arrays me indexing 0 se start hoti hai, isliye `getArray[1]` second value ko access karega.

// **Common Mistakes:**
// - Object properties ka case (uppercase/lowercase) galat hone par `undefined` return hoga.
// - Array indexing ko galat use karna (e.g., out-of-bounds index par error ho sakta hai).

