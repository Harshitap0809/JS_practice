"use strict"; //treat all JS code as newer version, all the code in this file will be treated as per new standard.

// alert(3+3); // gives error: alert is not defined. Because nodejs can not directly use alert,this syntax only works on browser not on node.
// console.log(3+3); // this will work in nodejs, because console.log is a function that prints its argument to the console, and it works in Nodejs. In a browser environment, console.log would print to the browser's console, but in Nodejs, it prints to the terminal or command prompt.

// console.log(3+3) console.log("harshita"); //error
// console.log(3+3); console.log("harshita"); //no error

// console.log(3
    // +3)         // no error, spaces and newline inside method/function are been avoided by JS but this is not a good practice, code readability should be the priority.


//Datatypes that we use in JS :
// number => 2 to power 53 
// BigInt
// string => ""
// boolean => true/false
// null => standalone value. It is the representation of an empty value. You can also assign 'null' as a value.
// undefined => when the variable is declared but the value is not assigned.
// symbol => mostly used for uniqueness, implementation is mostly seen in REACT.

// object => non-primitive data type. Below is the example code
// In JavaScript, the typeof operator is used to determine the type of a value.
console.log(typeof "harshita"); // o/p: string
console.log(typeof 12); //o/p: number 
console.log(typeof undefined); //o/p: undefined
console.log(typeof String); // o/p: function
console.log(typeof BigInt); // o/p: function
console.log(typeof boolean); // o/p: undefined
console.log(typeof Object); //o/p: function
console.log(typeof Symbol); //o/p: function
console.log(typeof null);//o/p: object

//explanation:The typeof operator returning "object" for null is actually a long-standing bug in JavaScript, dating back to the early days of the language. 
//null is supposed to represent the absence of any object value, and logically it should return "null". 
//Internally, objects in JavaScript are represented as pointers to memory addresses. The original implementation of JavaScript used a value of zero to represent null, which corresponds to a null pointer in many systems.
//Since typeof checks whether a value is a reference to an object and null was represented as such a pointer, it incorrectly returns "object".









