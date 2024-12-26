const marvel = ["ram", "aam", "amrud"];
const dc = ["kela", "anhgur", "sev"];

// Add `dc` array as an element to `marvel`
marvel.push(dc);
console.log(marvel); // Step 1

// Access the second element of the `dc` array inside `marvel`
console.log(marvel[3][1]); // Step 2

// Concatenate `marvel` and `dc` arrays
const all = marvel.concat(dc);
console.log(all); // Step 3
const allnew = [...marvel, ...dc];
console.log(allnew);

const another = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const newanother = another.flat(Infinity)
console.log(newanother);

console.log(Array.isArray("AKshay"));
console.log(Array.from("Akshay"));
console.log(Array.from({name: "Akshay"})); // interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));    
