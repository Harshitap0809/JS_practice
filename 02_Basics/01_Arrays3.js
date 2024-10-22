// #######################################################
// Arrays practice code from APNA_COLLEGE
// #######################################################

// Arrays in JS are collections of items

// #######################################################
// Difference between using arrays vs using objects
// Use arrays when order matters or when you are working with a collection of items that will be iterated by index.
// Use objects when you need to map key-value pairs or when dealing with named properties that don’t require a specific order.

// Example: Array to store product IDs
let productIDs = [101, 102, 103]; // Array of product IDs

// Access the first product ID
console.log(productIDs[0]); // Output: 101

// Loop through all product IDs
productIDs.forEach((id) => console.log(`Product ID: ${id}`));

// #######################################################

// Example: Object to store product information
let productInfo = {
  101: { name: "Laptop", price: 50000, quantity: 10 },
  102: { name: "Phone", price: 30000, quantity: 5 },
};

// Access product info by ID
console.log(productInfo[101].name); // Output: Laptop

// Update product quantity
productInfo[101].quantity -= 1;
console.log(productInfo[101].quantity); // Output: 9

// #######################################################
// CONCLUSION: Arrays vs Objects
// Use an array when:
// - Order matters, such as displaying reviews in the order they were received.
// - You don’t need named keys; simple indexing works.
// - Iteration is required, so an array is ideal.

// Use an object when:
// - Named properties make the data more meaningful (e.g., name, price).
// - You need direct access to values by key (product.name).
// - Order doesn’t matter, only the correct key-value pair matters.

// #######################################################

// Example of array mutability
let arr = [1, 2, 3, 4]; // Initial array

// Modifying the value at index 2
arr[2] = 10; // Changing value at index 2 from 3 to 10

console.log(arr); 
// Output: [1, 2, 10, 4]
// Arrays are mutable, so you can directly change the elements at any index

// #######################################################

// Example of string immutability
let str = "hello"; // Initial string

// Attempting to modify the value at index 1
str[1] = "a"; // Trying to change 'e' to 'a'

console.log(str); 
// Output: "hello"
// Strings are immutable, so trying to change the character at a specific index does not work

// The only way to "change" a string is to create a new string
let newStr = str.slice(0, 1) + "a" + str.slice(2);

console.log(newStr); 
// Output: "hallo"
// To modify a string, you need to create a new string with the desired changes

// #######################################################
// CONCLUSION:
// Strings are immutable, meaning you cannot directly modify them.
// The solution is to extract parts of the original string, make the changes, and combine them to create a new string.
