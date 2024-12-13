// INHERITANCE IN JS :
// Inheritance is passing down properties & methods from parent class to child class.

/* Syntax:
 class Parent {
 
 }
 class Child extends Parent {
 
 }
*/

// --------------------------------------------------------------------------------------------------------------

// Basic example 1:
class Parent {
  hello() {
    console.log("hello");
  }
}
class Child extends Parent {}
let obj = new Child();

console.log(obj); // output: Child{} -> it is an object of child class
console.log(obj.hello()); // output: hello -> it is able to inherit the function of parent class
// console.log(obj.abc()); // this will give error because it does not exist anywhere in class.
console.log("-------------------------------------------");

// --------------------------------------------------------------------------------------------------------------

// example 2: (NOTE: If Child and Parent have same method, child's method will be used [Method Overrriding])

class Person {
  constructor() {
    this.species = "homo sapiens";
  }
  eat() {
    console.log("eats");
  }
  sleep() {
    console.log("sleeps");
  }
  work() {
    console.log("do nothing :(");
  }
}
class Engineer extends Person {
  work() {
    console.log("Solves problem, build something :)");
  }
}
class Doctor extends Person {
  work() {
    console.log("treat patients :)");
  }
}
let harshitaObj1 = new Engineer();
console.log(harshitaObj1.work()); // output: Solves problem, build something :) -> If Child and Parent have same method, child's method will be used.
console.log(harshitaObj1.eat()); // output: eats
console.log(harshitaObj1.sleep()); // output: sleeps
console.log("-------------------------------------------");

let harshitaObj2 = new Doctor();
console.log(harshitaObj2.work()); // output: treat patients :) -> If Child and Parent have same method, child's method will be used.
console.log(harshitaObj2.eat()); // output: eats
console.log("-------------------------------------------");

let person1 = new Person();
console.log(person1); // output : Person { species: 'homo sapiens' }
console.log("-------------------------------------------");

let engineer1 = new Engineer();
console.log(engineer1); // output : Engineer { species: 'homo sapiens' } -> inherits the parent class property
console.log("-------------------------------------------");

let doctor1 = new Doctor();
console.log(doctor1); // output : Doctor { species: 'homo sapiens' } -> inherits the parent class property

// --------------------------------------------------------------------------------------------------------------

// SUPER KEYWORD: The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
/* SYNTAX: 
  super (args)// calls Parent's Constructor
  super.parentMethod (args)
*/

// Example of super keyword
/*
class Person1 {
  // parent class
  constructor() {
    this.species = "homo sapiens"; // inside this class Person1, we have a constructor which initializes the variables'spieces' with value "homo sapiens"
  }
  eat() {
    console.log("eats");
  }
}
class Engineer1 extends Person1 {
  // child class (derived class)
  constructor(branch) {
    // made a constructor in child class; so we need to use the 'super keyword' first.
    this.branch = branch;
  }
  work() {
    console.log("Solves problem, build something :)");
  }
}
let engObj = new Engineer1("Computer Science Engineer");
 */
// The above code will actually give us an error stating "ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor"
// This is because we are trying to access 'this' before calling the parent class's constructor using
// super() in the child class's constructor. To fix this, we need to call the parent
// class's constructor using super() before accessing 'this' in the child class's constructor.

// So, the corrected code is:
console.log("-------------------------------------------");
class Person2 {
  // parent class
  constructor() {
    this.species = "homo sapiens 2"; // inside this class Person1, we have a constructor which initializes the variables'spieces' with value "homo sapiens"
  }
  eat() {
    console.log("eats");
  }
}
class Engineer2 extends Person2 {
  // child class (derived class)
  constructor(branch) {
    // made a constructor in child class; therefore we must use the 'super keyword' first.
    super(); // used to invoke parent class constructor
    this.branch = branch;
  }
  work() {
    console.log("Solves problem, build something :)");
  }
}
let engObj2 = new Engineer2("Computer Science Engineer 2");
console.log(engObj2);

// Now If we want to know the seqauence of which constructor was called first then do this :
console.log("-------------------------------------------");
class Person3 {
  constructor() {
    console.log("Enter PARENT CONSTRUCTOR");
    this.species = "homo sapiens 2";
    console.log("Exit PARENT CONSTRUCTOR");
  }
  eat() {
    console.log("eats");
  }
}
class Engineer3 extends Person3 {
  constructor(branch) {
    console.log("Enter CHILD CONSTRUCTOR");
    super();
    this.branch = branch;
    console.log("Exit CHILD CONSTRUCTOR");
  }
  work() {
    console.log("Solves problem, build something :)");
  }
}
let engObj3 = new Engineer3("Computer Science Engineer 2");
console.log(engObj2);
console.log("-------------------------------------------");

// EXAMPLE 2 : Constructor chaining
class Person4 {
  constructor(name) {
    this.species = "homo sapiens";
    this.name = name;
  }
  eat() {
    console.log("eating");
  }
}

class Engineer4 extends Person4 {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }
  work() {
    super.eat(); // I like to eat first and then work, hehe :], so eat() function must be executed first for me..
    console.log("Engineer is working smartly");
  }
}

class Skills extends Engineer4 {
  constructor(name, branch, skill) {
    // The above line defines a constructor in the 'Skills' class that demonstrates 'constructor chaining' by calling the parent class's constructor to initialize inherited properties.
    // In below line, Passing arguments to super() is called passing arguments to the parent class constructor. This allows you to provide specific values to the parent class's constructor when creating an instance of the child class.
    super(name, branch);
    this.skill = skill;
  }
}

let skillsObj = new Skills(
  "Harshita",
  "Computer Science Department",
  "Problemsolving"
);
console.log(skillsObj);
console.log(skillsObj.eat());
console.log(skillsObj.work()); // eat() function is prioritized first in the output
