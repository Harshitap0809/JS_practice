//######################################################## Array Loops Practice #########################################################

// Looping over an array in JavaScript
// Loops are used to iterate over iterables (e.g., arrays, strings, objects).
// An iterable is any item in JavaScript that can be looped through, such as arrays and strings.

// Array of superhero names
let heroes = [
    "ironman",
    "shaktiman",
    "spiderman",
    "batman",
    "hulk",
    "thor",
    "antman",
  ];
  
  // 1. Traditional `for` Loop
  // The `for` loop is the most basic way to iterate over an array using index.
  for (let i = 0; i < heroes.length; i++) {
    console.log(`Traditional for loop - Index: ${i}, Hero: ${heroes[i]}`);
  }
  // Output:
  // Traditional for loop - Index: 0, Hero: ironman
  // Traditional for loop - Index: 1, Hero: shaktiman
  // Traditional for loop - Index: 2, Hero: spiderman
  // Traditional for loop - Index: 3, Hero: batman
  // Traditional for loop - Index: 4, Hero: hulk
  // Traditional for loop - Index: 5, Hero: thor
  // Traditional for loop - Index: 6, Hero: antman
  
  
  // 2. `for...of` Loop
  // This loop iterates over the values (heroes) of the array without worrying about the index.
  for (let hero of heroes) {
    console.log(`for...of loop - Hero: ${hero}`);
  }
  // Output:
  // for...of loop - Hero: ironman
  // for...of loop - Hero: shaktiman
  // for...of loop - Hero: spiderman
  // for...of loop - Hero: batman
  // for...of loop - Hero: hulk
  // for...of loop - Hero: thor
  // for...of loop - Hero: antman
  
  
  // 3. `forEach` Method
  // `forEach` is an array method that executes a function for each element in the array.
  // It gives access to both the value and the index.
  heroes.forEach((hero, index) => {
    console.log(`forEach loop - Index: ${index}, Hero: ${hero}`);
  });
  // Output:
  // forEach loop - Index: 0, Hero: ironman
  // forEach loop - Index: 1, Hero: shaktiman
  // forEach loop - Index: 2, Hero: spiderman
  // forEach loop - Index: 3, Hero: batman
  // forEach loop - Index: 4, Hero: hulk
  // forEach loop - Index: 5, Hero: thor
  // forEach loop - Index: 6, Hero: antman
  
  
  // 4. `for...in` Loop
  // The `for...in` loop is generally used for objects but can be applied to arrays.
  // It iterates over the **indices** of the array, not the values.
  for (let index in heroes) {
    console.log(`for...in loop - Index: ${index}, Hero: ${heroes[index]}`);
  }
  // Output:
  // for...in loop - Index: 0, Hero: ironman
  // for...in loop - Index: 1, Hero: shaktiman
  // for...in loop - Index: 2, Hero: spiderman
  // for...in loop - Index: 3, Hero: batman
  // for...in loop - Index: 4, Hero: hulk
  // for...in loop - Index: 5, Hero: thor
  // for...in loop - Index: 6, Hero: antman
  
  
  // 5. `while` Loop
  // The `while` loop runs as long as a specified condition is true.
  let i = 0; // Starting index
  
  while (i < heroes.length) {
    console.log(`while loop - Index: ${i}, Hero: ${heroes[i]}`);
    i++; // Increment index
  }
  // Output:
  // while loop - Index: 0, Hero: ironman
  // while loop - Index: 1, Hero: shaktiman
  // while loop - Index: 2, Hero: spiderman
  // while loop - Index: 3, Hero: batman
  // while loop - Index: 4, Hero: hulk
  // while loop - Index: 5, Hero: thor
  // while loop - Index: 6, Hero: antman
  
  
  // 6. `do...while` Loop
  // The `do...while` loop is similar to `while`, but it ensures that the loop runs at least once before checking the condition.
  i = 0; // Resetting index
  
  do {
    console.log(`do...while loop - Index: ${i}, Hero: ${heroes[i]}`);
    i++; // Increment index
  } while (i < heroes.length);
  // Output:
  // do...while loop - Index: 0, Hero: ironman
  // do...while loop - Index: 1, Hero: shaktiman
  // do...while loop - Index: 2, Hero: spiderman
  // do...while loop - Index: 3, Hero: batman
  // do...while loop - Index: 4, Hero: hulk
  // do...while loop - Index: 5, Hero: thor
  // do...while loop - Index: 6, Hero: antman
  
  //#########################################################################################################################################
  
  // Conclusion:
  // Key differences between each loop and when to use them:
  
  // 1. Traditional `for` Loop:
  //    - Use when: You need access to both **index** and **value** of the array.
  //    - Scenario: Useful when you need control over the iteration (e.g., skipping values, looping in reverse).
  //    - Example: Modifying elements at specific indexes.
  
  // 2. `for...of` Loop:
  //    - Use when: You need to iterate over **values** of the array directly.
  //    - Scenario: Ideal for simple iteration where you don't need to worry about indexes.
  //    - Example: Logging or processing all elements without needing index information.
  
  // 3. `forEach` Method:
  //    - Use when: You need to perform an action for each element and possibly access both **index** and **value**.
  //    - Scenario: Common for array manipulation where no early termination is needed.
  //    - Example: Logging all values with their indexes or updating an array based on its values.
  
  // 4. `for...in` Loop:
  //    - Use when: You need to iterate over the **keys** (indexes) of an array or properties of an object.
  //    - Scenario: Best for objects, but can be used on arrays when index iteration is required.
  //    - Example: Iterating over properties of an object or indexes of an array.
  
  // 5. `while` Loop:
  //    - Use when: You need to loop based on a **condition** rather than a fixed length.
  //    - Scenario: Best for cases where the number of iterations isn’t known beforehand.
  //    - Example: Repeating a task until a certain condition is met, such as user input.
  
  // 6. `do...while` Loop:
  //    - Use when: You want to ensure the code inside the loop runs at least **once**, regardless of the condition.
  //    - Scenario: Useful when the loop should always execute once, like showing a menu at least once to the user.
  //    - Example: Executing a task at least once and then repeating it based on user input.
  