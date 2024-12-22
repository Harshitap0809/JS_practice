// how to make an object singleton/ how to declare an object with the help of constructor.
// -> singleton class is a class which has only one object, which is created when the class is loaded for the first time. This object is then shared globally.
// -> singleton class is used when we want to restrict object creation of a class from outside.
// -> singleton class is used when we want to create a single object of a class and want to share it globally.
// -> In JS, we can create a singleton class by using a constructor function and a private variable.
// -> we can also use a factory function to create a singleton class.

// 1. Demonstrating two ways to create an object in JavaScript
// ----------------------------------------------------------

// 1.1 Using Object Literal
// Here, we declare an object `user1` using an object literal syntax. It includes properties like `name`, `age` and a method `work()`
// `work()` is a function that logs a message using `this` keyword, which refers to the object itself.
let user1 = {
  name: "John", // Property holding the user's name
  age: 25, // Property holding the user's age
  work() {
    // Method representing a function of the object
    console.log("I am working and here is my data :", this);
  },
};

// Printing the `user1` object to the console
console.log(user1); // Output: { name: 'John', age: 25, work: [Function: work] }

// Calling the `work` method of `user1`. Here, `this` inside `work()` refers to `user1` object
user1.work(); // Output: I am working and here is my data : { name: 'John', age: 25, work: [Function: work] }

// ----------------------------------------------------------

// 1.2 Using Constructor Function (ES5)
// We define a class-like structure using a function to simulate a constructor.
// This function is used to create objects with properties like `name` and `age`.
class UserClass {
  constructor(name, age) {
    this.name = name; // Property for name
    this.age = age; // Property for age
  }
}
// OR we can use a regular function instead of a class to create the object.
function UserFunction(name, age) {
  this.name = name; // Property for name
  this.age = age; // Property for age
}
// Creating a new object of `UserClass` using the `new` keyword.
let userObj = new UserClass("Jane", 30);
console.log(userObj); // Output: UserClass { name: 'Jane', age: 30 }

// 1.3 Another way of declaring objects without using a class
// Here, we are using `new Object()` to create an empty object.
// This is still an object, but lacks properties or methods initially.
const tinderUser = new Object(); // This is a singleton object
console.log(tinderUser); // Output: {} -> Empty object

// 1.4 A simpler way of declaring an object
// Using the object literal syntax to declare an empty object.
const tinderUser1 = {}; // This is a non-singleton object
console.log(tinderUser1); // Output: {} -> Empty object

// ----------------------------------------------------------

// Example 2: Creating Objects Inside an Object and Accessing Them
// ----------------------------------------------------------

// We are creating a nested object inside `regularUser`, where the `fullname` property
// is itself an object containing `userFullname` which further holds `first` and `last` name.
const regularUser = {
  email: "some@gmail.com", // Property holding the user's email
  fullname: {
    // Nested object holding user full name
    userFullname: {
      // Another object for full name details
      first: "John", // Property holding first name
      last: "Doe", // Property holding last name
    },
  },
};

// Accessing the `fullname` object from the `regularUser` object
console.log(regularUser.fullname); // Output: { userFullname: { first: 'John', last: 'Doe' } }
// Accessing the `userFullname` object from `fullname`
console.log(regularUser.fullname.userFullname); // Output: { first: 'John', last: 'Doe' }

// ----------------------------------------------------------

// Example 3: Combining Multiple Objects
// ----------------------------------------------------------

// Declaring two separate objects `obj1` and `obj2`.
const obj1 = { 1: "a", 2: "b" }; // Object with two key-value pairs
const obj2 = { 3: "c", 4: "d" }; // Object with two key-value pairs

// Using an object literal to combine `obj1` and `obj2` inside `obj3`.
// Here, `obj1` and `obj2` are placed as properties within `obj3`, not merged.
const obj3 = { obj1, obj2 };
console.log(obj3);
// Output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// Correct way to combine two objects using the spread operator
// The spread operator (`...`) is used to copy the properties from `obj1` and `obj2` into a new object.
const obj11 = { 1: "a", 2: "b" }; // Object with two key-value pairs
const obj12 = { 3: "c", 4: "d" }; // Object with two key-value pairs
const obj13 = { ...obj11, ...obj12 }; // Merging both objects into a new object `obj13`
console.log(obj13);
// Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// Another way to combine objects using `Object.assign()`
// `Object.assign(target, source)` copies all properties from `source` to `target`, modifying the target.
const target = { 1: "a", 2: "b" }; // Target object
const source = { 2: "c", 4: "d" }; // Source object
const returnedTarget = Object.assign(target, source);
console.log(target); // Output: { '1': 'a', '2': 'c', '4': 'd' }
console.log(source); // Output: { '2': 'c', '4': 'd' }
console.log(returnedTarget); // Output: { '1': 'a', '2': 'c', '4': 'd' }
console.log(returnedTarget == target); // true - since `returnedTarget` is the same as `target`

// ----------------------------------------------------------

// Creating a New Object Using `Object.assign()`
// `Object.assign({}, target1, source1)` creates a new object instead of modifying the target.
const target1 = { 1: "a", 2: "b" }; // Original target object
const source1 = { 2: "c", 4: "d" }; // Source object
const returnedTarget1 = Object.assign({}, target1, source1);
console.log(target1); // Output: { '1': 'a', '2': 'b' }
console.log(source1); // Output: { '2': 'c', '4': 'd' }
console.log(returnedTarget1); // Output: { '1': 'a', '2': 'c', '4': 'd' }
console.log(returnedTarget1 == target1); // false - since `returnedTarget1` is a new object

// ----------------------------------------------------------

// Explanation of differences between `Object.assign()` usages:

// 1. Modifying an Existing Object:
// `Object.assign(target, source)` modifies the existing `target` object.
// If there are overlapping properties in the `source`, they overwrite those in the `target`.

// 2. Creating a New Object:
// `Object.assign({}, target1, source1)` creates a new object, combining properties from `target1` and `source1`.
// This way, the original `target1` remains unchanged.

// Use the first method to update an existing object.
// Use the second method to create a new object without altering the original.

// ----------------------------------------------------------

// Example of working with an array of objects
// When data comes from a database, it often comes in the form of an array of objects.
const people = [
  // 'people' is an array containing three objects, each representing a person.
  { id: 1, name: "John", age: 30 }, // First object representing John
  { id: 2, name: "Jane", age: 25 }, // Second object representing Jane
  { id: 3, name: "Bob", age: 40 }, // Third object representing Bob
];
console.log(people[1].name); // Output: Jane - accessing the `name` property of the second object in the `people` array

// ----------------------------------------------------------

// Demonstrating Object Methods: `Object.keys`, `Object.values`, and `Object.entries`
console.log(Object.keys(user1)); // Output: [ 'name', 'age', 'work' ] - Array of property names (keys) of `user1`
console.log(Object.values(user1)); // Output: [ 'John', 25, [Function: work] ] - Array of property values of `user1`
console.log(Object.keys(user1).length); // Output: 3 - Number of properties in `user1`
console.log(Object.values(user1).length); // Output: 3 - Number of values in `user1`
console.log(Object.keys(user1).length == Object.values(user1).length); // Output: true - Both lengths are equal
console.log(Object.entries(user1)); // Output: [ [ 'name', 'John' ], [ 'age', 25 ], [ 'work', [Function: work] ] ]
console.log(Object.entries(user1).length); // Output: 3 - Number of entries in `user1` (each entry is a [key, value] pair)
console.log(user1.hasOwnProperty("work")); // Output: true - Checking if `work` is a property of `user1`
console.log(user1.hasOwnProperty("email")); // Output: false - Checking if `email` is a property of `user1`

// ----------------------------------------------------------

// Example of Iterating Over Objects in JavaScript using `Object.keys`, `Object.values`, and `for...in`

// Object with student scores.
const studentScores = {
  Alice: 85,
  Bob: 92,
  Charlie: 88,
  Diana: 79,
};

// Example 1: Using `Object.keys` and `Object.values` to iterate
console.log("Using Object.keys and Object.values:");

// Step 1: Get an array of all student names (keys)
const names = Object.keys(studentScores); // ['Alice', 'Bob', 'Charlie', 'Diana']

// Step 2: Get an array of all scores (values)
const scores = Object.values(studentScores); // [85, 92, 88, 79]

// Step 3: Loop through the names and print each name with the corresponding score
// Using `forEach` to iterate over the names array and print corresponding score using index
names.forEach((name, index) => {
  console.log(`${name}: ${scores[index]}`);
  // Output:
  // Alice: 85
  // Bob: 92
  // Charlie: 88
  // Diana: 79
});

// Step 4: Calculate the total of all scores
const total = scores.reduce((sum, score) => sum + score, 0); // Sum all the scores
// 85 + 92 + 88 + 79 = 344

// Step 5: Calculate the average score
const average = total / scores.length; // 344 / 4 = 86
console.log(`Average Score: ${average}`); // Output: Average Score: 86

// Example 2: Using a Traditional Loop (for...in)
console.log("\nUsing a Traditional Loop:");

// Step 1: Initialize variables to calculate total and count
let totalScore = 0; // To store the sum of scores
let count = 0; // To count the number of students

// Step 2: Use a `for...in` loop to iterate through the object
for (const name in studentScores) {
  // Check if the property belongs directly to the object (not inherited from the prototype)
  if (studentScores.hasOwnProperty(name)) {
    // Step 3: Print the name and score
    console.log(`${name}: ${studentScores[name]}`);
    // Output:
    // Alice: 85
    // Bob: 92
    // Charlie: 88
    // Diana: 79

    // Step 4: Add the score to the total
    totalScore += studentScores[name];

    // Step 5: Increment the count of students
    count++;
  }
}

// Step 6: Calculate the average score
const avgScore = totalScore / count; // 344 / 4 = 86
console.log(`Average Score: ${avgScore}`); // Output: Average Score: 86
