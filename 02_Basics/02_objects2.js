// There are two ways for declaring 'objects'
// 1. using constructor (whenever u create an object using constructor then a singleton object is made.)
// 2. using literal (in literals, singleton is not made.)

// REMEMBER:
// 'Object literals' refers to the way of declaring an object.
// When we declare an object using object literal, it is not a singleton object.
// It is a new object every time we declare it.
// But when we declare an object using constructor, it is a singleton object.
// It means that whenever we declare an object using constructor, it is the same object every time. It is not a new object.
// It is the same object that we declared first time.

// EXAMPLE 1: declaring an object named 'jsUser' then initializing the value.
const jsUser = {
  // This '{}' is object and if we put values inside it then we can access accordingly.
  name: "Harshita", // key-value pair
  "full name": "Harshita pandey",
  age: 21,
  email: "harshitapandey@gmail.com",
  occupation: "Software Engineer",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"], // array
  // We can also add function inside the object.
  sayHello: function () {
    console.log(
      "Hello, my name is " +
        this.name +
        " and I am " +
        this.age +
        " years old " +
        "working as a " +
        this.occupation +
        "."
    );
  },
};
// This is how you can access object
console.log(jsUser.name); // accessing the value of 'name' key
console.log(jsUser.age); // accessing the value of 'age' key
// We can also access the array
console.log(jsUser.lastLoginDays); // accessing the array
// We can also access the function
jsUser.sayHello(); // calling the function

// below mentioned gives the same output but have different significance
console.log(jsUser.email);
console.log(jsUser["email"]);
// The above two lines of code are doing the same thing but the second one is more flexible.
// The first one is more readable.
// The second one is more flexible because we can use any string as the key.
// console.log(jsUser.full name]); // wrong way, the compiler won't accept this
console.log(jsUser["full name"]);

// This is how we change the key value
jsUser["full name"] = "Harshita Vansh Mishra";
console.log(jsUser["full name"]);

// This is how we can change the value
jsUser.email = "hp@gmail.com";
console.log(jsUser.email);

// We can also add new key-value pair
jsUser["city"] = "Mumbai";
console.log(jsUser.city);

// We can also delete the key-value pair
delete jsUser["full name"];
console.log(jsUser["full name"]); // undefined
console.log(["full name"] in jsUser); // false
console.log(jsUser);

// We can use the Object.freeze() method to freeze the object. This will prevent the object from being changed.
// We can use the Object.seal() method to seal the object so that no one could add new key-value pair but could modify the existing key-value pair.

/*
// 1. Sealing the jsUser  object
Object.seal(jsUser);

// Attempting to add a new property (this will not work)
jsUser["country"] = "India"; // This will not add the country property
console.log("After seal, country:", jsUser.country); // Output: undefined (property not added)

// Modifying an existing property (this will work)
jsUser.email = "hp12345678@gmail.com"; // This will change the email property
console.log("After seal, email:", jsUser.email); // Output: "hp@gmail.com"

// 2. Freezing the jsUser  object
Object.freeze(jsUser);

// Attempting to change a property (this will not work)
jsUser["city"] = "Pune"; // This will not change the city property
console.log("After freeze, city:", jsUser.city); // Output: "Mumbai" (remains unchanged)

// Attempting to add a new property (this will not work)
jsUser["country"] = "India"; // This will not add the country property
console.log("After freeze, country:", jsUser.country); // Output: undefined (property not added)

 */

// Adding a function to the jsUser  object
jsUser["greeting"] = function () {
  console.log("Hello, I am Harshita Vansh Mishra");
};

// Logging the greeting function itself
console.log(jsUser.greeting);
// Output: [Function (anonymous)]
// Explanation: This indicates that 'greeting' is a function and is defined in the jsUser  object.
// The function is an anonymous function expression because it does not have a name in its definition.
// The name 'greeting' refers to the property in the jsUser  object that holds this function.

// If you were to define the function with a name, it would look like this:
jsUser["greeting"] = function greetingFunction() {
  console.log("Hello, I am Harshita Vansh Mishra");
};
// Now, if we log the function again:
console.log(jsUser.greeting);
// Output: [Function: greetingFunction]
// Explanation: Here, 'greetingFunction' is the name of the function itself,
// but it is still assigned to the 'greeting' property of the jsUser  object.
// The function can now be referenced by its name 'greetingFunction' internally,
// but when accessed through the jsUser  object, it is still referred to as 'greeting'.

// Calling the greeting function and logging its output
console.log(jsUser.greeting());
// Output:
// Hello, I am Harshita Vansh Mishra
// Explanation: This is the output from the console.log inside the greeting function,
// which prints the greeting message when the function is called.

// Output: undefined
// Explanation: This is the return value of the greeting function, which is undefined
// because the function does not have a return statement.

// simple way
jsUser.abc = function newfunction() {
  console.log("Hello.................");
};
jsUser.abc();

//------------------------------------------------------------------------------------------------
// Example 2: object.create
// This object.create uses constructor method wherein singleton is made.
const jsUser2 = Object.create(null); // The Object.create() method creates a new object, or adds properties to the existing object.
// We will later discuss in depth on this topic.
//------------------------------------------------------------------------------------------------

