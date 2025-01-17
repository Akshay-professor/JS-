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

// **Understanding Fetch Rejection and HTTP Error Handling**

// **Key Concept:**
// - The `fetch()` Promise only rejects when a network error occurs (e.g., no internet connection or permissions issue).
// - HTTP errors like 404 (Not Found) or 500 (Server Error) do NOT cause the Promise to reject.
// - Instead, you need to manually check the `Response.ok` or `Response.status` properties inside the `then()` handler to handle these HTTP errors.

// **Example 1: Fetch Without HTTP Error Handling**
fetch('https://jsonplaceholder.typicode.com/posts/invalid-endpoint') // Non-existent endpoint
  .then(function(response) {
    console.log("Response received:", response);
    return response.json();
  })
  .then(function(data) {
    console.log("Data received:", data);
  })
  .catch(function(error) {
    console.error("Network error occurred:", error);
  });

// **Explanation:**
// - The above code makes a fetch call to an invalid endpoint.
// - The `catch` block will NOT run because the fetch Promise doesn't reject on HTTP errors like 404.
// - Instead, the `then` block will execute, and you’ll need to manually check the HTTP response status.

// **Output Example:**
// Response received: Response {type: 'cors', ok: false, status: 404, ...}
// Uncaught (in promise) SyntaxError: Unexpected end of JSON input

// **Example 2: Fetch With Proper HTTP Error Handling**
fetch('https://jsonplaceholder.typicode.com/posts/invalid-endpoint') // Non-existent endpoint
  .then(function(response) {
    if (!response.ok) { // Checks if the response status is not OK (200–299)
      throw new Error(`HTTP error! Status: ${response.status}`); // Manually throw an error
    }
    return response.json();
  })
  .then(function(data) {
    console.log("Data received:", data);
  })
  .catch(function(error) {
    console.error("Error occurred:", error.message); // Logs any network or HTTP error
  });

// **Explanation:**
// 1. Fetch promise kabhi bhi HTTP errors (jaise 404, 500) ke liye reject nahi hota hai.
// 2. Agar network issue ho, tabhi fetch ka promise reject karega.
// 3. HTTP errors ko handle karne ke liye hume `response.ok` ya `response.status` ko check karna padta hai.
// 4. Agar `response.ok` false hai, toh hume khud error throw karna padta hai.

// **Output Example:**
// If URL returns 404:
// Error during fetch: HTTP error! Status: 404

// If URL is valid:
// Data fetched successfully: { ...data... }