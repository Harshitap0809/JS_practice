//------------------------------------------------------------------------------------------------------------------
// TOPIC: Prototypes in JS
//------------------------------------------------------------------------------------------------------------------
// A JavaScript object is an entity having state and behaviour (properties and methods).
// state - variables , behaviour - function/method
// JS object have a special property called prototype.
//  We can set prototype using _ _ proto_ _
// NOTE: If object & prototype have same method, object's method will be used.

// EXAMPLE:
//------------------------------------------------------------------------------------------------------------------
// Global context variable
const globalFullName = "Global Name"; // A global variable

const student = {
  fullName: "Harshita", // Property of the student object
  marks: 100, // Property of the student object

  // Regular function
  displayDetails: function () {
    console.log("Regular Function:");
    console.log("Name: ", this.fullName); // 'this' refers to the student object
    console.log("Marks: ", this.marks); // 'this' refers to the student object
  },

  // Arrow function
  displayDetailsArrow: () => {
    console.log("Arrow Function:");
    console.log("Name: ", this.fullName); // 'this' does NOT refer to the student object
    console.log("Marks: ", this.marks); // 'this' does NOT refer to the student object
  },
};

// Call the regular function
student.displayDetails();
// Expected Output:
// Regular Function:
// Name:  Harshita
// Marks:  100

// Call the arrow function
student.displayDetailsArrow();
// Expected Output:
// Arrow Function:
// Name:  undefined
// Marks:  undefined

// Example of both a regular function and an arrow function inside another function
function outerFunction() {
  const outerName = "Outer Name"; // Variable in the outer function

  const innerStudent = {
    fullName: "Inner Harshita", // Property of the inner student object

    // Regular function to access properties
    displayDetails: function () {
      console.log("Regular Function Inside Another Function:");
      console.log("Global Name: ", globalFullName); // Accessing the global variable
      console.log("Inner Name: ", this.fullName); // Accessing the innerStudent's property using 'this'
      console.log("Outer Name: ", outerName); // Accessing the outer variable
    },

    // Arrow function to access properties
    displayDetailsArrow: () => {
      console.log("Arrow Function Inside Another Function:");
      console.log("Global Name: ", globalFullName); // Accessing the global variable
      console.log("Inner Name: ", this.fullName); // 'this' does NOT refer to the innerStudent object
      console.log("Outer Name: ", outerName); // This will still be undefined
    },
  };

  // Call both functions
  innerStudent.displayDetails(); // Call the regular function
  innerStudent.displayDetailsArrow(); // Call the arrow function
}

// Call the outer function
outerFunction();
// Expected Output:
// Regular Function Inside Another Function:
// Global Name:  Global Name
// Inner Name:  Inner Harshita
// Outer Name:  Outer Name

// Arrow Function Inside Another Function:
// Global Name:  Global Name
// Inner Name:  undefined
// Outer Name:  undefined
//------------------------------------------------------------------------------------------------------------------

/*
Conclusion of the Behavior of Regular and Arrow Functions in JavaScript:

1. Regular Functions:
   - 'this' refers to the object from which the function is called.
   - Example: In 'student.displayDetails()', 'this' refers to 'student'.
   - Outputs the correct properties of the object it belongs to.

2. Arrow Functions:
   - 'this' does NOT refer to the object from which the function is called.
   - Instead, it captures 'this' from the lexical scope where it was defined.
   - Example: In 'student.displayDetailsArrow()', 'this' refers to the global context.
   - Outputs 'undefined' for object properties that are not in the global context.

3. Inner Functions:
   - Regular functions defined inside another function can access outer function variables.
   - Example: 'innerStudent.displayDetails()' accesses 'outerName' correctly.
   - Outputs the properties of 'innerStudent' and the outer variable.

4. Arrow Functions Inside Another Function:
   - Arrow functions do not have their own 'this' context and cannot access the outer function variables.
   - Example: 'innerStudent.displayDetailsArrow()' cannot access 'outerName'.
   - Outputs 'undefined' for outer variables.

5. Summary:
   - Use regular functions when you need 'this' to refer to the object.
   - Use arrow functions when you want to maintain the lexical scope of 'this'.
   - Be cautious with arrow functions inside other functions due to their scope behavior.
*/
//------------------------------------------------------------------------------------------------------------------

// since we know that JS objects have a special by-default property called 'protoype'so lets understand it with the help of exmaple
// Prototype Example 1:
let arr = ["apple", "mango", "banana"];

console.log(typeof arr); // Output: object
arr.push("litchi"); // Using the built-in 'push' method
console.log(arr); // Output: ["apple", "mango", "banana", "litchi"]

// Prototype Example 2:
const employee = {
  // Employee is an object
  // calTax1: function(){} -> complex way of writing function inside object
  calTax1: function () {
    console.log("Tax rate is zero for salary <= 7LPA");
  },
  // calTax2(){} -> simple way of writing function inside object
  calTax2() {
    console.log("Tax rate is 12% for salary >= 7LPA");
  },
};

const karanArjun = {
  salary: 50000,
};

// Here, the reference of 'employee' object is directly accessed by the new object 'karanArjun'.
karanArjun.__proto__ = employee; 
karanArjun.calTax1(); // Output: Tax rate is zero for salary <= 7LPA
karanArjun.calTax2(); // Output: Tax rate is 12% for salary >= 7LPA

// NOTE: The type of 'prototype' is either 'NULL' (when there do not exist any prototype)
//       or 'REFERENCE TO AN OBJECT' (when there exists some prototype)

// Prototype Example 3:
// NOTE: If the object and prototype have the same method, the object's method will be used.
const employee1 = {
  calTax3: function () {
    console.log("Tax is 12%");
  },
};

const harshitapandey = {
  calTax3: function () {
    console.log("Tax is 10%");
  },
};

// Here, 'harshitapandey' object's method will be used because it has the same method name 'calTax3'.
harshitapandey.__proto__ = employee1;
harshitapandey.calTax3(); // Output: Tax is 10%
//------------------------------------------------------------------------------------------------------------------