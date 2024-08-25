// ***************************************** ALL ABOUT NUMBERS ********************************************

// 1. Declaring a Primitive Number
const score = 400; // Since JavaScript is a dynamically typed language, it automatically detects that the type of 'score' is 'Number'.
console.log(score); // Output: 400

// However, you can also explicitly define the 'Number' data type as shown below:

// 2. Declaring a Number Object
const balance = new Number(100); // This creates a number as an object.
console.log(balance); // Output: [Number: 100] - Note the output is different because it is an object.

// --------------------------- EXTRA NOTES --------------------------------------------------------------
// Understanding `typeof` in JavaScript:
// In JavaScript, the `typeof` operator is used to determine the data type of a given variable or value. It returns a string that indicates the type of the operand. Here’s a quick overview of some common types:

// 'number': Represents primitive numbers.
// 'string': Represents text or string values.
// 'boolean': Represents true/false values.
// 'object': Represents objects, arrays, null, and instances of classes like Number, Date, etc.
// 'undefined': Represents variables that have been declared but not yet assigned a value.

// - Creating a Number Object:
// const balance = new Number(100); // This creates a Number object using the `new Number(100)` syntax. It wraps the primitive value 100 inside a Number object.

// - Using `typeof` on balance:
// console.log(typeof balance); // JavaScript evaluates the type of the variable `balance`.

// - Why the Output is 'object':
// Since `balance` was created using the Number constructor (`new Number(100)`), it’s not a primitive number but an instance of the Number object. In JavaScript, any value created using a constructor function (like `new Number()`, `new Date()`, or `new Array()`) is considered an object.
// The `typeof` operator recognizes that `balance` is an object, hence the output is 'object'.

// - Key Takeaways:
// Primitive vs. Object: Primitive values like `100` would return 'number' when checked with `typeof`. However, when you use the `new Number(100)` constructor, the value becomes an object, and `typeof` returns 'object'.
// Objects in JavaScript: In JavaScript, objects can include instances of built-in constructors like Number, Date, Array, etc. These objects provide additional methods and properties that are not available to primitive values.

// Example for Clarity:
const primitiveValue = 100;
console.log(typeof primitiveValue); // Output: 'number'
// Primitive Number: `primitiveValue` is a simple number, so `typeof` returns 'number'.

const objectValue = new Number(100);
console.log(typeof objectValue); // Output: 'object'
// Number Object: `objectValue` is an instance of the Number object, so `typeof` returns 'object'.

// ---------------------------------------------- EXTRA NOTES END HERE -----------------------------------------------

// 3. Converting the Number Object to a String:

console.log(balance.toString()); // Output: "100"
// Explanation: The `toString()` method converts `balance` (which is a Number object) to its string representation.

console.log(balance.toString); // Output: [Function: toString]
// Explanation: Here, `balance.toString` accesses the reference to the `toString` method itself, without invoking it.

console.log(balance.toString().length); // Output: 3
// Explanation: The console outputs `3`, as the string "100" consists of three characters.

console.log(balance.toString.length); // Output: 1
// Explanation: Here, `balance.toString.length` accesses the length property of the `toString` method itself. The length property of a function indicates the number of arguments it expects.

console.log(typeof balance); // Output: 'object'

// Summary of Outputs:
// `balance.toString()`: Converts the Number object to the string "100".
// `balance.toString`: References the `toString` function, resulting in [Function: toString].
// `balance.toString().length`: Outputs `3`, the length of the string "100".
// `balance.toString.length`: Outputs `1`, indicating the `toString` method expects one argument.

// The `length` property of `balance.toString` is `1`, meaning the method can take one argument, typically a radix (base for number conversion).

// Usage:
// Without Arguments: `balance.toString()` converts the number to a string in base-10 (decimal).
// With Argument: `balance.toString(2)` converts the number to a string in binary (base-2).

// Summary: `toString.length` being `1` means the method can take one argument (radix), but it's often used without any, defaulting to base-10 conversion.

// 4. Exploring More Methods
console.log(balance.toFixed(2)); // Output: "100.00" (precision value fixed)

const otherNumber = 23.8967;
console.log(otherNumber.toPrecision(3)); // Output: "23.9"

const otherNumber1 = 123.8967;
console.log(otherNumber1.toPrecision(3)); // Output: "124"

const otherNumber2 = 1123.8967;
console.log(otherNumber2.toPrecision(3)); // Output: "1.12e+3"
// Conversion to Exponential Notation:
// The number 1123.8967 is close to 1000 (which is 1 × 10³).
// To express 1123.8967 with three significant digits, the method rounds it to 1.12 and then expresses it in exponential notation as `1.12e+3`.
// `e+3` means that the decimal point is moved three places to the right, so `1.12e+3` is equivalent to `1.12 × 10³`, which is 1120 (very close to the original number).

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // Output: "10,00,000"
// Explanation: The `toLocaleString()` method formats a number according to the conventions of a specific locale.

// MAX_VALUE AND MIN_VALUE Examples:
// 1. Log the maximum value that can be represented by a number in JavaScript
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308

// 2. Attempt to add 1 to the maximum value
console.log(Number.MAX_VALUE + 1); // Output: Infinity

// 3. Log the minimum value that can be represented by a number in JavaScript
console.log(Number.MIN_VALUE); // Output: 5e-324

// 4. Attempt to subtract 1 from the minimum value
console.log(Number.MIN_VALUE - 1); // Output: 0

// 5. Log the negative of the maximum value (smallest possible value)
console.log(-Number.MAX_VALUE); // Output: -1.7976931348623157e+308
