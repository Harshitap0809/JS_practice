// Memory Management in JavaScript: Stack vs Heap

// Stack Memory (Used for primitives)
let myHobby = "lawn-tennis"; // Stack memory allocation for a primitive type (string)
let anotherHobby = myHobby; // Copy of the value from myHobby
anotherHobby = "cooking"; // Modifying the copy, does not affect the original variable
console.log(myHobby); // Output: lawn-tennis (Original value remains unchanged)
console.log(anotherHobby); // Output: cooking (Modified copy)

// Explanation:
// Stack memory is used for primitive values (e.g., strings, numbers).
// When you assign a primitive value to another variable, you are creating a copy of that value.
// Changes to the copy do not affect the original variable because they are stored separately inside stack memory.
//----------------------------------------------------------------------------------------------------------------------------
// Heap Memory (Used for non-primitives)
let user1 = {
  name: "harshita", //here name and age are objects
  age: 25,
};
let user2 = user1; // `user2` is a reference to the same object in heap memory as `user1`
console.log(user2); // Output: { name: "harshita", age: 25 }

// Explanation:
// In heap memory, objects (including arrays) are stored. Variables hold references to these objects.
// Both `user1` and `user2` point to the same memory location.
// Therefore, changes made through one reference will be reflected in the other because they both refer to the same object.

user2.age = 30; // Modifying the object through the reference `user2`
console.log(user2.age); // Output: 30 (Age is updated in the object)
console.log(user1.age); // Output: 30 (The change is reflected here as well)
//----------------------------------------------------------------------------------------------------------------------------

// Function to modify a primitive value
function changeHobby(hobby) {
  hobby = "cricket"; // Modifying the local copy of the parameter
  return hobby; // Returning the modified copy
}

let myHobby1 = "lawn-tennis";

// Passing the value (copy) of the original variable
let changedHobby = changeHobby(myHobby1);

console.log(myHobby1); // Output: lawn-tennis (Original value remains unchanged)
console.log(changedHobby); // Output: cricket (Modified copy returned from function)

// Explanation:
// Primitives in JavaScript (e.g., strings, numbers) are passed by value. This means that when you pass a primitive to a function,
// a copy of the value is passed, not a reference to the original variable.
// The function operates on this copy, and any changes made inside the function do not affect the original variable.
// We use functions to perform operations on primitives when we need to transform or utilize the value in some way
// while keeping the original variable unchanged.
