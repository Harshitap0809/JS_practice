// We have created an object where 'myDate' is an instance of 'Date()'.
// 'Date' is a built-in JavaScript constructor function for handling dates and times.
// So, 'myDate' is an object created from the Date constructor.

let myDate = new Date();

console.log(typeof myDate); // Output: object
console.log(typeof Date);   // Output: function

// Displaying different representations of the Date object 'myDate'
console.log(myDate);                    // Output: 2024-09-24T13:26:44.395Z
console.log(myDate.toString());         // Output: Tue Sep 24 2024 18:58:24 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());     // Output: Tue Sep 24 2024
console.log(myDate.toISOString());      // Output: 2024-09-24T13:31:51.998Z
console.log(myDate.toJSON());           // Output: 2024-09-24T13:31:51.998Z
console.log(myDate.toLocaleString());   // Output: 24/9/2024, 7:01:51 pm
console.log(myDate.toLocaleDateString()); // Output: 24/9/2024
console.log(myDate.toLocaleTimeString()); // Output: 7:01:51 pm

// Creating a custom date 'myCreatedDate'
let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString()); // Output: Mon Jan 23 2023
// Note: In JavaScript, months are zero-indexed (0 = January, 1 = February, etc.)

// Creating a custom date with time 'myCreatedDate1'
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate1.toLocaleString()); // Output: 23/1/2023, 5:03:00 am

// Invalid date example
let myCreatedDate2 = new Date("2023-00-14"); // '2023-00-14' is invalid because months start from '1'
console.log(myCreatedDate2.toLocaleString()); // Output: Invalid Date

// Correct date format
let myCreatedDate3 = new Date("2023-01-14");
console.log(myCreatedDate3.toLocaleDateString()); // Output: 14/1/2023

// Using Date.now() to get the current timestamp
let myTimeStamp = Date.now();
console.log(myTimeStamp); // Output: A large number representing milliseconds since Jan 1, 1970
console.log(myCreatedDate3.getTime()); // Output: 1673654400000 (timestamp of 'myCreatedDate3')
console.log(Date.now()); // Output: Another timestamp in milliseconds
console.log(Date.now() / 1000); // Output: Seconds since 1st Jan 1970
console.log(Math.floor(Date.now() / 1000)); // Output: Floor value of seconds since 1st Jan 1970

// Explanation: The main differences between 'new Date()' and 'Date.now()' are:

// 1. Return type:
// 'new Date()' returns a Date object, while 'Date.now()' returns a numeric timestamp in milliseconds.

// 2. Purpose:
// 'new Date()' is used to create a Date object for date/time manipulation.
// 'Date.now()' is used to get the current timestamp, useful for logging, measuring time intervals, etc.

// Use cases:
// Use 'new Date()' when you need to work with a Date object (e.g., formatting dates or performing date arithmetic).
// Use 'Date.now()' when you need the current timestamp (e.g., for logging or performance measurement).

// Getting individual components of the current date
let newDate = new Date();

console.log(newDate);                    // Current Date Object
console.log(newDate.getDate());          // Day of the month (1-31)
console.log(newDate.getDay());           // Day of the week (0 = Sunday, 1 = Monday, etc.)
console.log(newDate.getFullYear());      // Current year
console.log(newDate.getHours());         // Current hour (0-23)
console.log(newDate.getMonth() + 1);     // Month (Adding 1 because months are zero-indexed)
console.log(newDate.getMilliseconds());  // Milliseconds part of the current time
console.log(newDate.getSeconds());       // Seconds part of the current time
console.log(newDate.getTime());          // Timestamp (milliseconds since Jan 1, 1970)

// String interpolation using backticks for formatting
console.log(`This is day ${newDate.getDay()} and this is time ${newDate.getTime()}`);
