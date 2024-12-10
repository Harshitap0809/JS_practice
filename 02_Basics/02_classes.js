// CLASSES IN JS
// Classes are a program-code template for creating objects. They encapsulate data(variables) and behavior(method) that can be inherited across multiple objects or instances of a class. Classes are a fundamental concept in object-oriented programming (OOP) and are used to define the structure and behavior of objects.
// Those objects will have some state(variables) & some behaviour(functions) inside it.
// class syntax:
class name {
  constructor(parameters) {}
  method(parameters) {}
}
// let objname = new Classname(); // This is how u can create an object

// We generally use class when we want to create multiple objects with the same template
class ToyotaCar {
  // Method to start the car
  start() {
    console.log("Car is started");
  }

  // Method to stop the car
  stop() {
    console.log("Car is stopped");
  }

  // Method to set the brand of the car
  setBrand(brand) {
    this.brandName = brand; // Assigning the brand name to the instance property
  }
}

// Creating two instances 'fortuner' and 'lexus' of the 'ToyotaCar' class
let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");

let lexus = new ToyotaCar();
lexus.setBrand("lexus");

// Log the brandName property of each instance
console.log(fortuner.brandName); // Outputs: fortuner
console.log(lexus.brandName); // Outputs: lexus

// Log the entire fortuner and lexus objects
console.log(fortuner); // Outputs: ToyotaCar { brandName: 'fortuner' }
console.log(lexus); // Outputs: ToyotaCar { brandName: 'lexus' }

// Log the prototype of the fortuner instance to see the methods
console.log(Object.getPrototypeOf(fortuner));
// Outputs: ToyotaCar { start: [Function: start], stop: [Function: stop] }

// Log the methods directly from the class prototype
console.log(ToyotaCar.prototype);
// Outputs: ToyotaCar { start: [Function: start], stop: [Function: stop] }

// Call the methods to demonstrate they are accessible
fortuner.start(); // Outputs: Car is started
lexus.stop(); // Outputs: Car is stopped

// Summary of Differences:
// - The first two outputs (fortuner and lexus) show the values of the brandName properties of the respective objects.
// - The last two outputs show the complete object representations of fortuner and lexus,
//   displaying their structure and the values of their properties.
// - Each object is an instance of the ToyotaCar class, with different brandName values.
// - The methods start and stop are part of the class prototype and can be called on the instances,
//   but they do not appear in the instance logs because they are not properties of the instances themselves.

// Explanation of Prototype Methods:
// - The start and stop methods are part of the ToyotaCar class but are not shown in the output of console.log(fortuner) and console.log(lexus)
//   because JavaScript handles object representation in the console by displaying only the object's own properties.
// - When logging an object, it typically shows properties directly defined on that object instance.
// - In this case, fortuner and lexus have the brandName property set, which is why it appears in the output.
// - Methods defined in the class (like start and stop) are part of the object's prototype, not the object instance itself.
// - They are accessible through the prototype chain, allowing calls like fortuner.start() or lexus.stop().
// - To see the methods, log the prototype of the object:
//   console.log(Object.getPrototypeOf(fortuner)); // Shows methods defined in the ToyotaCar class
// - Or log the entire class prototype:
//   console.log(ToyotaCar.prototype); // Shows all methods defined in the ToyotaCar class

// Summary of Key Points:
// - Instance properties (like brandName) are specific to each object and are not part of the class prototype.
// - Prototype properties (like start and stop) are shared among all instances and are defined on the class prototype.
// - To see instance-specific properties, log the instance itself (e.g., fortuner). -> Object.getPrototypeOf(fortuner)
// - To see shared methods, log the class prototype or the prototype of the instance -> console.log(ToyotaCar.prototype)

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Constructor() method is:
// 1. It is a special method(because 'constructor(){}' is a reserved keyword unlike any other userdefined method names) in a class that is automatically called(invoked) when an object is created from that class.
// 2. It is used to initialize the properties of the class.
// 3. Initializes object.

// We can make our custom 'constructor'
class ToyotaCar1 {
  constructor() {
    // Here method name itself is named as 'constructor'. This is how we make custom constructor.
    console.log("Creating new object"); // as soon as the object is created, automatically the constructor is invoked i.e now this line will be printed first on output.
  }

  start() {
    console.log("Car is started");
  }

  stop() {
    console.log("Car is stopped");
  }

  setBrand(brand) {
    this.brandName = brand;
  }
}

let fortuner1 = new ToyotaCar1(); // in this line, the constructor is invoked. OUTPUT -> Creating new object
// fortuner1.setBrand("fortuner"); not needed for this example

let lexus1 = new ToyotaCar1(); // in this line, again the constructor is invoked. OUTPUT -> Creating new object
// lexus1.setBrand("lexus"); not needed for this example

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// we can also pass arguments to our custom constructor just like we do it in normal methods.
class ToyotaCar2 {
  constructor(brandName, year) {
    console.log("Creating new object 2");
    this.brandName = brandName;
    this.year = year;
  }

  start() {
    console.log("Car is started");
  }

  stop() {
    console.log("Car is stopped");
  }

  // setBrand(brand) {                 // NO NEED TO WRITE THIS METHOD HERE !!
  //   this.brandName = brand;
  // }
  // BECAUSE:
  // The setBrand method is unnecessary here because we can set the brandName directly
  // in the constructor when creating an instance. Use setBrand if you need to change
  // the brandName after the object has been created.
}

let fortuner2 = new ToyotaCar2("fortuner2", "2024"); // passing argument name 'fortuner2'
console.log(fortuner2);

let lexus2 = new ToyotaCar2("lexus2"); // passing argument name 'lexus2'
console.log(lexus2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// the below example shows how to create instances of a class, initialize properties through the constructor,
// and update properties using a method.
class ToyotaCar3 {
  // Constructor to initialize brandName and year when creating an instance
  constructor(brandName, year) {
    console.log("Creating new object 3"); // Log message when a new object is created
    this.brandName = brandName; // Set brandName during instantiation (instantiation: process of creating instance/object)
    this.year = year; // Set year during instantiation
  }

  // Method to start the car
  start() {
    console.log("Car is started");
  }

  // Method to stop the car
  stop() {
    console.log("Car is stopped");
  }

  // Optional method to update the brandName after the object has been created
  setBrand(brand) {
    this.brandName = brand; // Update the brandName property
    console.log(`Brand name updated to: ${this.brandName}`); // Log the updated brand name
  }
}

// Creating instances of ToyotaCar
let fortuner3 = new ToyotaCar3("fortuner3", "2024"); // brandName is set to "fortuner"
console.log(fortuner3.brandName); // Outputs: fortuner

let lexus3 = new ToyotaCar3("lexus3", "2025"); // brandName is set to "lexus"
console.log(lexus3.brandName); // Outputs: lexus

// Updating the brandName using setBrand method
fortuner3.setBrand("fortuner updated"); // Outputs: Brand name updated to: fortuner updated
console.log(fortuner3.brandName); // Outputs: fortuner updated

// The lexus instance remains unchanged
console.log(lexus3.brandName); // Outputs: lexus3

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* IMP CONCEPT 
### Instantiation:
- The lines:
  let fortuner = new ToyotaCar("fortuner", "2024");
  let lexus = new ToyotaCar("lexus", "2025");
  demonstrate instantiation.
  
- New objects `fortuner` and `lexus` are created from the `ToyotaCar` class.
- The `new` keyword is used to create instances of the class.

### Initializing Properties During Construction:
- Inside the constructor method of the `ToyotaCar` class, the lines:
  this.brandName = brandName;
  this.year = year;
  show how properties are initialized during construction.
  
- When the `ToyotaCar` class is created/instantiated:
  - The value "fortuner" is assigned to the `brandName` property of the `fortuner` object.
  - The value "2024" is assigned to the `year` property of the `fortuner` object.
  - The value "lexus" is assigned to the `brandName` property of the `lexus` object.
  - The value "2025" is assigned to the `year` property of the `lexus` object.
*/