// strings 
let str = "akshay";
// console.log(str); it will print the string - akshay    

// console.log(str[5]);
// str[5] ye 5 btata hai 6th character of that sentence








// Template literals- iska use aage bta rha hu ek example se 
// let specialstring = `this is a book of wood`;
// console.log(specialstring);

let obj = {
    item: "pencil",
    price: 100,
    brand: "Apsara",
};
console.log("the cost of the", obj.brand,"is", obj.price);
// ye dekhne mai bekar hai temp literal se behtar bnayenge isme price highlight hoga qki wo string se indp hai

let output = `the cost of the ${obj.brand} is ${obj.price}`;
console.log(output);
// isme price (number) highlight nhi hogi qki wo string mai hai




// sring interpolation- to create strings by doing substitution of placeholders
// `string text ${expression} string text `

// let specialstring = `this is a book of wood`{1+2+3-4};