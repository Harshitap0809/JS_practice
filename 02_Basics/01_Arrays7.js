// Let's Practice
// -------------------------------------------------------------------------------------------------------------------------

// 1. For a given array with marks of students -> [85,97,44,76,60]. Find the average marks of the entire class.

let marks = [85, 97, 44, 76, 60];
let totalsum = 0;

// Add each mark to the total
for (let value of marks) {
  totalsum = totalsum + value;
}

console.log(`total marks of the entire class is : ${totalsum}`);

// Calculate average marks
let avg = totalsum / marks.length;
console.log(`total average marks of the entire class is : ${avg}`);

// -------------------------------------------------------------------------------------------------------------------------

// 2. For a given array with prices of 5 items -> [250,645,300,900,50] 
// All items have an offer of 10% OFF on them. Change the array to store final price after applying the offer.

// Calculation example:
// Applying 10% off on 300 = 300/10 = 30/- off
// Final price = 300 - 30 = 270
// The updated array in this case value will turn out to be 270 after applying an offer of 10%.
// conclusion: The updated array value will reflect the discounted prices.

// SHOWING 2 WAYS TO SOLVE: 

// 1. Using 'for-of' loop (modify the for-in loop and track the index indirectly)
let items = [250, 645, 300, 900, 50];
let index = 0;

for (const value of items) {
  console.log(`value at index ${index} =  ${value}`);
  index++;
}

// 2. Using traditional 'for' loop (directly track the index)

// 1. Solving the question using 'for-in' loop
let items1 = [250, 645, 300, 900, 50];
let index1 = 0;

for (const value of items1) {
  console.log(`value at index ${index1} =  ${value}`);

  let offer = value / 10; // Calculate 10% discount
  items1[index1] = items1[index1] - offer; // Apply discount
  console.log(`value after offer = ${items1[index1]}`);

  index1++;
}
console.log(items1); // Final array after discount

// 2. Solving the question using traditional 'for' loop
let items2 = [250, 645, 300, 900, 50];

for (let index2 = 0; index2 < items2.length; index2++) {
  console.log(`value at ${index2} = ${items2[index2]}`);

  let offer = items2[index2] / 10; // Calculate 10% discount
  items2[index2] = items2[index2] - offer; // Apply discount
  console.log(`value after offer = ${items2[index2]}`);
}
console.log(items2); // Final array after discount

// -------------------------------------------------------------------------------------------------------------------------
