// Shopping cart with product name, price, and quantity
let cart = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Phone", price: 500, quantity: 1 },
  { name: "Tablet", price: 300, quantity: 3 },
  { name: "Headphones", price: 100, quantity: 0 }, // Out of stock
  { name: "Chappal", price: 1000, quantity: 4 },
];

console.log("Shopping Cart Details:");

// Variable to keep track of the total price of all items
let totalCartPrice = 0;

for (let i = 0; i < cart.length; i++) {
  let item = cart[i];

  // Skip the item if the quantity is 0 (out of stock)
  if (item.quantity === 0) {
    console.log(`${item.name} is out of stock, skipping...`);
    continue; // Skip this item and move to the next one
  }

  // Calculate total price for the current item
  let totalPrice = item.price * item.quantity;

  // Check if adding the current item's price exceeds the limit
  if (totalCartPrice + totalPrice > 1500) {
    console.log(`Total price of ${item.name} exceeds $1500, stopping...`);
    break; // Stop the loop
  }

  // Print the item details
  console.log(`Item ${i + 1}: ${item.name}`);
  console.log(`   Price: $${item.price}`);
  console.log(`   Quantity: ${item.quantity}`);

  // Update the cumulative total cart price
  totalCartPrice += totalPrice;

  // Update quantity if the user adds another of the same item
  if (item.name === "Phone") {
    cart[i].quantity += 1; // User added another phone
    console.log(`Updated Quantity of ${item.name}: ${cart[i].quantity}`);
  }
}


// Creates a Persistent Variable: Declaring let totalCartPrice = 0; 
// outside the loop creates a single variable that the code can keep updating throughout the entire loop.
// This means that each time an item is processed, the variable doesn't reset—instead, it keeps adding the prices up, 
// helping track the total price across all items.