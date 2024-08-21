// data is been broadly categorize into two parts depending on how the data is been stored and accessed from the memory.Those are primitive and non-primitive(or reference type)datatypes.

//Primitive datatype -> all primitive types are 'call by value'.

// In JavaScript, call by value is used for primitive data types because of how these types are stored and manipulated in memory. Let's break it down:
// Primitive data types in JavaScript include:
//1. Number
//2. String
//3. Boolean
//4. null
//5. undefined
//6. Symbol
//7. BigInt
// These types are simple and immutable (cannot be changed). When you assign a primitive value to a variable, you're storing a copy of that value directly in the variable.

// Call by Value Explained :
// When a function is called with a primitive data type as an argument, JavaScript passes a copy of that value to the function. This means that any changes made to the parameter inside the function do not affect the original value outside the function.
//----------------------------------------example of CALL BY VALUE---------------------------------------------------------------------------------
function modifyValue(x) {
  x = x * 2;
  console.log("Inside function:", x); // Prints 20
}

let num = 10;
modifyValue(num);
console.log("Outside function:", num); // Still prints 10
// In this example:
// num is a primitive number with the value 10.
// The modifyValue function receives a copy of num as its parameter x.
// Inside the function, x is modified to 20, but this does not affect num outside the function.

// Why Call by Value?
// Immutability: Primitive types are immutable. Their values cannot be altered, only replaced. Therefore, passing a copy of the value ensures that the original value remains unchanged, preserving data integrity.

// Efficiency: Since primitives are simple and have a fixed size, copying them is a quick and efficient operation. This is different from objects, where copying would be more complex and costly.

//----------------------------------------example of CALL BY REFERENCE---------------------------------------------------------------------------------

// In contrast, non-primitive data types like objects and arrays are passed by reference in JavaScript. This means that when you pass an object to a function, the function receives a reference (or pointer) to the same memory location, not a copy of the object itself. Any changes made to the object inside the function will affect the original object outside the function.
// This means that in 'CALL BY REFERENCE' instead of passing values, we pass addresses. And in order to store this address we make use of pointers(pointers are the variable which stores the address of another variable.)

// function modifyObject(obj) {
//   obj.value = 20;
//   console.log("Inside function:", obj.value); // Prints 20
// }

// let myObj = { value: 10 };
// modifyObject(myObj);
// console.log("Outside function:", myObj.value); // Also prints 20

//In the above modifyObj function, a reference to the myObj object is passed. When we modify the obj.value property inside the function, it affects the original myObj object outside the function. This is because objects are mutable, and a reference to the same memory location is passed to the function.
// Note that JavaScript does not have a traditional "call by reference" like some other languages. Instead, it passes objects by sharing a reference to the same memory location. This means that if you reassign the object inside the function, it won't affect the original object outside the function. However, if you modify the properties of the object, it will affect the original object.

// For example:
function modifyObj(obj) {
  obj = { value: 20 }; // reassigning the object
  console.log("Value inside the function: ", obj.value); // 20
}

let myObj = { value: 10 };
modifyObj(myObj);
console.log("Value outside the function: ", myObj.value); // still 10

// In this case, reassigning the obj variable inside the function doesn't affect the original myObj object outside the function.
