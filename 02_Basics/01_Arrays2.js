// JavaScript Array Definitions

///////////////////////////////////////////////////////////////////////////////////////////
// 1. Array Literal
// The most common way to create an array is using an array literal.
const fruits = ['apple', 'banana', 'cherry'];  // Create an array of fruits
console.log('Array Literal:', fruits);         // Output: ['apple', 'banana', 'cherry']

///////////////////////////////////////////////////////////////////////////////////////////
// 2. Using the Array Constructor
// Create an array using the Array constructor.
const numbers = new Array(1, 2, 3, 4, 5);      // Creates an array with numbers from 1 to 5
console.log('Array Constructor:', numbers);    // Output: [1, 2, 3, 4, 5]

///////////////////////////////////////////////////////////////////////////////////////////
// 3. Using the Array.of() Method
// Array.of() allows you to create an array by passing in any number of values (arguments).
// - Pass one, multiple, or no values.
// - Each value becomes an element of the new array.

// Example: Passing three arguments:
const fruits1 = Array.of('apple', 'banana', 'cherry');
console.log('Array.of() - Three arguments:', fruits1);  // Output: ['apple', 'banana', 'cherry']

// Example: Passing one argument:
const singleNumber = Array.of(5);
console.log('Array.of() - One argument:', singleNumber);  // Output: [5]

// Example: Passing no arguments:
const emptyArray = Array.of();
console.log('Array.of() - No arguments:', emptyArray);  // Output: []

///////////////////////////////////////////////////////////////////////////////////////////
// 4. Using the Array.from() Method
// Array.from() creates a new array from an array-like or iterable object.
// Useful for converting array-like objects into true arrays.

// Example 1: Converting a string to an array
const string = 'hello';
const arrayFromString = Array.from(string);
console.log('Array.from() - String:', arrayFromString);  // Output: ['h', 'e', 'l', 'l', 'o']

// Example 2: Converting a Set to an array
const mySet = new Set([1, 2, 3, 4]);
const arrayFromSet = Array.from(mySet);
console.log('Array.from() - Set:', arrayFromSet);  // Output: [1, 2, 3, 4]

// Example 3: Converting an array-like object (e.g., function arguments)
function createArray() {
  return Array.from(arguments);
}

const arrayFromArguments = createArray(10, 20, 30);
console.log('Array.from() - Arguments object:', arrayFromArguments);  // Output: [10, 20, 30]

// Example 4: Using a mapping function with Array.from()
const numbers1 = [1, 2, 3];
const doubled = Array.from(numbers1, num => num * 2);
console.log('Array.from() - Mapping function:', doubled);  // Output: [2, 4, 6]

///////////////////////////////////////////////////////////////////////////////////////////
// 5. Using the Spread Operator
// Use the spread operator to create a new array from another array or iterable.
const original = [1, 2, 3];     // Original array
const copy = [...original];     // Copy using spread operator
console.log('Spread Operator:', copy);  // Output: [1, 2, 3]

///////////////////////////////////////////////////////////////////////////////////////////
// 6. Using the Array.prototype.push() Method
// Create an empty array and add elements using push().
const animals = [];             // Initialize an empty array
animals.push('dog');            // Add 'dog' to the array
animals.push('cat');            // Add 'cat' to the array
console.log('Array.prototype.push() Method:', animals);  // Output: ['dog', 'cat']

///////////////////////////////////////////////////////////////////////////////////////////
// 7. Using the Array.prototype.concat() Method
// Concatenate two or more arrays using concat().
const array1 = [1, 2, 3];       // First array
const array2 = [4, 5, 6];       // Second array
const combined = array1.concat(array2);  // Combine arrays into one
console.log('Array.prototype.concat() Method:', combined);  // Output: [1, 2, 3, 4, 5, 6]

///////////////////////////////////////////////////////////////////////////////////////////
// 8. Using the Array.prototype.fill() Method
// Create an array of a specific length and fill it with a specific value.
// The fill() method repeats a single value across all array elements.
const zeros = new Array(5).fill(0);   // Create an array of length 5 filled with zeros
console.log('Array.prototype.fill() Method:', zeros);  // Output: [0, 0, 0, 0, 0]

///////////////////////////////////////////////////////////////////////////////////////////
// Summary:
// - Array Literal: Directly initializes an array using square brackets.
// - Array Constructor: Creates an array using the Array() function.
// - Array.of(): Creates an array from a set of arguments.
// - Array.from(): Converts array-like or iterable objects (e.g., strings, Sets) into arrays.
// - Spread Operator: Expands an iterable into individual elements to create a new array.
// - Array.push(): Adds elements to the end of an array.
// - Array.concat(): Merges two or more arrays into one.
// - Array.fill(): Fills an array with a single value for all elements.

///////////////////////////////////////////////////////////////////////////////////////////
