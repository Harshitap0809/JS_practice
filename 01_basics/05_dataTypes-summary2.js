// IS JAVASCRIPT A DYNAMICALLY TYPED OR STATICALLY TYPED LANGUAGE?
// JavaScript is a dynamically typed language. This means that you do not need to declare the type of a variable when you create one,
// and the type can change at runtime.

// Example:
let variable = 10; // Initially, 'variable' is a number
variable = "Hello"; // Now, 'variable' is a string
console.log(variable); // Output: "Hello"

// PRIMITIVE DATA TYPES IN JAVASCRIPT
// JavaScript has 7 primitive data types:

// 1. String: Represents textual data.
let str = "Hello, World!";
console.log(typeof str); // Output: "string"

// 2. Number: Represents both integer and floating-point numbers.
let num = 42;
console.log(typeof num); // Output: "number"

// 3. Boolean: Represents true or false values.
let isJavaScriptFun = true;
console.log(typeof isJavaScriptFun); // Output: "boolean"

// 4. Null: Represents an explicitly empty value.
let emptyValue = null;
console.log(typeof emptyValue); // Output: "object" (this is a quirk in JavaScript)

// 5. Undefined: Represents a variable that has been declared but not assigned a value.
let undefinedValue;
console.log(typeof undefinedValue); // Output: "undefined"

// 6. Symbol: Represents a unique value, often used in advanced JS (e.g., to create unique object keys).
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // Output: false, as each Symbol is unique, even with the same description

// 7. BigInt: Represents large integers beyond the safe integer range for Number.
let largeNumber = BigInt(123456789012345678901234567890);
console.log(typeof largeNumber); // Output: "bigint"

//----------------------------------------------------------------------------------------------------------------------------
// NON-PRIMITIVE (REFERENCE) DATA TYPES IN JAVASCRIPT
// Non-primitive data types are also known as reference types. These include:

// 1. Object: A collection of key-value pairs.
let myObj = {
  name: "Harshita",
  age: 21,
};
console.log(myObj); // Output: { name: "Harshita", age: 21 }

// 2. Array: An ordered collection of values.
const heros = ["Shaktiman", "Thor", "Ironman"];
console.log(heros); // Output: ["Shaktiman", "Thor", "Ironman"]

// 3. Function: A block of code that can be called multiple times.
const myFunction = function () {
  console.log("Hello, Connections!");
};
myFunction(); // Output: "Hello, Connections!"

// Remember: The return type of non-primitive data types is always an object.
// Specifically, the return type of a function is 'object-function'.
