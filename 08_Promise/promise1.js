// Step 1: Create a promise using the Promise constructor
// The Promise constructor takes a function (called executor function) as an argument.
// The executor function has two parameters: resolve and reject.
const promiseOne = new Promise(function(resolve, reject) {

    // Step 2: Simulate an asynchronous task using setTimeout
    // setTimeout() is used here to mimic a task that takes time, like a DB call or an API request.
    setTimeout(function() {
        console.log('Async task is complete'); // Logs when the task is done.
        
        // Step 3: Call resolve() to mark the promise as fulfilled
        // If this line is not called, the promise will remain in a pending state forever.
        resolve();
    }, 1000); // 1000ms = 1 second
});

// Step 4: Consuming the promise using .then()
// The .then() method is used to attach a callback that will execute when the promise is resolved.
promiseOne.then(function() {
    console.log("Promise completed/consumed"); // Logs after the promise is resolved.
});

// --- Execution Process ---
// 1. The promise is created and starts executing the executor function immediately.
// 2. setTimeout() is triggered but does not block the main thread. It registers a callback to execute after 1 second.
// 3. After 1 second, the callback inside setTimeout() executes:
//    - Logs "Async task is complete".
//    - Calls resolve(), signaling that the promise is now fulfilled.
// 4. The .then() method, which was waiting for the promise to resolve, runs its callback:
//    - Logs "Promise completed/consumed".

// --- Output Order ---
// After 1 second: "Async task is complete"
// Immediately after that: "Promise completed/consumed"

// --- What Happens if resolve() is Not Called? ---
// If resolve() is not called:
// 1. The promise will remain in the "pending" state forever.
// 2. The .then() callback will never execute because it only runs when the promise is resolved.
// 3. This can cause the program to behave unexpectedly, as it may wait indefinitely for the promise to complete.

// Example: Forgetting resolve()
const promiseWithoutResolve = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task is complete, but resolve() is not called');
        // Missing resolve() here
    }, 1000);
});

promiseWithoutResolve.then(function() {
    console.log("This will never log because resolve() was not called.");
});

// --- Use Cases for Promises ---
// Promises are useful when working with asynchronous operations like:
// 1. Fetching data from a server (API calls).
// 2. Performing database queries.
// 3. Reading files from disk.
// 4. Cryptographic operations or heavy computations in the background.

// --- Real-World Example: Fetching User Data ---
const getUserData = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // Simulate fetched user data
        const user = { id: 1, name: 'John Doe' };
        resolve(user); // Resolving the promise with user data
    }, 1000); // Simulated delay
});

// Consuming the promise with .then()
getUserData.then(function(user) {
    console.log('User data:', user); // Logs: User data: { id: 1, name: 'John Doe' }
});

// --- Explanation of resolve() ---
// The resolve() function:
// 1. Changes the state of the promise from "pending" to "fulfilled".
// 2. Passes a value (if provided) to the .then() callback.
//    Example: resolve(user) passes the user object to the .then() callback.

// --- What Happens If resolve() Is Called Multiple Times? ---
// A promise can only be resolved (or rejected) once.
// Any subsequent calls to resolve() or reject() will have no effect.
// Example:
const singleResolvePromise = new Promise(function(resolve, reject) {
    resolve('First resolve'); // This works
    resolve('Second resolve'); // This has no effect
});

singleResolvePromise.then(function(value) {
    console.log(value); // Logs: "First resolve" (only the first resolve matters)
});

// *************** Another way of creating this function promise. ******************

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    }, 1000)
}).then(function(){    // here we just excuted the promise consumed intead of making 
    // another function.
    console.log("async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
     resolve({username: "Chai", email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
       console.log(user); // user paas krao ya aam paas krao print whi hoga jo resove ke andar hai 
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
         if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
    })

    promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(() => 
    console.log("promise is either resolved or rejected")
    );


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        setTimeout(function() {
            let error = true
             if (!error) {
                resolve({username: "Akshay", password: "123"})
            } else {
                reject('ERROR: Akshay went wrong :)')
            }
        }, 1000)
    })
}) 

async function consumePromiseFive (){
     try {
        const response = await promiseFive
        console.log(response);
     } catch (error) {
        console.log(error);  
     }
}

consumePromiseFive()

async function getAllusers(){
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json() 
    
    // yha pe pehle maine await nhi diya tha jiski wjh se 
    // code execute{ mtlb json mai convert hone mai time lg rha tha} hone mai time lg rha tha aur response pending aa rha tha
    // now await add krne se code wait krega uar data aane ke baad 
    // log kr dega

    console.log(data);
} catch (error) {
    console.log(error);
}   
}
getAllusers()

// ab mai dusre trike se fetch krna btata hu

// **Notes on Using Promises with Fetch in Two Ways**

// **1. Using `then` and `catch` on the Promise:**
// This is the traditional way of handling Promises by chaining methods.
// Example:
fetch('https://jsonplaceholder.typicode.com/posts/1') // Fetch API call to get a post.
  .then(function(response) { // Handles the response from the fetch.
    if (!response.ok) { // Checks if the response is successful.
      throw new Error(`HTTP error! Status: ${response.status}`); // Throws error for non-200 status.
    }
    return response.json(); // Converts the response into JSON.
  })
  .then(function(data) { // Handles the JSON data.
    console.log("Data fetched successfully:", data); // Logs the data to the console.
  })
  .catch(function(error) { // Catches any error during fetch or in the `then` blocks.
    console.error("Error fetching data:", error.message); // Logs the error to the console.
  });

// **Key Points:**
// - `then` is used to process the resolved value of the promise (response in this case).
// - `catch` is used to handle any errors that occur during the fetch or in `then` chains.

// **Output Example:**
// Data fetched successfully: {userId: 1, id: 1, title: "...", body: "..."}
// OR
// Error fetching data: HTTP error! Status: 404

// **2. Using `async` and `try-catch`:**

//  jo upar kiya hai ditto waisa hi hai

// A modern and cleaner way to handle Promises in an async function.
// Example:
async function fetchPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Fetch API call.
    if (!response.ok) { // Checks if the response is successful.
      throw new Error(`HTTP error! Status: ${response.status}`); // Throws error for non-200 status.
    }
    const data = await response.json(); // Converts the response into JSON.
    console.log("Data fetched successfully:", data); // Logs the data to the console.
  } catch (error) { // Catches any error during fetch or JSON conversion.
    console.error("Error fetching data:", error.message); // Logs the error to the console.
  }
}
fetchPost(); // Calls the async function.

// **Key Points:**
// - `async` makes a function return a Promise.
// - `await` pauses the execution until the Promise is resolved.
// - Errors are caught using a `try-catch` block, making error handling easier.

// **Output Example:**
// Data fetched successfully: {userId: 1, id: 1, title: "...", body: "..."}
// OR
// Error fetching data: HTTP error! Status: 404

// **Comparison Between `then-catch` and `async-await`:**
// 1. `then-catch`:
//    - Explicit chaining of methods (then, catch).
//    - Slightly more verbose and can become harder to read with complex logic.
//    - Useful when you want to handle individual Promises separately.

// 2. `async-await`:
//    - Cleaner and more readable for sequential operations.
//    - Error handling is centralized in the `try-catch` block.
//    - Preferred for complex asynchronous workflows with multiple dependent operations.

 