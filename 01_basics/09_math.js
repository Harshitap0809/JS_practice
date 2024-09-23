// Math Object and its Methods in JavaScript

// Math is a built-in object that has properties and methods for mathematical constants and functions.
// It is not a function object, and all its properties and methods are static.
console.log(Math); // Outputs: Object [Math] {} ...'[Math]' is an object which itself has many properties '{}'

// Math.PI: Returns the value of π (Pi), which is approximately 3.14159.
console.log(Math.PI); // Outputs: 3.141592653589793 ...'.PI' is one of the properties.

// Math.abs(): Returns the absolute value of a number. Negative numbers become positive.
console.log(Math.abs(-4)); // Outputs: 4 ...'abs' returns the positive value of a negative number.
console.log(Math.abs(4)); // Outputs: 4 ...Positive values remain unchanged.

// Remember: Math is an object, whereas Math.abs() and Math.round() are methods in JavaScript that require an argument.

// Math.round(): Rounds a number to the nearest integer.
console.log(Math.round(4.6)); // Outputs: 5 ...Rounds up 4.6 to the nearest integer, which is 5.

// Math.ceil(): Rounds a number up to the next largest integer.
console.log(Math.ceil(4.2)); // Outputs: 5 ...Rounds 4.2 up to 5.

// Math.floor(): Rounds a number down to the largest integer less than or equal to the given number.
console.log(Math.floor(4.2)); // Outputs: 4 ...Rounds 4.2 down to 4.

// Math.min(): Returns the smallest of the given numbers.
console.log(Math.min(4, 3, 6, 8)); // Outputs: 3 ...Finds the minimum value among 4, 3, 6, and 8.

// Math.max(): Returns the largest of the given numbers.
console.log(Math.max(4, 3, 6, 8)); // Outputs: 8 ...Finds the maximum value among 4, 3, 6, and 8.

// Math.random(): Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random()); // Outputs: A random decimal number between 0 and 1.

// Example: Generate a random integer between 1 and 10:
// 1. Math.random() generates a number between 0 (inclusive) and 1 (exclusive).
// 2. Multiplying by 10 scales it to 0 to 10 (exclusive).
// 3. Math.floor() rounds down to the nearest integer.
// 4. Adding 1 shifts the range to 1 to 10 (inclusive).
console.log(Math.floor(Math.random() * 10) + 1); // Outputs: A random integer between 1 and 10.

// Example formula for generating a random integer between a specific range (min to max):
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Explanation:
// 1. Math.random() generates a number between 0 and 1.
// 2. (max - min + 1) creates a range from min to max.
// 3. Multiplying by (max - min + 1) scales the range to the desired interval.
// 4. Math.floor() rounds down to the nearest integer within the range.
// 5. Adding 'min' shifts the starting point to the desired minimum value.
