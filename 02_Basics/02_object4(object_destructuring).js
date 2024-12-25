// 1. Object destructuring allows you to extract properties from an object and assign them to variables.
// This is a concise way to access multiple properties of an object at once.

const individual = { fullName: "Alice", years: 25 }; // Created an object named 'individual' with properties 'fullName' and 'years'

// 2. You can extract properties from the object using curly braces.
// Syntax:
// const { property1, property2 } = object;

const { fullName, years } = individual;

// 3. Now, 'fullName' and 'years' variables hold the values from the 'individual' object.
console.log(fullName); // Alice
console.log(years); // 25

// 4. You can also rename the variables while destructuring.
const { fullName: personFullName, years: personYears } = individual;
console.log(personFullName); // Alice
console.log(personYears); // 25

// 5. You can provide default values in case a property does not exist in the object.
const { nation = "Unknown" } = individual;
console.log(nation); // Unknown

// 6. You can destructure nested objects.
const account = { details: { first: "John", last: "Doe" } }; // Create an object 'account' with a nested 'details' object containing 'first' and 'last' properties
const {
  details: { first, last },
} = account;
console.log(first); // John
console.log(last); // Doe

// 7. You can also destructure arrays inside objects.
const userDetails = {
  userName: "Harshita",
  interests: ["cooking", "lawn-tennis"],
};
const {
  interests: [interest1, interest2],
} = userDetails;
console.log(interest1); // cooking
console.log(interest2); // lawn-tennis

// 8. If the property is missing in the object, the variable will be undefined unless a default value is provided.
const { location } = individual;
console.log(location); // undefined
console.log("\n--------------------------------------\n");

// 1. Beginner Level - Extracting Basic User Information
console.log("Task 1 - Beginner Level:");

/*
  Problem Statement:
  You are given an object representing a user, which contains properties like `fullName`, `emailAddress`, and `years`.
  Destructure the object to extract the `fullName` and `emailAddress` properties and log them to the console.
  This problem tests your ability to extract basic information from an object using destructuring.
*/

const userInfo1 = {
  fullname: "Alice",
  emailAddress: "alice@example.com",
  years: 25,
};

// Destructuring to extract `fullname` and `emailAddress`
const { fullname, emailAddress } = userInfo1;

console.log("Full Name:", fullname); // Output: Alice
console.log("Email Address:", emailAddress); // Output: alice@example.com

console.log("\n--------------------------------------\n");

// 2. Beginner Level - Destructuring with Renaming
console.log("Task 2 - Beginner Level:");

/* 
  Problem Statement:
  You are given an object representing a car with properties `brand`, `modelType`, and `manufactureYear`. 
  You need to destructure the object and rename the `manufactureYear` property to `yearOfManufacture` while extracting it.
  This tests your ability to rename variables during object destructuring.
*/

const automobile = {
  brand: "Toyota",
  modelType: "Camry",
  manufactureYear: 2023,
};

// Destructuring and renaming `manufactureYear` to `yearOfManufacture`
const { brand, modelType, manufactureYear: yearOfManufacture } = automobile;

console.log("Brand:", brand); // Output: Toyota
console.log("Model Type:", modelType); // Output: Camry
console.log("Year of Manufacture:", yearOfManufacture); // Output: 2023

console.log("\n--------------------------------------\n");

// 3. Intermediate Level - Default Values for Missing Properties
console.log("Task 3 - Intermediate Level:");

/* 
  Problem Statement:
  You are given an `item` object that contains properties like `itemName`, `itemPrice`, and an optional `discountAmount`. 
  The `discountAmount` property might not always be present. If it's missing, assign it a default value of 0.
  This problem demonstrates the use of default values for properties that may be absent.
*/

const item1 = { itemName: "Smartphone", itemPrice: 500 };

// Destructuring with default value for `discountAmount`
const { itemName: productName, itemPrice, discountAmount = 0 } = item1;

console.log("Product Name:", productName); // Output: Smartphone
console.log("Item Price:", itemPrice); // Output: 500
console.log("Discount Amount:", discountAmount); // Output: 0

console.log("\n--------------------------------------\n");

// 4. Intermediate Level - Destructuring Nested Objects
console.log("Task 4 - Intermediate Level:");

/* 
  Problem Statement:
  You are given a `userProfileData` object, which contains a nested object `residence` that has properties `cityName` and `postalCode`. 
  You need to destructure the `residence` object from the `userProfileData` and extract the `cityName` and `postalCode` properties.
  This problem tests your ability to destructure nested objects.
*/

const userProfileData = {
  userName: "John",
  residence: { cityName: "New York", postalCode: "10001" },
};

// Destructuring the nested `residence` object
const {
  residence: { cityName, postalCode },
} = userProfileData;

console.log("City Name:", cityName); // Output: New York
console.log("Postal Code:", postalCode); // Output: 10001

console.log("\n--------------------------------------\n");

// 5. Intermediate Level - Destructuring Arrays Inside Objects
console.log("Task 5 - Intermediate Level:");

/* 
  Problem Statement:
  You have a `userHobbies` object containing a `favoriteHobbies` array with multiple items. 
  Destructure the array to extract the first two hobbies and log them to the console.
  This problem tests your ability to destructure arrays inside an object.
*/

const userHobbies = {
  userName: "Alice",
  favoriteHobbies: ["reading", "traveling", "gaming"],
};

// Destructuring the `favoriteHobbies` array inside the object
const {
  favoriteHobbies: [hobbyOne, hobbyTwo],
} = userHobbies;

console.log("Hobby One:", hobbyOne); // Output: reading
console.log("Hobby Two:", hobbyTwo); // Output: traveling

console.log("\n--------------------------------------\n");

// 6. Advanced Level - Destructuring Nested Objects and Arrays
console.log("Task 6 - Advanced Level:");

/* 
  Problem Statement:
  You are given an object `purchaseOrder` that contains a nested `itemsList` array. Each item in the array is an object containing properties `itemName` and `itemQuantity`. 
  Destructure the `purchaseOrder` object to extract the `itemName` and `itemQuantity` of the first item in the `itemsList` array.
  This problem demonstrates nested destructuring with arrays inside objects.
*/

const purchaseOrder = {
  orderId: 101,
  itemsList: [
    { itemName: "Shirt", itemQuantity: 2 },
    { itemName: "Pants", itemQuantity: 1 },
  ],
};

// Destructuring the `itemsList` array and object properties
const {
  itemsList: [{ itemName: firstItemName, itemQuantity }],
} = purchaseOrder;

console.log("First Item Name:", firstItemName); // Output: Shirt
console.log("Item Quantity:", itemQuantity); // Output: 2

console.log("\n--------------------------------------\n");

// 7. Intermediate Level - Destructuring with Computed Property Names
console.log("Task 7 - Intermediate Level:");

/* 
  Problem Statement:
  You have an object `dynamicData` with properties `userName`, `userAge`, and `locationCity`. The property `locationCity` is stored in a variable `cityKey`. 
  Using computed property names, destructure the `locationCity` property from the object dynamically.
  This problem tests your ability to use computed property names for destructuring.
*/

const dynamicData = { userName: "Alice", userAge: 30, locationCity: "NYC" };
const cityKey = "locationCity";

// Destructuring with computed property names
const { userName, userAge, [cityKey]: city } = dynamicData;

console.log("User Name:", userName); // Output: Alice
console.log("User Age:", userAge); // Output: 30
console.log("City:", city); // Output: NYC

// Computed properties Definition:
// Computed properties allow you to create object property names dynamically
// using variables or expressions instead of hardcoding them.

// Usefulness:
// They are useful in scenarios like dynamic forms, API responses, and
// configuration settings, enabling flexible and adaptable code that can
// change based on user input or other conditions.

// Example:
const dynamicKey = "username"; // Define a variable for the property name
const user = {
  [dynamicKey]: "Alice", // Use computed property to set the property name dynamically
  age: 30,
};

console.log(user); // Output: { username: 'Alice', age: 30 }

console.log("\n--------------------------------------\n");

// 8. Beginner Level - Extracting Multiple Properties at Once
console.log("Task 8 - Beginner Level:");

/* 
  Problem Statement:
  You are given an object `learner` with properties `firstName`, `lastName`, and `age`. 
  Use object destructuring to extract all the properties and log them.
  This problem tests your ability to extract multiple properties from an object.
*/

const learner = { firstName: "Jane", lastName: "Doe", age: 22 };

// Destructuring the object
const {
  firstName: learnerFirstName,
  lastName: learnerLastName,
  age: learnerAge,
} = learner;

console.log("First Name:", learnerFirstName); // Output: Jane
console.log("Last Name:", learnerLastName); // Output: Doe
console.log("Age:", learnerAge); // Output: 22

console.log("\n--------------------------------------\n");

// 9. Advanced Level - Renaming Nested Properties During Destructuring
console.log("Task 9 - Advanced Level:");

/* 
  Problem Statement:
  You are given an object `userProfileData2` which contains a nested `addressDetails` object. The `addressDetails` object contains properties `cityName` and `postalCode`. 
  Destructure the object to rename `cityName` to `userCityName` and `postalCode` to `userPostalCode` during extraction.
  This problem tests your ability to rename properties during nested destructuring.
*/

const userProfileData2 = {
  userName: "Michael",
  addressDetails: { cityName: "Berlin", postalCode: "10115" },
};

// Destructuring with renaming
const {
  addressDetails: { cityName: userCityName, postalCode: userPostalCode },
} = userProfileData2;

console.log("User City Name:", userCityName); // Output: Berlin
console.log("User Postal Code:", userPostalCode); // Output: 10115

console.log("\n--------------------------------------\n");

// 10. Beginner Level - Handling Undefined Values
console.log("Task 10 - Beginner Level:");

/* 
  Problem Statement:
  You have an object `userProfile` with properties `userName`, `emailAddress`, and `phoneNumber`. 
  Destructure the object to extract the `userName` and `emailAddress` properties. If `phoneNumber` does not exist, log a message stating it is missing.
  This problem tests your ability to handle undefined properties during destructuring.
*/

const userProfile = { userName: "Tom", emailAddress: "tom@example.com" };

// Destructuring with handling of missing `phoneNumber` property
const {
  userName: profileUserName,
  emailAddress: profileEmail,
  phoneNumber,
} = userProfile;

console.log("User Name:", profileUserName); // Output: Tom
console.log("Email Address:", profileEmail); // Output: tom@example.com
if (!phoneNumber) {
  console.log("Phone Number: Missing"); // Output: Phone Number: Missing
}

console.log("\n--------------------------------------\n");

// 11. Intermediate Level - Destructuring Arrays from Nested Objects
console.log("Task 11 - Intermediate Level:");

/* 
  Problem Statement:
  You are given a `productDetails` object with a `reviewsList` array. Each review is an array containing `[rating, comment]`. 
  Destructure the first review to extract the `rating` and `comment`.
  This problem tests your ability to destructure arrays from nested objects.
*/

const productDetails = {
  productName: "Laptop",
  reviewsList: [
    [5, "Excellent"],
    [4, "Good"],
  ],
};

// Destructuring the first review
const {
  reviewsList: [[rating, comment]],
} = productDetails;

console.log("Rating:", rating); // Output: 5
console.log("Comment:", comment); // Output: Excellent

console.log("\n--------------------------------------\n");

// 12. Advanced Level - Destructuring with Default Values for Nested Properties
console.log("Task 12 - Advanced Level:");

/* 
  Problem Statement:
  You are given an object `userProfileData3` with a nested `addressDetails` object. If `postalCode` is missing from the `addressDetails` object, 
  provide a default value of `"Unknown"`. Destructure the `addressDetails` and extract `cityName` and `postalCode`.
  This problem demonstrates the use of default values for nested properties.
*/

const userProfileData3 = {
  userName: "Sarah",
  addressDetails: { cityName: "Paris" },
};

// Destructuring with default value for missing `postalCode`
const {
  addressDetails: { cityName: userCityName1, postalCode1 = "Unknown" },
} = userProfileData3;

console.log("City Name:", userCityName1); // Output: Paris
console.log("Postal Code:", postalCode1); // Output: Unknown

console.log("\n--------------------------------------\n");

// 13. Beginner Level - Extracting Nested Values
console.log("Task 13 - Beginner Level:");

/* 
  Problem Statement:
  You are given a `productInfo` object with a nested `specifications` object that contains `weight` and `dimensions`. 
  Destructure to extract `weight` and `dimensions`.
  This problem tests your ability to extract nested values from an object.
*/

const productInfo = {
  productName: "Phone",
  specifications: { weight: "200g", dimensions: "150x75x8mm" },
};

// Destructuring nested `specifications` object
const {
  specifications: { weight, dimensions },
} = productInfo;

console.log("Weight:", weight); // Output: 200g
console.log("Dimensions:", dimensions); // Output: 150x75x8mm

console.log("\n--------------------------------------\n");

// 14. Advanced Level - Destructuring with Function Parameters
console.log("Task 14 - Advanced Level:");

/* 
function name(params) {
  
}
  Problem Statement:
  You are given a function `displayUserInfo` that takes an object as a parameter. The object contains properties `name`, `age`, and `country`. 
  Use destructuring to extract these properties directly in the function parameters and log them to the console.
  This problem tests your ability to use destructuring in function parameters.
*/

function displayUserInfo({ name, age, country }) {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Country:", country);
}

// Example object to pass to the function
const user1 = {
  name: "Alice",
  age: 30,
  country: "USA",
};

// Calling the function with the user1 object
displayUserInfo(user1);
/*
  Output:
  Name: Alice
  Age: 30
  Country: USA
*/

// Another direct way: Directly calls the displayUser Info function with user details as an argument.
displayUserInfo({ name: "harshita", age: 21, country: "india" });

console.log("\n--------------------------------------\n");

// 15. Intermediate Level - Destructuring with Rest Operator
console.log("Task 15 - Intermediate Level:");

/* 
  Problem Statement:
  You are given an array of numbers representing scores. Use destructuring along with the rest operator to extract the first score 
  and store the rest of the scores in a separate array. Log both the first score and the rest of the scores to the console.
  This problem tests your ability to use the rest operator with destructuring.
*/

const scores = [95, 85, 76, 88, 90];

// Destructuring with rest operator
const [firstScore, ...restScores] = scores;

console.log("First Score:", firstScore); // Output: 95
console.log("Rest of the Scores:", restScores); // Output: [85, 76, 88, 90]

console.log("\n--------------------------------------\n");

// 16. Advanced Level - Destructuring with Nested Arrays and Objects
console.log("Task 16 - Advanced Level:");

/* 
  Problem Statement:
  You are given an object `team` that contains a nested array `members`. Each member is an object with properties `name` and `role`. 
  Destructure the `team` object to extract the name and role of the first member in the `members` array.
  This problem tests your ability to destructure nested arrays and objects.
*/

const team = {
  teamName: "Development",
  members: [
    { name: "John", role: "Developer" },
    { name: "Jane", role: "Designer" },
  ],
};

// Destructuring the first member's name and role
const {
  members: [{ name: firstMemberName, role: firstMemberRole }],
} = team;

console.log("First Member Name:", firstMemberName); // Output: John
console.log("First Member Role:", firstMemberRole); // Output: Developer

console.log("\n--------------------------------------\n");

// 17. Advanced Level - Destructuring with Function Return Values
console.log("Task 17 - Advanced Level:");

/* 
  Problem Statement:
  You have a function `getUserData` that returns an object containing user information. 
  Destructure the returned object to extract `name`, `age`, and `email` properties.
  This problem tests your ability to destructure values returned from a function.
*/

function getUserData() {
  return {
    name: "Alice",
    age: 28,
    email: "alice@example.com",
  };
}

// Destructuring the returned object
const { name: userName0, age: userAge0, email: userEmail } = getUserData();

console.log("User  Name:", userName0); // Output: Alice
console.log("User  Age:", userAge0); // Output: 28
console.log("User  Email:", userEmail); // Output: alice@example.com

console.log("\n--------------------------------------\n");

// 18. Intermediate Level - Destructuring with Nested Arrays
console.log("Task 18 - Intermediate Level:");

/* 
  Problem Statement:
  You are given an object `project` that contains a nested array `tasks`. Each task is an object with properties `taskName` and `status`. 
  Destructure the `project` object to extract the name and status of the first task.
  This problem tests your ability to destructure nested arrays inside objects.
*/

const project = {
  projectName: "Website Development",
  tasks: [
    { taskName: "Design", status: "Completed" },
    { taskName: "Development", status: "In Progress" },
  ],
};

// Destructuring the first task's name and status
const {
  tasks: [{ taskName: firstTaskName, status: firstTaskStatus }],
} = project;

console.log("First Task Name:", firstTaskName); // Output: Design
console.log("First Task Status:", firstTaskStatus); // Output: Completed

console.log("\n--------------------------------------\n");

// 19. Advanced Level - Destructuring with Default Values for Nested Properties
console.log("Task 19 - Advanced Level:");

/* 
  Problem Statement:
  You are given an object `userProfile` with a nested `address` object. If `postalCode` is missing from the `address` object, 
  provide a default value of `"Not Provided"`. Destructure the `address` and extract `city` and `postalCode`.
  This problem demonstrates the use of default values for nested properties.
*/

const userProfile1 = {
  username: "Bob",
  address: { city1: "Los Angeles" },
};

// Destructuring with default value for missing `postalCode`
const {
  address: { city1, postalCode11 = "Not Provided" },
} = userProfile1;

console.log("City:", city1); // Output: Los Angeles
console.log("Postal Code:", postalCode11); // Output: Not Provided

console.log("\n--------------------------------------\n");

// 20. Intermediate Level - Destructuring with Renaming Nested Properties
console.log("Task 20 - Intermediate Level:");

/* 
  Problem Statement:
  You are given an object `employee` which contains a nested `contact` object. The `contact` object contains properties `phone` and `email`. 
  Destructure the object to rename `phone` to `contactNumber` and `email` to `contactEmail` during extraction.
  This problem tests your ability to rename properties during nested destructuring.
*/

const employee = {
  id: 1,
  contact: { phone: "123-456-7890", email: "bob@example.com" },
};

// Destructuring with renaming
const {
  contact: { phone: contactNumber, email: contactEmail },
} = employee;

console.log("Contact Number:", contactNumber); // Output: 123-456-7890
console.log("Contact Email:", contactEmail); // Output: bob@example.com

console.log("\n--------------------------------------\n");

// 21. Advanced Level - Destructuring with Computed Property Names
console.log("Task 21 - Advanced Level:");

/* 
  Problem Statement:
  You have an object `settings` with properties `volume`, `brightness`, and `contrast`. The property `contrast` is stored in a variable `contrastKey`. 
  Using computed property names, destructure the `contrast` property from the object dynamically.
  This problem tests your ability to use computed property names for destructuring.
*/

const settings = { volume: 70, brightness: 50, contrast: 80 };
const contrastKey = "contrast";

// Destructuring with computed property names
const { [contrastKey]: contrastValue } = settings;
console.log("Contrast Value:", contrastValue); // Output: 80
console.log("\n--------------------------------------\n");

// Complex Problem: Employee Management System

// Problem Statement:
// You are tasked with creating a function that processes employee data for a large organization.
// The data structure contains an array of employees, where each employee has various properties, including nested objects and arrays.
// Your function should:
// 1. Destructure the employee data to extract:
//    - Employee's `name`
//    - Employee's `email`
//    - Employee's `city` from the `address`
//    - The `projectName` and `role` of the first project
//    - The first two technologies used in that project
// 2. Handle Missing Data:
//    - If any of the required properties are missing, log a default message indicating the missing information.
// 3. Calculate Total Technologies:
//    - Count the total number of unique technologies used across all projects for each employee.
// 4. Return a Summary:
//    - Return an array of summaries for each employee, including their name, email, city, first project details, and the count of unique technologies.

// Data Structure Example:
const employeeData = {
  employees: [
    {
      //employee 1
      id: 1,
      name: "Alice Johnson",
      contact: {
        email: "alice.johnson@example.com",
        address: {
          city: "New York",
        },
      },
      projects: [
        {
          projectName: "Project Alpha",
          role: "Lead Developer",
          technologies: ["JavaScript", "React", "Node.js"],
        },
        {
          projectName: "Project Beta",
          role: "Frontend Developer",
          technologies: ["HTML", "CSS"],
        },
      ],
    },
    {
      //employee 2
      id: 2,
      name: "Bob Smith",
      contact: {
        email: "bob.smith@example.com",
        address: {
          city: "Los Angeles",
        },
      },
      projects: [
        {
          projectName: "Marketing Campaign",
          role: "Campaign Manager",
          technologies: ["SEO", "Content Marketing"],
        },
      ],
    },
    {
      //employee 3
      id: 3,
      name: "Charlie Brown",
      contact: {
        email: "charlie.brown@example.com",
        address: {},
      },
      projects: [],
    },
  ],
};

// Function to process employee data
function processEmployeeData(data) {
  // - data: An object containing an array of employee records.
  const { employees } = data; // Extracting the 'employees' records from the 'data' object for further processing

  const summaries = employees.map(({ name, contact, projects }) => {
    // Destructure contact and address
    const { email } = contact;
    const { city = "City not provided" } = contact.address || {};

    // Handle projects
    const firstProject = projects[0] || {
      projectName: "No projects available",
      role: "N/A",
    };
    const { projectName, role } = firstProject;

    // Count unique technologies
    const allTechnologies = projects.flatMap(
      (project) => project.technologies || []
    );
    const uniqueTechnologiesCount = new Set(allTechnologies).size;

    return {
      name,
      email,
      city,
      firstProject: {
        projectName,
        role,
      },
      uniqueTechnologiesCount,
    };
  });

  // Log the summaries to the console
  console.log(summaries);
}

// Example usage
processEmployeeData(employeeData);

/*
Expected Output:
[
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    city: "New York",
    firstProject: {
      projectName: "Project Alpha",
      role: "Lead Developer",
    },
    uniqueTechnologiesCount: 3,
  },
  {
    name: "Bob Smith",
    email: "bob.smith@example.com",
    city: "Los Angeles",
    firstProject: {
      projectName: "Marketing Campaign",
      role: "Campaign Manager",
    },
    uniqueTechnologiesCount: 2,
  },
  {
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    city: "City not provided",
    firstProject: {
      projectName: "No projects available",
      role: "N/A",
 },
    uniqueTechnologiesCount: 0,
  },
]
*/
console.log("\n--------------------------------------\n");
