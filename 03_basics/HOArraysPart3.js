const myNumbers = [ 1,2,3,4,5,6,7,8,9,10 ]
const newNums1 = myNumbers.map( (num) => {
    return num + 10
})
console.log(newNums1);

const newNums2 = myNumbers
               .map((num) => num * 10)
               .map((num) => num + 1)
               .filter ( (num) => num >= 40)
console.log(newNums2);
               
// reduce: 
// syntax: reduce(callbackFn)
// reduce(callbackFn, initialValue)

// **reduce Method: Explanation and Practical Example**

// **1️⃣ Reduce Method:**
// `reduce()` method array ke elements ko ek single value me reduce karta hai. Ye ek accumulator aur current value ko function ke andar pass karta hai.
// Syntax: array.reduce(function(accumulator, currentValue), initialValue)

// Example with basic numbers array:
const numbs = [1, 2, 3];

// The function provided to reduce takes two arguments:
// - `acc`: Accumulator, jo previous value ko store karta hai
// - `currval`: Current value, jo current element ko represent karta hai
const total = numbs.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`); // Log to show step-by-step process
    return acc + currval;  // Accumulator ko update karte hue current value add karte hain
}, 0); // Initial value of accumulator is 0

console.log(total); // Output: 6 (1 + 2 + 3)

// **2️⃣ Using Arrow Function with reduce:**
// Same example as above, but using an arrow function for brevity:
const mytotal = numbs.reduce((acc, curr) => acc + curr, 0);
console.log(mytotal); // Output: 6

// **3️⃣ Practical Example: Shopping Cart Total Calculation:**
// An array of objects, where each object contains item name and price.
const shoppingcart = [
    {
        itemName: "js course",
        price: 5000,
    },
    {
        itemName: "python course",
        price: 4000
    },
    {
        itemName: "c++ course",
        price: 4970 
    },
    {
        itemName: "aaloo dalo sona nikalo course",
        price: 450
    }
];

// Using reduce to calculate total price of all items in the shopping cart
const PriceToPay = shoppingcart.reduce((acc, item) => acc + item.price, 0);
console.log(PriceToPay); // Output: 13420 (5000 + 4000 + 4970 + 450)

// **4️⃣ Key Notes on reduce:**
// - `reduce` ek accumulator pattern follow karta hai, jisme aap ek value ko accumulate karte ho (e.g., sum, product, etc.).
// - First argument of `reduce` is the callback function with two parameters: `accumulator` (acc) and `current value` (currval/item).
// - Second argument is the initial value of the accumulator, which is optional. If not provided, it defaults to the first element of the array.


// **5️⃣ Confusing/Tricky Interview Questions:**
// Q1: `reduce` ka `acc` (accumulator) value kaise work karta hai? Kab update hota hai?
// A1: Accumulator har iteration ke baad update hota hai aur uska updated value next iteration ke liye use hota hai. Ye iteration ke through accumulate hota hai.

// Q2: Agar `reduce` ko initial value nahi di toh kya hoga?
// A2: Agar initial value nahi di gayi, toh array ka first element accumulator ban jayega aur iteration second element se shuru hoga.

// Q3: `reduce` function ko object ke upar kaise use karein? (E.g., sum of prices in shopping cart)
// A3: `reduce` ko array of objects me use karte waqt, `acc` ko object set kar sakte hain aur `current` value ko object properties access karte hue update kar sakte hain.


// **6️⃣ Conclusion and Common Mistakes:**
// - `reduce` ko samajhne me thoda time lagta hai kyunki ye multiple steps ko ek function me combine karta hai.
// - Accumulator ko initialise karna (initial value) zaroori hai, agar nahi karenge toh pehli value ko default consider kiya jayega.
// - **Reduce is a very powerful tool for aggregation operations** like sum, average, object transformation, etc.
