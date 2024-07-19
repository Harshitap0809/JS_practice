// example of var keyword
function exampleVar() {
    if (true) {
        var x = 10; //'x' is function-scoped
    }
    // console.log(x);//output:10 (x is accessible here)
}
exampleVar();

//example of let keyword. Same is applicable for const keyword , const is also block scoped
function exampleLet() {
    if (true) {
        let y = 10;//'a' is block scoped
    }
    console.log(y);//output:'a' is not defined(a is not accessible here)
}
exampleLet();

//Understanding the difference between undefined and undeclared 
//undefined example 1
function exampleUndefined1() {
    let a;
    console.log(a);//output:undefined. Occurs when a variable is declared but not been assigned with any value
}
exampleUndefined1();

//undefined example 2
var a;
function exampleUndefined2() {
    console.log(a);//output:undefined
}
exampleUndefined2();

//undeclare example
function exampleUndeclared() {
    console.log(b);//output : 'b' is not defined. Occurs when a variable does not exist in the current scope at all
}
exampleUndeclared();

//using console.Table([]) to print all variables together in tabular format
let accountEmail = "abc@gmail.com"
const accountPass = "123@abc"
var accountCity = "Mumbai"
let accountDetails;//undefined
// accountName; //ReferenceError: accountName is not defined(undeclared)
console.table([accountEmail,accountPass,accountCity,accountDetails]);

