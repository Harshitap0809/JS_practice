//basic comparison includes :
console.log(2 > 1); //T
console.log(2 < 1); //F
console.log(2 >= 1); //T
console.log(2 <= 1); //F
console.log(2 == 1); //F
console.log(2 != 1); //T

console.log("2" > 1);//F JS has automatically converted "2" into 2 (Extra knowledge : TypeScript doesn't allow u to do conversion of two different datatypes. It has certain strict rules.)
console.log("02" > 1);//F
console.log("02" == 2); //T
console.log(null > 0); //F it is internally comparing 0>0
console.log(null < 0); //F it is internally comparing 0<0
console.log(null == 0); //F it is internally comparing emptyspace==0
console.log(null === 0); //F it is internally comparing emptyspace===0
console.log(null != 0); //T it is internally comparing emptyspace!=0
console.log(null >= 0); //T it is internally comparing 0>=0
console.log(null <= 0); //T it is internally comparing 0<=0

// NOTE : THE REASON IS THAT AN EQUALITY CHECKER == AND COMPARISONS > < >= <= WORKS DIFFERENTLY.
// COMPARISONS CONVERT NULL TO A NUMBER, TREATING IT AS 0. THAT'S WHY null>=0 is true and null>0 false.

console.log(null == undefined); //T According to the JavaScript specification, null and undefined are considered equal when using == Therefore, null == undefined returns true.
console.log(null != undefined); //F
console.log(null === undefined); //F The === operator is the strict equality operator, which checks for equality without performing type conversion.Since null and undefined are different types (null is an object and undefined is its own type), null === undefined is false.

console.log(undefined > 0); //F When comparing undefined with a number, JavaScript converts undefined to NaN (Not-a-Number) in the context of comparison.Any comparison involving NaN (e.g., NaN > 0) returns false.Therefore, undefined > 0 is false.
console.log(undefined < 0); //F
console.log(undefined == 0); //F
console.log(null > undefined); //F When comparing null and undefined, JavaScript attempts to convert them into numbers.Null converts to 0, and undefined converts to NaN.Any comparison involving NaN returns false.Therefore, null > undefined is false

// NOTE:
// The == operator is the loose equality operator, which checks for equality after performing type conversion (also known as type coercion).
// The === operator is the strict equality operator, which checks for equality without performing type conversion.

console.log("2" === 2); //Strict check. Its checks the value and datatype both
