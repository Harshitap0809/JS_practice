// ************************Operations****************************
let value = 3;
let negValue = -value;
console.log(negValue);
//---------------------------------------------------------------------------------------------------------------------
console.log(2 * 2);
console.log(2 + 2);
console.log(2 - 2);
console.log(2 ** 3);
console.log(2 % 2);
console.log(2 / 2);
//---------------------------------------------------------------------------------------------------------------------
let str1 = "hello ";
let str2 = "harshita";
let str3 = str1 + str2;
// console.log(str3);
//---------------------------------------------------------------------------------------------------------------------
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);//122 (if string comes first, JS will treat rest of them as strings only)
console.log(1 + 2 + "2");//32 (vice versa)
console.log(3 + 4 * 5 % 3);//According to BODMAS rule,follow this sequence=>4*5=20, 20%3=2, 3+2=5 (first multiply then modulus then addition)

console.log(true);
console.log(+true);//The unary plus operator (+) is used to convert the boolean value true to a number
//console.log(true+);//error (unexpected token). The + operator is a binary operator, meaning it expects two operands (e.g., a + b).
console.log(+"");//Here, the unary plus operator (+) is used to convert an empty string ("")) to a number.If the string is empty or doesn't contain any numeric characters, the result will be 0. So, in this case, +"" evaluates to 0
console.log(+"123"); // outputs 123
console.log(+"abc"); // outputs NaN (Not a Number)

//NOTE :
//Unary plus: When used with a single operand, + is a unary operator that converts its operand to a number. This is what happens in +true, where true is converted to 1.
//Binary addition: When used with two operands, + is a binary operator that adds the two values together. This is what's expected in true+, but since there's no second operand, it throws a syntax error.

//---------------------------------------------------------------------------------------------------------------------
// let num1,num2,num3 
// num1=num2=num3=3
// console.log(num1);//3
// console.log(num1,num2,num3);//3

let num1, num2, num3 = 3 + 3; //This is not the correct syntax.In JavaScript, when you want to declare multiple variables and assign values to them, you need to use the assignment operator (=) for each variable separately.
console.log(num1);//undefined
console.log(num2);//undefined
console.log(num3);//6

// To declare and assign values to multiple variables, you should use the following syntax:
let num4 = 1, num5 = 2, num6 = 3;
console.log(num4);
console.log(num5);
console.log(num6);

// Alternatively, you can also use destructuring assignment to declare and assign values to multiple variables in a single statement:
// let [num1, num2, num3] = [0, 0, 3+3];
// console.log(num1);
// console.log(num2);
// console.log(num3);
//---------------------------------------------------------------------------------------------------------------------

// let gamecounter= 100;
// gamecounter++;
// console.log(gamecounter);//101

// let gamecounter= 100;
// ++gamecounter;
// console.log(gamecounter);//101


// Let's see an example to illustrate the difference:
let gamecounter = 100;
let result = gamecounter++; //With postfix increment (gamecounter++), result gets the original value (100) before the increment.
console.log(gamecounter); //101.
console.log(result); //100.
console.log(`gamecounter:${gamecounter},result:${result}`);//use Backtick, this is not ''

// let gamecounter = 100;
// let result = ++gamecounter; //With prefix increment (++gamecounter), result gets the new value (101) after the increment.
// console.log(gamecounter); //101.
// console.log(result); //101.

// // Conclusion:
// The key difference between postfix and prefix increment is the order of operations:

// Postfix increment returns the original value and then increments.
// Prefix increment increments and then returns the new value.
// link to study : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
//---------------------------------------------------------------------------------------------------------------------
