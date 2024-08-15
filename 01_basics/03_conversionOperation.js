// --------------------------example 1-----------------------------------
let score = "30";
console.log(typeof score); //string
console.log(typeof score); //string

let valueInNumber = Number(score); //conversion from string to number

console.log(typeof valueInNumber); //number
console.log(valueInNumber); //30

// --------------------------example 2-----------------------------------
let score1 = "30abc";
console.log(typeof score1); //string
console.log(typeof score1); //string

let valueInNumber1 = Number(score1); //conversion from string to number

console.log(typeof valueInNumber1); //number
console.log(valueInNumber1); //NaN (Not a Number) because '30abc' is not a pure number.

// --------------------------example 3-----------------------------------
let score2 = null;
console.log(typeof score2); //object
console.log(typeof score2); //object

let valueInNumber2 = Number(score2); //conversion from null to number

console.log(typeof valueInNumber2); //number
console.log(valueInNumber2); //0

// --------------------------example 4-----------------------------------
let score3 = undefined;
console.log(typeof score3); //undefined
console.log(typeof score3); //undefined

let valueInNumber3 = Number(score3); //conversion from undefined to number

console.log(typeof valueInNumber3); //number
console.log(valueInNumber3); //NaN

// --------------------------example 5-----------------------------------
let score4 = true;
console.log(typeof score4); //boolean
console.log(typeof score4); //boolean

let valueInNumber4 = Number(score4); //conversion from boolean to number

console.log(typeof valueInNumber4); //number
console.log(valueInNumber4); //1

// --------------------------example 6-----------------------------------
let score5 = "harshita";
console.log(typeof score5); //string
console.log(typeof score5); //string

let valueInNumber5 = Number(score5); //conversion from string to number

console.log(typeof valueInNumber5); //number
console.log(valueInNumber5); //NaN

// --------------------------example 7-----------------------------------
let isLogged = 5;
console.log(typeof isLogged); //number
console.log(typeof isLogged); //number

let booleanIsLoggedIn = Boolean(isLogged); //conversion from number to boolean

console.log(typeof booleanIsLoggedIn); //boolean
console.log(booleanIsLoggedIn); //true

// --------------------------example 8-----------------------------------
let isLogged1 = "harshita";
console.log(typeof isLogged1); //string
console.log(typeof isLogged1); //string

let booleanIsLoggedIn1 = Boolean(isLogged1); //conversion from string to boolean

console.log(typeof booleanIsLoggedIn1); //boolean
console.log(booleanIsLoggedIn1); //true

// --------------------------example 9-----------------------------------
let isLogged2 = "";
console.log(typeof isLogged2); //string
console.log(typeof isLogged2); //string

let booleanIsLoggedIn2 = Boolean(isLogged2); //conversion of empty string to boolean

console.log(typeof booleanIsLoggedIn2); //boolean
console.log(booleanIsLoggedIn2); //false

// --------------------------example 10-----------------------------------
let somenumber = 10;
console.log(typeof somenumber); //number
console.log(typeof somenumber); //number

let stringNumber = String(somenumber); //conversion of number to string
console.log(typeof stringNumber); //string
console.log(stringNumber); //10

// Here are the conclusions of the 10 examples point-wise:

// Example 1:
// A string can be converted to a number using the Number() function.
// The resulting value is a number.

// Example 2:
// If a string contains non-numeric characters, converting it to a number using Number() results in NaN (Not a Number).
// NaN is a special value in JavaScript that represents an invalid or unreliable numeric result.

// Example 3:
// null is converted to 0 when using the Number() function.
// This is because null is considered a "falsy" value, and when converted to a number, it becomes 0.

// Example 4:
// undefined is converted to NaN when using the Number() function.
// This is because undefined is not a valid numeric value.

// Example 5:
// A boolean value (true or false) can be converted to a number using the Number() function.
// true is converted to 1, and false is converted to 0.

// Example 6:
// If a string cannot be parsed as a number, converting it to a number using Number() results in NaN.
// This is the case when the string contains non-numeric characters or is not a valid numeric representation.

// Example 7:
// A number can be converted to a boolean value using the Boolean() function.
// Any non-zero value is converted to true, and 0 is converted to false.

// Example 8:
// A string can be converted to a boolean value using the Boolean() function.
// If the string is not empty, it is converted to true. In this case, the string "harshita" is converted to true.

// Example 9:
// An empty string is converted to false when using the Boolean() function.
// This is because an empty string is considered a "falsy" value, and when converted to a boolean, it becomes false.

// Example 10:
// A number can be converted to a string using the String() function.
// The resulting value is a string representation of the original number. In this case, the number 10 is converted to the string "10".
