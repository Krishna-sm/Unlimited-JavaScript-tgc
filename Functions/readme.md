# Functions in JavaScript 

-A JavaScript function is a block of reusable code designed to perform a particular task, enhancing code efficiency and organization. Functions are invoked or called to execute their defined operations and can accept parameters and return values, allowing for flexible and dynamic programming.

![alt text](image-2.png)
## JavaScript Function Syntax

- A JavaScript function is defined with the function keyword, followed by a name, followed by `parentheses ()`.

- Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

- The parentheses may include parameter names separated by commas:
`(parameter1, parameter2, ...)`

- The code to be executed, by the function, is placed inside curly brackets: `{}`

```js
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

```
![alt text](image.png)
## Types of Functions
- ### Predefined Functions
- ### User Defined Functions 
- ### Anonymous Functions
- ### Immediately invoked function expression (IIFE)
- ### Generator function

![alt text](image-1.png)

## Predefined Functions
- A pre-defined function is built into the software and does not need to be created by a programmer. Pre-defined functions often exist to carry out common tasks, such as: finding an average number. determining the length of a string.
- In JavaScript, built-in functions are the global functions that are called globally, rather than on an object

- JavaScript has several "top-level" functions predefined in the language eval , isNan , Number , String , parseInt, parseFloat , escape , unescape , taint , and untaint .


JavaScript provides a wide array of built-in functions that are commonly used for a variety of tasks such as string manipulation, array processing, and mathematical computations. Below is a list of some of the most used predefined JavaScript functions along with their explanations and examples.

---

## 1. `console.log()`

### Explanation:
Used to print messages to the browser's console. It is often used for debugging purposes.

### Example:
```javascript
console.log("Hello, World!");
```

---

## 2. `parseInt()`

### Explanation:
Parses a string and returns an integer. It can also take a second argument specifying the base (radix) for conversion.

### Example:
```javascript
let num = parseInt("42", 10); // 42
```

---

## 3. `parseFloat()`

### Explanation:
Parses a string and returns a floating-point number.

### Example:
```javascript
let num = parseFloat("3.14"); // 3.14
```

---

## 4. `Number()`

### Explanation:
Converts a value to a number.

### Example:
```javascript
let num = Number("123"); // 123
```

---

## 5. `String()`

### Explanation:
Converts a value to a string.

### Example:
```javascript
let str = String(123); // "123"
```

---

## 6. `Array.isArray()`

### Explanation:
Determines whether the passed value is an array.

### Example:
```javascript
let isArray = Array.isArray([1, 2, 3]); // true
```

---

## 7. `Object.keys()`

### Explanation:
Returns an array of a given object's property names.

### Example:
```javascript
let obj = { a: 1, b: 2 };
let keys = Object.keys(obj); // ["a", "b"]
```

---

## 8. `Object.values()`

### Explanation:
Returns an array of a given object's property values.

### Example:
```javascript
let obj = { a: 1, b: 2 };
let values = Object.values(obj); // [1, 2]
```

---

## 9. `Math.random()`

### Explanation:
Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).

### Example:
```javascript
let randomNum = Math.random();
```

---

## 10. `Math.floor()`

### Explanation:
Rounds a number down to the nearest integer.

### Example:
```javascript
let flooredNum = Math.floor(4.7); // 4
```

---

## 11. `Math.ceil()`

### Explanation:
Rounds a number up to the nearest integer.

### Example:
```javascript
let ceiledNum = Math.ceil(4.2); // 5
```

---

## 12. `Math.max()`

### Explanation:
Returns the largest of the given numbers.

### Example:
```javascript
let maxNum = Math.max(10, 20, 30); // 30
```

---

## 13. `Math.min()`

### Explanation:
Returns the smallest of the given numbers.

### Example:
```javascript
let minNum = Math.min(10, 20, 30); // 10
```

---

## 14. `setTimeout()`

### Explanation:
Executes a function after a specified delay (in milliseconds).

### Example:
```javascript
setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);
```

---

## 15. `setInterval()`

### Explanation:
Executes a function repeatedly at specified intervals (in milliseconds).

### Example:
```javascript
let count = 0;
let interval = setInterval(() => {
    console.log("Count: ", count++);
    if (count > 5) clearInterval(interval);
}, 1000);
```

---

## 16. `clearTimeout()`

### Explanation:
Stops a timeout previously established by `setTimeout()`.

### Example:
```javascript
let timeout = setTimeout(() => {
    console.log("This won't run");
}, 2000);
clearTimeout(timeout);
```

---

## 17. `clearInterval()`

### Explanation:
Stops a repeating action established by `setInterval()`.

### Example:
```javascript
let interval = setInterval(() => {
    console.log("This will run repeatedly");
}, 1000);
setTimeout(() => clearInterval(interval), 5000); // Stops after 5 seconds
```

---

## 18. `JSON.stringify()`

### Explanation:
Converts a JavaScript object or value to a JSON string.

### Example:
```javascript
let obj = { a: 1, b: 2 };
let jsonString = JSON.stringify(obj); // "{\"a\":1,\"b\":2}"
```

---

## 19. `JSON.parse()`

### Explanation:
Parses a JSON string and returns a JavaScript object.

### Example:
```javascript
let jsonString = "{\"a\":1,\"b\":2}";
let obj = JSON.parse(jsonString); // { a: 1, b: 2 }
```

---

## 20. `Date.now()`

### Explanation:
Returns the number of milliseconds elapsed since January 1, 1970 (Unix Epoch).

### Example:
```javascript
let timestamp = Date.now();
```

---


## User Defined Functions

- In JavaScript, user-defined functions allow developers to create reusable blocks of code that perform specific tasks. Functions can take inputs, process them, and return outputs. Below is an explanation of user-defined functions, along with examples.

-  A user-defined function is a function created by the developer to encapsulate a set of instructions. These functions can be called multiple times in a program, making the code modular and reusable.

### Syntax:
```javascript
function functionName(parameters) {
    // Code to be executed
    return value; // Optional
}
```

---

## Types of User-Defined Functions

# 1. **Named Function**

### Explanation:
A function with a specified name that can be called using its name.

### Example:
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

let message = greet("Alice");
console.log(message); // Output: Hello, Alice!
```

---

# 2. **Anonymous Function**

### Explanation:
A function without a name, often assigned to a variable or used as a callback.

### Example:
```javascript
const add = function(a, b) {
    return a + b;
};

let result = add(5, 3);
console.log(result); // Output: 8
```

---

# 3. **Arrow Function**

### Explanation:
A concise way to define functions using the `=>` syntax. It is often used for shorter functions.

### Example:
```javascript
const multiply = (a, b) => a * b;

let product = multiply(4, 5);
console.log(product); // Output: 20
```

---

# 4. **Function with Default Parameters**

### Explanation:
Allows parameters to have default values if no arguments are passed.

### Example:
```javascript
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!
console.log(greet("John")); // Output: Hello, John!
```

---

# 5. **Immediately Invoked Function Expression (IIFE)**

### Explanation:
A function that is executed immediately after it is defined. Useful for isolating scope.

### Example:
```javascript
(function() {
    console.log("This function runs immediately!");
})();
```

---

## Examples of User-Defined Functions

### Example 1: Function to Calculate Factorial
```javascript
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

### Example 2: Function to Check Prime Number
```javascript
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(4)); // Output: false
```

### Example 3: Function to Reverse a String
```javascript
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"
```

---

## Advantages of User-Defined Functions
- **Reusability**: Functions can be reused throughout the program.
- **Readability**: Breaks down code into smaller, logical units.
- **Maintainability**: Easier to debug and update code.
- **Modularity**: Promotes modular design in programming.

User-defined functions are essential for writing clean, efficient, and scalable JavaScript code. By leveraging these functions, developers can enhance the structure and functionality of their applications.


# Interview Questions
## Question 1: What is the difference between `var`, `let`, and `const`?
```javascript
var a = 10; // Function-scoped
let b = 20; // Block-scoped
const c = 30; // Block-scoped, cannot be reassigned

if (true) {
    var a = 40; // Updates the outer `a`
    let b = 50; // Creates a new `b`
    // c = 60; // Error: Assignment to constant variable
}

console.log(a); // Output: 40
console.log(b); // Output: 20
```
## Explanation:
- `var` is function-scoped and can be redeclared.
- `let` is block-scoped and cannot be redeclared within the same block.
- `const` is block-scoped and must be initialized when declared.

---

## Question 2: How does closure work in JavaScript?
```javascript
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}

const counter = outer();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
```
## Explanation:
A closure is a function that retains access to its lexical scope, even when executed outside that scope.

---

## Question 3: What is the difference between `==` and `===`?
```javascript
console.log(5 == "5"); // Output: true (type coercion)
console.log(5 === "5"); // Output: false (strict equality)
```
## Explanation:
- `==` checks for value equality with type coercion.
- `===` checks for value and type equality.

---

## Question 4: Explain event delegation in JavaScript.
```javascript
document.getElementById("parent").addEventListener("click", (event) => {
    if (event.target && event.target.matches(".child")) {
        console.log("Child clicked!", event.target);
    }
});
```
## Explanation:
Event delegation involves attaching a single event listener to a parent element to handle events for its child elements.

---

## Question 5: What is the `this` keyword in JavaScript?
```javascript
const obj = {
    name: "Alice",
    greet() {
        console.log(this.name);
    }
};

obj.greet(); // Output: Alice
```
## Explanation:
`this` refers to the object that is currently executing the code. Its value depends on how the function is called.

---

## Question 6: How do you debounce a function?
```javascript
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

const log = debounce(() => console.log("Debounced!"), 1000);
log();
```
## Explanation:
Debouncing ensures that a function is executed only after a specified delay, preventing rapid repeated calls.

---

## Question 7: How do you deep clone an object in JavaScript?
```javascript
const obj = { a: 1, b: { c: 2 } };
const clone = JSON.parse(JSON.stringify(obj));
console.log(clone);
```
## Explanation:
A deep clone creates a new object, recursively copying all nested properties.

---

## Question 8: Explain the difference between `call()`, `apply()`, and `bind()`.
```javascript
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const user = { name: "Alice" };
greet.call(user, "Hello"); // Output: Hello, Alice
greet.apply(user, ["Hi"]); // Output: Hi, Alice
const boundGreet = greet.bind(user);
boundGreet("Hey"); // Output: Hey, Alice
```
## Explanation:
- `call()` and `apply()` invoke a function with a specified `this` value. `apply()` takes arguments as an array.
- `bind()` creates a new function with a specified `this` value.

---

## Question 9: How does `async` and `await` work in JavaScript?
```javascript
async function fetchData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
}
fetchData();
```
## Explanation:
`async` declares an asynchronous function, and `await` pauses execution until a promise resolves.

---

## Question 10: How do you handle errors in JavaScript?
```javascript
try {
    throw new Error("Something went wrong");
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Execution complete.");
}
```
## Explanation:
Errors are handled using `try...catch` blocks. The `finally` block executes regardless of whether an error occurred.


# Practice Questions
 
### 1. **Create a Function**: Write a function to add two numbers.
### 2. **Reverse a String**: Write a function that reverses a given string.
### 3. **Find Maximum**: Write a function to find the maximum of three numbers.
### 4. **Even or Odd**: Write a function to check if a number is even or odd.
### 5. **Palindrome Check**: Write a function to check if a string is a palindrome.
### 6. **Factorial**: Write a function to calculate the factorial of a number.
### 7. **Fibonacci Series**: Generate the first 10 numbers in the Fibonacci series.
### 8. **Array Sum**: Write a function to calculate the sum of all elements in an array.
### 9. **Prime Check**: Write a function to check if a number is prime.
### 10. **Count Vowels**: Write a function to count the number of vowels in a string.

<!-- --- -->
<!-- 
## Intermediate-Level Questions

11. **Anagram Check**: Write a function to check if two strings are anagrams.
12. **Array Flattening**: Write a function to flatten a nested array.
13. **Unique Values**: Write a function to find unique values in an array.
14. **Object Cloning**: Implement a function to deep clone a JavaScript object.
15. **Sorting**: Write a function to sort an array of numbers in ascending order.
16. **Remove Duplicates**: Write a function to remove duplicate elements from an array.
17. **Merge Arrays**: Write a function to merge two arrays and remove duplicates.
18. **Capitalize Words**: Write a function to capitalize the first letter of each word in a string.
19. **Longest Word**: Write a function to find the longest word in a sentence.
20. **Binary Search**: Implement a binary search algorithm in JavaScript.

---

## Advanced-Level Questions

21. **Debounce Function**: Write a debounce function.
22. **Throttle Function**: Write a throttle function.
23. **Memoization**: Implement a function that demonstrates memoization.
24. **Custom Map Function**: Write your own implementation of the `Array.prototype.map` method.
25. **Currying**: Write a function that demonstrates currying in JavaScript.
26. **Event Delegation**: Write an example of event delegation.
27. **Promise Handling**: Write a function to demonstrate chaining of Promises.
28. **Async/Await**: Write a function to fetch data from an API using async/await.
29. **Error Handling**: Write a function to handle errors in asynchronous operations.
30. **Closure**: Write a function to demonstrate closure in JavaScript. -->


-----

<!-- ```krishna

---krishna
``` -->