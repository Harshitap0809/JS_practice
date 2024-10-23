// ###############################################################
// Looping Over Arrays in JavaScript with Detailed Explanations
// Scenario: Building a Product Listing Page for an E-Commerce Website
// We'll use different loops to display product details, stock levels,
// handle shopping cart functionality, and show dynamic banners.
// ###############################################################

// 1. Traditional `for` Loop
// --------------------------------------------
// Use Case: Use a `for` loop when you need to access both the index and value of the array elements
// and when you need complete control over the loop iteration (e.g., for conditionally modifying elements).
// 
// Scenario: You are displaying a list of products and updating the stock when an item is purchased.
// Here, the index helps to find the corresponding stock level for each product.
//
// When to Use: When you need both index and value, especially for cases like updating, deleting, or accessing elements at a specific index.
let products = ["Laptop", "Phone", "Tablet"];
let stock = [10, 5, 8];

console.log("Using Traditional for Loop:");
for (let i = 0; i < products.length; i++) {
  console.log(`${products[i]}: ${stock[i]} left`);
  
  // Example: Decrease stock of the second product (Phone) after it's purchased
  if (i === 1) {
    stock[i] -= 1;  // Decrease stock for "Phone"
  }
}
// Output:
// Laptop: 10 left
// Phone: 5 left
// Tablet: 8 left
// (Phone stock decreased in code, but reflected in next iteration)
// --------------------------------------------


// 2. `for...of` Loop
// --------------------------------------------
// Use Case: Use `for...of` to loop through the values of an array when you don't need the index or to modify the elements.
// 
// Scenario: You are building a product listing page where you only need to display product names without modifying or tracking their stock or index.
// 
// When to Use: When you only need to access the values of an array and don't care about the index or making changes to the array.
console.log("\nUsing for...of Loop:");
for (let product of products) {
  console.log(`Product: ${product}`);
}
// Output:
// Product: Laptop
// Product: Phone
// Product: Tablet
// --------------------------------------------


// 3. `forEach` Method
// --------------------------------------------
// Use Case: Use `forEach` when you need to access both the value and the index but don't need to break out of the loop early or modify the array.
// 
// Scenario: You want to display product names along with their stock on a product page. It's important to show both the index (to match stock) and value (product name), but there's no need to modify the array.
// 
// When to Use: When you need both the value and index but won't modify the array or need to break the loop early.
console.log("\nUsing forEach Method:");
products.forEach((product, index) => {
  console.log(`Product: ${product}, Stock: ${stock[index]}`);
});
// Output:
// Product: Laptop, Stock: 10
// Product: Phone, Stock: 4
// Product: Tablet, Stock: 8
// --------------------------------------------


// 4. `for...in` Loop
// --------------------------------------------
// Use Case: Use `for...in` when you need to iterate over the properties of an object, particularly key-value pairs.
// 
// Scenario: You are working with a shopping cart where each product is a key and the quantity in the cart is the value. 
// You want to list the products and how many of each the user has added to their cart.
// 
// When to Use: When you want to loop over object properties like key-value pairs (e.g., cart items and their quantities).
let cart = {
  Laptop: 1,
  Phone: 2,
  Tablet: 1
};

console.log("\nUsing for...in Loop:");
for (let product in cart) {
  console.log(`Product: ${product}, Quantity: ${cart[product]}`);
}
// Output:
// Product: Laptop, Quantity: 1
// Product: Phone, Quantity: 2
// Product: Tablet, Quantity: 1
// --------------------------------------------


// 5. `while` Loop
// --------------------------------------------
// Use Case: Use a `while` loop when you want to repeat a task as long as a condition is true.
// 
// Scenario: You are managing product stock levels, and you want to keep selling items until the stock reaches zero. This loop will dynamically decrease stock as long as the condition is met.
// 
// When to Use: When the number of iterations is not known in advance, and you want to repeat a task until a certain condition is no longer true.
let availableStock = 5;

console.log("\nUsing while Loop:");
while (availableStock > 0) {
  console.log(`Stock available: ${availableStock}`);
  
  // Hypothetical purchase action
  availableStock--; // Decrease stock after each purchase
}
// Output:
// Stock available: 5
// Stock available: 4
// Stock available: 3
// Stock available: 2
// Stock available: 1
// --------------------------------------------


// 6. `do...while` Loop
// --------------------------------------------
// Use Case: Use a `do...while` loop when you want to ensure that the loop runs at least once, even if the condition is false.
// 
// Scenario: You are showing a promotional banner for a discount on your e-commerce site. You want the banner to be displayed at least once, even if the user dismisses it right after.
// 
// When to Use: When you want to guarantee at least one execution of the loop, regardless of the condition.
let showBanner = true;
let timesDisplayed = 0;

console.log("\nUsing do...while Loop:");
do {
  console.log("Displaying special discount banner!");
  timesDisplayed++;
  
  // Hypothetical condition where user closes banner after it's shown once
  if (timesDisplayed === 1) {
    showBanner = false; // User closed the banner
  }
} while (showBanner);
// Output:
// Displaying special discount banner!
// --------------------------------------------
