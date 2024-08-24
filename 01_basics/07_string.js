const name = "harshita";
const repoCount = 50;

// Using string interpolation (modern syntax) with backticks, you can insert the values of variables inside the string.
// This is preferred over concatenation as shown below:
// console.log(name + repoCount + " value"); // This way of writing is usually not preferable

console.log(
  `Ok so, ${name} has a total of ${repoCount} repositories on GitHub :)`
); // Preferred way: inject a variable inside `${}`

console.log(`My name is ${name.toUpperCase()}`);

// How to declare a string in JavaScript?
// 1. Using single quotes
let string1 = "harshita";
// 2. Using double quotes
let string2 = "harshita";
// 3. Using backticks, as seen above
// 4. Using the 'String' constructor
// When using the 'new' keyword, it actually refers to objects in JS and inside String (here, inside this constructor, you write a name, e.g., "harshita").
let string3 = new String("harshita here"); // This method is less common, but it creates a new String object.

// Question: What is the difference between `const name = "harshita";` and `const name = new String("harshita");` in JavaScript?
// Answer: Primitive String Value vs String Object
// In JavaScript, `const name = "harshita";` creates a primitive string value, while `const name = new String("harshita");` creates a String object.

//------------------- Primitive String Value Example:-----------------------------------------------------------------
const name1 = "harshita"; // Creates a primitive string value

console.log(typeof name1); // "string" (primitive type)
console.log(name1 instanceof String); // false (not an object)

// Primitive strings have some properties and methods, like length
console.log(name1.length); // 8

// Use primitive string values (const name = "harshita";) for most cases, as they are faster and more lightweight.

//-------------------- String Object Example:-------------------------------------------------------------------------
const name2 = new String("harshita"); // Creates a String object

console.log(typeof name2); // "object" (object type)
console.log(name2 instanceof String); // true (an object)

// String objects have additional properties and methods
console.log(name2.length); // 8
console.log(name2.toUpperCase()); // "HARSHITA"

// Use String objects (`const name = new String("harshita");`) when you need to use string methods that are only available on String objects, or when you need to create a string with specific properties or behavior.

//------------------------------------------------------------------------------------------------------------------
// Note: In JavaScript, strings are immutable, meaning you cannot change a string once it's created.
// If you try to modify a string, a new string will be created instead.

// Here's an example to illustrate the immutability of strings in JavaScript:
let originalString = "hello";
console.log(originalString); // "hello"

// originalString = "world"; // This is not modifying the string, it's just reassigning
// console.log(originalString); // "world"

// Trying to modify the original string
originalString[0] = "J";
console.log(originalString); // Still "hello", not "Jello"!
console.log(originalString[0]); // "h"

// Creating a new string by concatenating
originalString += " world";
console.log(originalString); // "hello world"

// Using a method that seems to modify the string
originalString.toUpperCase();
console.log(originalString); // Still "hello world", not "HELLO WORLD!"

// toUpperCase() method actually returns a new string
let newString = originalString.toUpperCase();
console.log(newString); // "HELLO WORLD"

//--------------------------------------------------------------------------------------------------------------------------
const gameName = new String("bgmi"); // Creates a new object gameName with the string value "bgmi".
console.log(gameName[0]);

console.log(gameName.__proto__); // gameName.__proto__ returns the prototype of the gameName object, which is the String.prototype object.
// When you log gameName.__proto__, you're seeing the empty object {} because the String.prototype object doesn't have any own properties or methods that are enumerable.
// In JavaScript, when you create an object using a constructor function, like `new String("bgmi")`, the resulting object inherits properties and methods from the constructor function's prototype.
// In this case, gameName is an object created using the String constructor function, so it inherits properties and methods from the String.prototype object.

// To verify this, you can use the console.log() function to inspect the gameName object and its prototype. Here are a few ways to do it:
console.log(gameName.constructor); // Output: [Function: String] - This shows that the gameName object was created using the String constructor function.
console.log(gameName instanceof String); // true - This confirms that gameName is an instance of the String class.

// So, to summarize, when I said that the String.prototype object "doesn't have any own properties or methods that are enumerable", I meant that these properties and methods are not visible when using a for...in loop or Object.keys() method, but they can still be accessed using other methods like Object.getOwnPropertyNames() or Object.getPrototypeOf().
// Enumerable means that a property or method can be iterated over using a for...in loop or Object.keys() method. In other words, enumerable properties and methods are those that are visible when you iterate over an object's properties using a loop or a method that returns an array of property names.

// The String.prototype object has many properties and methods, such as toString(), toUpperCase(), toLowerCase(), trim(), and many more. However, these properties and methods are not enumerable by default. This means that if you use a for...in loop or Object.keys() method to iterate over the properties of the String.prototype object, you won't see these properties and methods listed.

// Here's an example:
for (const prop in String.prototype) {
  //'prop' is the key and 'String.prototype' is the object
  console.log(prop); // You won't see any properties or methods listed here
}
console.log(Object.keys(String.prototype)); // Output: [] (an empty array)
// This is because the properties and methods of the String.prototype object are not marked as enumerable. This is a design choice in JavaScript to prevent accidental iteration over the prototype chain.

// However, if you use Object.getOwnPropertyNames() or Object.getPrototypeOf() methods, you can still access the properties and methods of the String.prototype object:
// Example:
console.log(Object.getPrototypeOf(gameName)); // Output: {} - The reason why you don't see these properties and methods listed when you log Object.getPrototypeOf(gameName) is that they are not enumerable by default.
console.log(Object.getOwnPropertyNames(String.prototype)); // Output: ["toString", "toLocaleString", "valueOf", "constructor", "trim", "toUpperCase", "toLowerCase", ...]

//-----------------------------------------------------------------------------------------------------------------------------

// And yes, you can access the methods directly on the gameName object, which is a String object. Here are some examples:
console.log(gameName.length); // 4
console.log(gameName.toUpperCase()); // "BGMI"
console.log(gameName.charAt(2)); // "m"
console.log(gameName.indexOf("g")); // 1

const newString1 = gameName.substring(0, 2); // "bg" (last one is excluded always)
console.log(newString1);

// Note that substring and slice are similar, but slice allows negative indices, which count from the end of the string. Here are some examples:
console.log(gameName.substring(1, 3)); // "gm" (first and last excluded)
console.log(gameName.slice(1, 3)); // "gm"
console.log(gameName.slice(-2)); // "mi" (counts from the end of the string)

// The trim() method removes extra spaces and new lines from a string:
const originalString1 = "   hello world   ";
console.log(originalString1.trim()); // "hello world"

// The replace() method is useful for replacing substrings within a string.
const originalString2 = "hello world";
console.log(originalString2.replace("world", "JavaScript")); // "hello JavaScript"

const str = "hello";
const newStr = str.replace("h", "H");
console.log(newStr); // "Hello"

// The replace() method is used to replace a substring (or a single character) within a string, not the entire string itself.
// If you want to replace a complete single string with another string, you can simply assign the new string to the variable, like this:
let str1 = "hello";
str1 = "goodbye";
console.log(str1); // "goodbye"

// The includes() method checks if a substring exists within a string:
const originalString3 = "hello world";
console.log(originalString3.includes("world")); // true

// To convert a string to an array, you can use the split() method with a separator and an optional limit:
const originalString4 = "hello,world,JavaScript";
console.log(originalString4.split(",")); // ["hello", "world", "JavaScript"]
console.log(originalString4.split(",", 2)); // ["hello", "world"]

// ---------------------------------------------------------------------------------------------------------------------------------------------

// You can find all JavaScript string methods and properties in one place on the MDN Web Docs under the following link:

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// This page provides a complete overview of the `String` object in JavaScript, including all available methods, properties, and detailed explanations.
