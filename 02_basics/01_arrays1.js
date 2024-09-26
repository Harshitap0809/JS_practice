// [] - square brackets , () - parentheses , {} - curly braces

//----------------------------------------------------------------------------------------------------------------------------------------------------------
// In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:
//----------------------------------------------------------------------------------------------------------------------------------------------------------

// 1. JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

// 1. Resizable Arrays in JavaScript:
let arr = []; // Empty array
console.log(arr.length); // Output: 0

arr.push(10); // Add a number
arr.push("hello"); // Add a string
arr.push(true); // Add a boolean
console.log(arr); // Output: [10, "hello", true]
console.log(arr.length); // Output: 3

arr.pop(); // Remove the last element
console.log(arr); // Output: [10, "hello"]
console.log(arr.length); // Output: 2

/////////////////////////////////////////////////////////

// 2. Arrays with Mixed Data Types:
let mixedArray = [42, "JavaScript", { name: "Alice" }, [1, 2, 3], true];
console.log(mixedArray); 
// Output: 
// [
//   42, 
//   "JavaScript", 
//   { name: "Alice" }, 
//   [1, 2, 3], 
//   true
// ]

/////////////////////////////////////////////////////////

// 3. Typed Arrays in JavaScript (When Fixed Types and Sizes Are Needed):
let intArray = new Int8Array(5); // A typed array of 5 elements, all initialized to 0
console.log(intArray); // Output: Int8Array(5) [ 0, 0, 0, 0, 0 ]

intArray[0] = 10;
intArray[1] = 20;
console.log(intArray); // Output: Int8Array(5) [ 10, 20, 0, 0, 0 ]

intArray[2] = "hello"; // Adding a string won't work in a typed array
console.log(intArray); // Output: Int8Array(5) [ 10, 20, 0, 0, 0 ]

/////////////////////////////////////////////////////////

// Summary:
// Regular JavaScript Arrays are flexible: they can grow, shrink, and hold any mix of data types (numbers, strings, objects, arrays, etc.).
// Typed Arrays are more efficient for handling large collections of the same data type (like numbers) and offer better performance for numerical computations but have a fixed size and data type.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. JavaScript arrays are not associative arrays. Array elements must be accessed using nonnegative integers, not arbitrary strings as indexes.

/////////////////////////////////////////////////////////

// Example 1: Accessing array elements using nonnegative integers (correct way)
let fruits1 = ["Apple", "Banana", "Mango"];
console.log(fruits1[0]); // Output: Apple
console.log(fruits1[1]); // Output: Banana
console.log(fruits1[2]); // Output: Mango

/////////////////////////////////////////////////////////

// Example 2: Using string as index (treated as an object property, not an array element)
let fruits2 = ["Apple", "Banana", "Mango"];
fruits2["color"] = "Yellow";

console.log(fruits2[0]); // Output: Apple
console.log(fruits2["color"]); // Output: Yellow
console.log(fruits2.length); // Output: 3

/////////////////////////////////////////////////////////

// Example 3: Trying to access elements with string indexes (not valid for arrays)
let fruits3 = ["Apple", "Banana", "Mango"];
console.log(fruits3["one"]); // Output: undefined

/////////////////////////////////////////////////////////

// Example 4: Using object properties instead of arrays (correct for associative indexing)
let fruitColors = {
    apple: "red",
    banana: "yellow",
    mango: "orange"
};
console.log(fruitColors["apple"]);  // Output: red
console.log(fruitColors["banana"]);  // Output: yellow

/////////////////////////////////////////////////////////

// Summary: 
// JavaScript arrays use nonnegative integers as indexes.
// If you try to use a string as an index, it will be treated as an object property and will not affect the array's structure or length.
// If you need string-based indexing, consider using objects, not arrays.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. JavaScript arrays are zero-indexed: the first element of an array is at index 0, and the last element is at the value of the array's length property minus 1.

/////////////////////////////////////////////////////////

// 1. Accessing Elements by Index
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits[0]); // Output: "Apple"
console.log(fruits[1]); // Output: "Banana"
console.log(fruits[2]); // Output: "Mango"
console.log(fruits[fruits.length - 1]); // Output: "Orange"

/////////////////////////////////////////////////////////

// 2. Modifying Elements
let colors = ["Red", "Green", "Blue"];
colors[0] = "Yellow"; // Modify first element
colors[colors.length - 1] = "Purple"; // Modify last element
console.log(colors); // Output: ["Yellow", "Green", "Purple"]

/////////////////////////////////////////////////////////

// 3. Looping Through an Array
let numbers = [10, 20, 30, 40];
for (let i = 0; i < numbers.length; i++) {
    console.log("Element at index", i, "is", numbers[i]);
}
// Output: 
// Element at index 0 is 10
// Element at index 1 is 20
// Element at index 2 is 30
// Element at index 3 is 40

/////////////////////////////////////////////////////////

// 4. Handling Empty Arrays
let emptyArray = [];
console.log(emptyArray[0]); // Output: undefined
console.log(emptyArray[emptyArray.length - 1]); // Output: undefined

/////////////////////////////////////////////////////////

// 5. Negative Indexing (Not in Arrays by Default)
let languages = ["JavaScript", "Python", "Java"];
console.log(languages[-1]); // Output: undefined

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. JavaScript array-copy operations create shallow copies.

/////////////////////////////////////////////////////////

// 1. Copying an array of primitive values (shallow copy)
let originalArray1 = [1, 2, 3];
let copiedArray1 = [...originalArray1]; // Shallow copy
copiedArray1[0] = 10;

console.log("Original Array 1:", originalArray1); // Output: [1, 2, 3]
console.log("Copied Array 1:", copiedArray1); // Output: [10, 2, 3]

/////////////////////////////////////////////////////////

// 2. Copying an array with nested objects (shallow copy)
let originalArray2 = [{ name: "Alice" }, { name: "Bob" }];
let copiedArray2 = [...originalArray2]; // Shallow copy
copiedArray2[0].name = "Charlie";

console.log("Original Array 2:", originalArray2); // Output: [{ name: "Charlie" }, { name: "Bob" }]
console.log("Copied Array 2:", copiedArray2); // Output: [{ name: "Charlie" }, { name: "Bob" }]

/////////////////////////////////////////////////////////

// 3. Copying a simple object (shallow copy)
let originalObject1 = { a: 1, b: 2 };
let copiedObject1 = { ...originalObject1 }; // Shallow copy
copiedObject1.a = 10;

console.log("Original Object 1:", originalObject1); // Output: { a: 1, b: 2 }
console.log("Copied Object 1:", copiedObject1); // Output: { a: 10, b: 2 }

/////////////////////////////////////////////////////////

// 4. Copying a nested object (shallow copy)
let originalObject2 = { name: "Alice", address: { city: "Wonderland" } };
let copiedObject2 = { ...originalObject2 }; // Shallow copy
copiedObject2.address.city = "New York";

console.log("Original Object 2:", originalObject2); // Output: { name: "Alice", address: { city: "New York" } }
console.log("Copied Object 2:", copiedObject2); // Output: { name: "Alice", address: { city: "New York" } }

/////////////////////////////////////////////////////////

// 5. Using Array.slice() for shallow copy
let originalArray3 = [1, 2, 3, 4];
let copiedArray3 = originalArray3.slice(); // Shallow copy
copiedArray3[1] = 20;

console.log("Original Array 3:", originalArray3); // Output: [1, 2, 3, 4]
console.log("Copied Array 3:", copiedArray3); // Output: [1, 20, 3, 4]

/////////////////////////////////////////////////////////

// 6. Using Object.assign() for shallow copy
let originalObject3 = { name: "Alice", address: { city: "Wonderland" } };
let copiedObject3 = Object.assign({}, originalObject3); // Shallow copy
copiedObject3.address.city = "New York";

console.log("Original Object 3:", originalObject3); // Output: { name: "Alice", address: { city: "New York" } }
console.log("Copied Object 3:", copiedObject3); // Output: { name: "Alice", address: { city: "New York" } }

/////////////////////////////////////////////////////////

// Summary: 
// JavaScript's array copy operations (such as using the spread operator or Array.slice()) create shallow copies.
// Shallow copies duplicate the top-level properties of an array or object, but if the array contains objects or nested structures, changes to the copied object will affect the original object.
