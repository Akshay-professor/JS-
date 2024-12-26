const user = new Object(); // this is singleton object 
const user2 = {}; // this is not ingleton object
console.log(user);
console.log(user2);

// ++++++++++++++++ JavaScript: Object Nesting and Assigning/Adding Nested Properties +++++++++++++

// 1. Create an object with nested properties
const company = {
    name: "Tech Solutions",
    location: "New York",
    departments: {
        engineering: {
            teamLead: "Alice",
            members: ["Bob", "Charlie", "David"],
        },
        hr: {
            teamLead: "Eve",
            members: ["Frank", "Grace"],
        },
    },
    established: 2010,
};

console.log(company);

// Explanation:
// - The `departments` property is a nested object.
// - Each department (e.g., `engineering`, `hr`) has its own properties and nested arrays.

// 2. Accessing Nested Properties
console.log(company.departments.engineering.teamLead); // Outputs: "Alice"
console.log(company.departments.hr.members[1]);       // Outputs: "Grace"

// Explanation:
// - Use dot notation to access nested properties.
// - Combine dot notation with array indexing to access specific elements in nested arrays.

// 3. Adding New Nested Properties
company.departments.sales = {
    teamLead: "Ivy",
    members: ["Jack", "Kate"],
};

// Explanation:
// - Adding a new `sales` department under the `departments` property.
// - This demonstrates how to assign new nested properties dynamically.

console.log(company.departments.sales);
// Outputs: { teamLead: "Ivy", members: ["Jack", "Kate"] }

// 4. Modifying Nested Properties
company.departments.engineering.members.push("Ethan");

// Explanation:
// - Using array methods (`push`) to add a new member to the `engineering.members` array.

console.log(company.departments.engineering.members);
// Outputs: ["Bob", "Charlie", "David", "Ethan"]

// 5. Deleting a Nested Property
delete company.departments.hr.teamLead;

// Explanation:
// - The `delete` operator removes the `teamLead` property from the `hr` department.

console.log(company.departments.hr);
// Outputs: { members: ["Frank", "Grace"] }

// Tricky Questions:
// 1. How would you dynamically add a nested property if the path doesn't exist?
// Answer:
// Use bracket notation and ensure intermediate objects are created dynamically:
let path = "departments.support.teamLead";
path.split('.').reduce((obj, key, index, array) => {
    return obj[key] ??= index === array.length - 1 ? "John" : {};
}, company);

console.log(company.departments.support);
// Outputs: { teamLead: "John" }

// 2. How do you safely access deeply nested properties without risking an error?
// Answer:
// Use optional chaining (`?.`):
console.log(company.departments.marketing?.teamLead);
// Outputs: undefined (does not throw an error if `marketing` doesn't exist)

// 3. Can you use a variable to access a nested property?
// Answer:
// Yes, use bracket notation with a variable:
let department = "engineering";
console.log(company.departments[department].teamLead);
// Outputs: "Alice"

// 4. How can you iterate over nested properties in an object?
// Answer:
// Use loops or recursion. Example:
for (const [dept, details] of Object.entries(company.departments)) {
    console.log(`${dept} Team Lead: ${details.teamLead || "Not Assigned"}`);
}
// Outputs:
// engineering Team Lead: Alice
// hr Team Lead: Not Assigned
// sales Team Lead: Ivy
// support Team Lead: John

// 5. How do you merge a nested object into another object?
// Answer:
// 1. Use the spread operator or `Object.assign()`:
const newDepartment = {
    training: {
        teamLead: "Olivia",
        members: ["Paul", "Quincy"],
    },
};

Object.assign(company.departments, newDepartment);

console.log(company.departments.training);
// Outputs: { teamLead: "Olivia", members: ["Paul", "Quincy"] }

// 2. (...) 
// he spread operator allows us to "spread" the properties of one object into another.
// This is a very clean and easy way to merge objects.

const company2 = {
    name: "Tech Solutions",
    location: "New York",
};

const newDepartment2 = {
    engineering: {
        teamLead: "Alice",
        members: ["Bob", "Charlie"],
    },
};

// Merging the `newDepartment` object into `company` using spread operator
const updatedCompany = { ...company2, ...newDepartment2 };

console.log(updatedCompany);
