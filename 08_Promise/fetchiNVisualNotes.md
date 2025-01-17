

---

This diagram explains how the `fetch()` API works and handles responses in JavaScript. 
fetch('https://api.example.com/data')  
├── Request Sent  
│       └── Web Browser Handles the Request  
├── Response Received  
│       ├── HTTP Status = 200-299  
│       │       └── Process JSON Data  
│       └── HTTP Status != 200-299  
│               └── Handle HTTP Error  
└── Network Error (e.g., No Internet)  
        └── Catch Block Handles Error  

Fetch rejects only on network errors, not on HTTP errors.

### **Fetch API Working**

1. **`response = fetch('something')`**  
   - `fetch()` ek asynchronous function hai jo ek promise return karta hai.  
   - Ye browser ya Node.js ke through ek network request bhejta hai.  

2. **Steps in the Fetch Process**:  
   - **Web Browser/Node.js**: Request network ke through server tak jaata hai.  
   - **Network Response**:  
     - Agar **network error** ho (e.g., internet nahi hai), to fetch ka promise reject hoga.  
     - Agar **HTTP error** ho (e.g., 404 Not Found), to promise resolve karega par response me `ok` false hoga.  

3. **Promise Handling**:  
   - Promise ke `then()` me response handle karte hain.  
   - Agar HTTP error ho, to `response.ok` ko check karna zaroori hai.  
   - `onFulfilled` (then) me data milta hai.  
   - `onRejection` (catch) tab hota hai jab network error ho.  

4. **404 Error Flow**:  
   - HTTP errors like `404` promise ko reject nahi karte.  
   - Aapko khud manually `response.ok` check karke error handle karna padta hai.  

5. **Global Memory**:  
   - Fetch ke promise ko global memory manage karta hai aur asynchronous task complete hone ke baad hi response milta hai.  

### **Key Takeaways**

- HTTP errors (404, 500) ke liye promise reject nahi hoga; hume manually check karna padta hai.  
- Network errors par promise reject hota hai, aur catch block execute hota hai.  

Agar 404 not found aaya hai iska mtlb hai network ko request gyi hai tbhi to pata chla hai ki not found aaya hai to iss case mai data onfulfilled[] mai hi mana jayega.
