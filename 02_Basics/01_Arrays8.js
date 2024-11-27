
// ==========================
// Array Methods Demonstration
// ==========================

// ==========================
// 1. push() : Add to end
// ==========================

// Initialize an array with food items
let foodArray = ["chips", "cheese", "bread", "paneer"];
console.log("Initial foodArray:", foodArray); 
// Output: Initial foodArray: [ 'chips', 'cheese', 'bread', 'paneer' ]

// Mutates the original array by adding items
foodArray.push("milk", "onion", "corn-flour");
console.log("After push:", foodArray); 
// Output: After push: [ 'chips', 'cheese', 'bread', 'paneer', 'milk', 'onion', 'corn-flour' ]

// Returns the new length of the array
let updatedLength = foodArray.push("lettuce");
console.log("New length:", updatedLength); 
// Output: New length: 8

// Can accept multiple arguments
foodArray.push("tomato", "cucumber");
console.log("After pushing more items:", foodArray); 
// Output: After pushing more items: [ 'chips', 'cheese', 'bread', 'paneer', 'milk', 'onion', 'corn-flour', 'lettuce', 'tomato', 'cucumber' ]

// Handles different data types
foodArray.push(42, { item: "apple" });
console.log("After pushing different types:", foodArray); 
// Output: After pushing different types: 
// [ 'chips', 'cheese', 'bread', 'paneer', 'milk', 'onion', 'corn-flour', 
//   'lettuce', 'tomato', 'cucumber', 42, { item: 'apple' } ]

// Can push `undefined`
foodArray.push(undefined);
console.log("After pushing undefined:", foodArray); 
// Output: After pushing undefined: 
// [ 'chips', 'cheese', 'bread', 'paneer', 'milk', 'onion', 'corn-flour', 
//   'lettuce', 'tomato', 'cucumber', 42, { item: 'apple' }, undefined ]

// Use in loops to add items
let additionalItems = ["carrot", "spinach"];
additionalItems.forEach(item => foodArray.push(item));
console.log("After pushing items in a loop:", foodArray); 
// Output: After pushing items in a loop: 
// [ 'chips', 'cheese', 'bread', 'paneer', 'milk', 'onion', 'corn-flour', 
//   'lettuce', 'tomato', 'cucumber', 42, { item: 'apple' }, undefined, 
//   'carrot', 'spinach' ]


// ==========================
// 2. pop() : Delete from end & return
// ==========================

// Initialize an array of fruits
let fruitArray = ["apple", "banana"];
console.log("Initial fruitArray:", fruitArray); 
// Output: Initial fruitArray: [ 'apple', 'banana' ]

// Use push() to add a single element
fruitArray.push("orange");
console.log("After push('orange'):", fruitArray); 
// Output: After push('orange'): [ 'apple', 'banana', 'orange' ]

// Use push() to add multiple elements
fruitArray.push("grape", "kiwi");
console.log("After push('grape', 'kiwi'):", fruitArray); 
// Output: After push('grape', 'kiwi'): [ 'apple', 'banana', 'orange', 'grape', 'kiwi' ]

// Pushing different data types
let mixedArray = [1, "two", true];
mixedArray.push(null, { key: "value" });
console.log("Mixed array after push:", mixedArray); 
// Output: Mixed array after push: [ 1, 'two', true, null, { key: 'value' } ]

// Push on an empty array
let emptyArray = [];
emptyArray.push(1);
console.log("Empty array after push(1):", emptyArray); 
// Output: Empty array after push(1): [ 1 ]


// ==========================
// 3. toString() : Converts array to string
// ==========================

// Initialize an array of colors
let colorArray = ["red", "green", "blue"];
let colorString = colorArray.toString();
console.log("Array as string:", colorString); 
// Output: Array as string: red,green,blue

// Handle nested arrays
let nestedArray = [1, 2, [3, 4], 5];
console.log("Nested array as string:", nestedArray.toString()); 
// Output: Nested array as string: 1,2,3



// ==========================
// 4. concat() : Merge Arrays
// ==========================

// Initialize two arrays
let firstArray = ["a", "b", "c"];
let secondArray = ["d", "e", "f"];
console.log("Initial firstArray:", firstArray); 
// Output: Initial firstArray: [ 'a', 'b', 'c' ]
console.log("Initial secondArray:", secondArray); 
// Output: Initial secondArray: [ 'd', 'e', 'f' ]

// Use concat() to merge arrays
let mergedArray = firstArray.concat(secondArray);
console.log("Merged array:", mergedArray); 
// Output: Merged array: [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// Concat with multiple arrays
let thirdArray = ["g", "h"];
let combinedArray = firstArray.concat(secondArray, thirdArray);
console.log("Combined array:", combinedArray); 
// Output: Combined array: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]

// Concat with different data types
let mixedConcatArray = firstArray.concat(42, { key: "value" });
console.log("Mixed array after concat:", mixedConcatArray); 
// Output: Mixed array after concat: [ 'a', 'b', 'c', 42, { key: 'value' } ]


// ==========================
// 5. unshift() : Add to Beginning
// ==========================

// Initialize an array of numbers
let numberArray = [2, 3, 4];
console.log("Initial numberArray:", numberArray); 
// Output: Initial numberArray: [ 2, 3, 4 ]

// Use unshift() to add elements to the beginning
numberArray.unshift(1);
console.log("After unshift(1):", numberArray); 
// Output: After unshift(1): [ 1, 2, 3, 4 ]

// Unshift multiple elements
numberArray.unshift(-1, 0);
console.log("After unshift(-1, 0):", numberArray); 
// Output: After unshift(-1, 0): [ -1, 0, 1, 2, 3, 4 ]

// Unshift different data types
numberArray.unshift("start", null);
console.log("After unshift('start', null):", numberArray); 
// Output: After unshift('start', null): [ 'start', null, -1, 0, 1, 2, 3, 4 ]


// ==========================
// 6. shift() : Remove from Beginning & Return
// ==========================

// Initialize an array of fruits
let fruitList = ["apple", "banana", "cherry"];
console.log("Initial fruitList:", fruitList); 
// Output: Initial fruitList: [ 'apple', 'banana', 'cherry' ]

// Use shift() to remove the first element
let removedFruit = fruitList.shift();
console.log("Removed fruit:", removedFruit); 
// Output: Removed fruit: apple
console.log("After shift:", fruitList); 
// Output: After shift: [ 'banana', 'cherry' ]

// Shift again
let secondRemovedFruit = fruitList.shift();
console.log("Removed fruit:", secondRemovedFruit); 
// Output: Removed fruit: banana
console.log("After another shift:", fruitList); 
// Output: After another shift: [ 'cherry' ]

// Shift from a single-element array
fruitList.shift();
console.log("After shifting the last element:", fruitList); 
// Output: After shifting the last element: [ ]

// Shift from an empty array
let emptyList = [];
let removedFromEmptyList = emptyList.shift();
console.log("Removed from empty array:", removedFromEmptyList); 
// Output: Removed from empty array: undefined
console.log("After shift on empty array:", emptyList); 
// Output: After shift on empty array: [ ]

// ==========================
// 7. slice() : Extract and return a portion of an array
//  slice syntax : slice( startIdx, endIdx )
// ==========================

// Initialize an array of vegetables
let vegArray = ["carrot", "potato", "tomato", "onion", "spinach"];
console.log("Initial vegArray:", vegArray);
// Output: Initial vegArray: [ 'carrot', 'potato', 'tomato', 'onion', 'spinach' ]

// Use slice() to extract a portion of the array
let slicedArray = vegArray.slice(1, 3);
console.log("Sliced array (1, 3):", slicedArray);
// Output: Sliced array (1, 3): [ 'potato', 'tomato' ]

// Slice without specifying endIdx (extract till end)
let slicedToEnd = vegArray.slice(2);
console.log("Sliced from index 2:", slicedToEnd);
// Output: Sliced from index 2: [ 'tomato', 'onion', 'spinach' ]

// Slice with negative indices
let slicedNegative = vegArray.slice(-3, -1);
console.log("Sliced with negative indices (-3, -1):", slicedNegative);
// Output: Sliced with negative indices (-3, -1): [ 'tomato', 'onion' ]

// Original array remains unchanged
console.log("After slice, original array:", vegArray);
// Output: After slice, original array: [ 'carrot', 'potato', 'tomato', 'onion', 'spinach' ]


// ==========================
// 8. splice() : Modify original array (add, remove, or replace)
// syntax : splice( startIdx, delCount, newElm...)
// ==========================

// Initialize an array of fruits
let fruitBasket = ["apple", "banana", "cherry", "date"];
console.log("Initial fruitBasket:", fruitBasket);
// Output: Initial fruitBasket: [ 'apple', 'banana', 'cherry', 'date' ]

// Use splice() to remove elements
let removedFruits = fruitBasket.splice(1, 2); // Remove 2 elements starting at index 1
console.log("Removed fruits:", removedFruits);
// Output: Removed fruits: [ 'banana', 'cherry' ]
console.log("After removing fruits:", fruitBasket);
// Output: After removing fruits: [ 'apple', 'date' ]

// Use splice() to add elements
fruitBasket.splice(1, 0, "blueberry", "grape"); // Add at index 1 without removing
console.log("After adding fruits:", fruitBasket);
// Output: After adding fruits: [ 'apple', 'blueberry', 'grape', 'date' ]

// Use splice() to replace elements
fruitBasket.splice(2, 1, "kiwi"); // Replace 1 element at index 2
console.log("After replacing an element:", fruitBasket);
// Output: After replacing an element: [ 'apple', 'blueberry', 'kiwi', 'date' ]

// Use splice() to clear all elements
fruitBasket.splice(0, fruitBasket.length);
console.log("After clearing all elements:", fruitBasket);
// Output: After clearing all elements: []
