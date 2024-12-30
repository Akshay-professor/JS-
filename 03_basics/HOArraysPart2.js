// 🔥 High-Order Array Methods: `forEach` and `filter`
// Angela Yu Style Notes

// **1. forEach**
// - `forEach` ek high-order array method hai jo array ke har element pe ek function execute karta hai.
// - Ye kuch return *nahi* karta. Sirf side-effect ke liye use hota hai (like console logging, modifying external data).

const coding = ["js", "ruby", "java", "python", "cpp"];
const values = coding.forEach((item) => {
    console.log(item); // Har element ko print karega.
    return item; // Yeh `return` kaam nahi karega kyunki `forEach` kuch return nahi karta.
});
console.log(values); // Output: undefined

// ❓ Tricky Interview Question: 
// Q. `forEach` me `return` ka output kya hoga?
// A. Kuch nahi hoga! `forEach` sirf side effects ke liye hai, ye kabhi bhi koi value return nahi karta.

// **2. filter**
// - `filter` ek naya array banata hai un elements ka jo provided condition satisfy karte hain.
// - Isme `return` mandatory hai. Agar `return` nahi karenge, toh filtered array empty milega.

const mynumb = [1, 2, 3, 4, 5, 6, 7];
const newNums = mynumb.filter((num) => num > 4); // 4 se bade numbers filter honge.
console.log(newNums); // Output: [5, 6, 7]

// 🚨 Confusing Code Example:
const mynumb2 = [1, 2, 3, 4, 5, 6, 7];
const newNums2 = mynumb2.filter((num) => {
    num > 4; // Yahan return statement missing hai.
});
console.log(newNums2); // Output: [] (empty array)

// ✅ Correct Way:
const newNums3 = mynumb2.filter((num) => {
    return num > 4; // Condition ko explicitly return karna zaroori hai.
});
console.log(newNums3); // Output: [5, 6, 7]

// **3. Difference Between forEach and filter**
// - `forEach` se bas har element pe kaam hota hai (like print karna).
// - `filter` se hum ek nayi filtered array banate hain based on a condition.

// Example:
const result1 = mynumb.forEach((num) => num > 4);
console.log(result1); // Output: undefined (forEach kuch return nahi karta)

const result2 = mynumb.filter((num) => num > 4);
console.log(result2); // Output: [5, 6, 7] (filter nayi array return karega)

// 🔥 Advanced Note: Short-Circuit in filter
// Agar condition false hoti hai, `filter` directly us element ko skip kar deta hai.

// **Tricky Questions (Interviews)**:
// 1. Q. filter aur forEach ka main difference kya hai?
//    A. forEach kuch return nahi karta, filter ek nayi array return karta hai jo condition satisfy kare.

// 2. Q. filter ke andar `return` likhna zaroori hai?
//    A. Haan, bina `return` ke filter empty array return karega.

// 3. Q. forEach me agar `return` likha toh uska effect kya hoga?
//    A. Koi effect nahi hoga. forEach ka result hamesha undefined hi rahega.

// **Real-World Usage:**
// 1. `forEach`: Jab sirf console log karna ho ya koi external variable update karna ho.
// 2. `filter`: Jab ek subset array chahiye based on specific conditions.

mynumb.forEach((num) => {
    if (num > 4){
        newNums.push(num)
    }
})
console.log(newNums);

//  **2️⃣ Practical Example: Books Array**

// Array of book objects
const books = [
    { title: 'book one', genre: 'fiction', publish: 1981, edition: 2004 },
    { title: 'book two', genre: 'non-fiction', publish: 1982, edition: 2005 },
    { title: 'book three', genre: 'history', publish: 1984, edition: 2006 },
    { title: 'book four', genre: 'science', publish: 1983, edition: 2007 },
    { title: 'book five', genre: 'geography', publish: 1987, edition: 2008 },
    { title: 'book six', genre: 'science', publish: 1989, edition: 2009 },
    { title: 'book seven', genre: 'fiction', publish: 1988, edition: 2001 },
    { title: 'book eight', genre: 'history', publish: 1984, edition: 2002 },
    { title: 'book nine', genre: 'non-fiction', publish: 1984, edition: 2003 },
    { title: 'book ten', genre: 'geography', publish: 1980, edition: 2004 },
    { title: 'book eleven', genre: 'science', publish: 1980, edition: 2002 },
    { title: 'book twelve', genre: 'fiction', publish: 1981, edition: 2009 },
];

// Filtering books with genre "history"
let userbooks = books.filter((bk) => bk.genre === 'history');
console.log(userbooks);
// Output: Array of books where genre is "history"

// Filtering books published after 1985 AND genre is "fiction"
userbooks = books.filter((bk) => bk.publish >= 1985 && bk.genre === 'fiction');
console.log(userbooks);
// Output: Array of books matching both conditions

// **Tricky Example:** No matching conditions
const noBooks = books.filter((bk) => bk.publish > 3000); // Unrealistic condition
console.log(noBooks); // Output: []

// **3️⃣ Key Notes on filter and forEach:**
// - `forEach` ka use jab karte hain jab sirf operations perform karni ho (like console.log or push).
// - `filter` ka use jab condition apply karke ek new array chahiye hota hai.
// - **forEach ka koi return nahi hota, filter ka hota hai.**

// **4️⃣ Confusing/Tricky Questions:**
// Q1: filter me `return` miss karenge toh kya hoga?
// A1: Empty array return karega, kyunki undefined filter out ho jata hai.

// Q2: `filter` aur `forEach` kab use karenge?
// A2: Agar operation perform karni hai, toh `forEach`. Agar filtered data chahiye, toh `filter`.

// Q3: filter multiple conditions kaise handle karta hai?
// A3: Logical operators (`&&`, `||`) ka use karke multiple conditions handle karte hain.

// **Interview Tip:**
// - Always use `filter` when creating a new array based on conditions.
// - Avoid side-effects in `filter`. Side-effects ke liye `forEach` use karein.