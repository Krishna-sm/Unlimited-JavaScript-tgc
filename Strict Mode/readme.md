
# What is Strict Mode?
![alt text](image-3.png)
**Strict Mode** is a way to opt into a restricted variant of JavaScript. It helps developers write cleaner and safer code by eliminating some silent errors and enforcing stricter parsing and error handling.

To enable Strict Mode, you use the `"use strict";` directive at the beginning of a script or a function.

---
![alt text](image.png)
## Why Use Strict Mode?

Strict Mode is beneficial for several reasons:

1. **Error Prevention**: It catches common programming mistakes, such as assigning values to undeclared variables.
2. **Improved Debugging**: It makes debugging easier by throwing errors for problematic code.
3. **Security Enhancements**: It prevents the use of certain dangerous features, like `with` statements.
4. **Future-Proofing**: It paves the way for future JavaScript versions by disallowing deprecated or reserved features.

---

## Example

### Without Strict Mode

```javascript
x = 10; // No error, even though 'x' is undeclared
console.log(x); // Outputs: 10
```

### With Strict Mode

```javascript
"use strict";

x = 10; // Throws an error: ReferenceError: x is not defined
console.log(x);
```

---
![alt text](image-2.png)
## Usage in Different Ways

### 1. Enabling Strict Mode Globally

```javascript
"use strict";

function example() {
  let a = 10;
  console.log(a);
}
example();
```

### 2. Enabling Strict Mode in a Function

```javascript
function strictExample() {
  "use strict";
  let b = 20;
  console.log(b);
}
strictExample();
```

### 3. Combining Strict Mode with Modules

Modules in JavaScript automatically operate in Strict Mode, so you don't need to add `"use strict";` manually.

```javascript
export function moduleExample() {
  let c = 30;
  console.log(c);
}
```

---
 ## 1. **What is Strict Mode in JavaScript, and how do you enable it?**

Strict Mode is a feature in JavaScript that enforces stricter parsing and error handling of your code, introduced in ECMAScript 5 (ES5). It helps catch common coding errors and prevent the use of unsafe features.

### How to Enable Strict Mode
Strict Mode can be enabled globally or locally (within a function) by adding the directive `"use strict"` at the beginning of your script or function.

### Example

#### Global Strict Mode
```javascript
"use strict";

let x = 10;
console.log(x); // Outputs: 10

// x = 20 without declaration will throw an error
x = 20; // ReferenceError: x is not defined
```

#### Local Strict Mode
```javascript
function strictFunction() {
  "use strict";
  let y = 5;
  console.log(y); // Outputs: 5

  // y = 10 without declaration will throw an error
  y = 10; // ReferenceError: y is not defined
}
strictFunction();
```

---

## 2. **What are the advantages of using Strict Mode?**

1. **Error Prevention**: Detects common mistakes, like assigning to undeclared variables.
2. **Security**: Disallows potentially dangerous actions, like using `with` statements.
3. **Performance Optimization**: Enables JavaScript engines to perform better optimizations.
4. **Future Proofing**: Prohibits usage of reserved keywords for future versions of JavaScript.

### Example
Without Strict Mode:
```javascript
x = 15; // Implicit declaration allowed
console.log(x); // Outputs: 15
```
With Strict Mode:
```javascript
"use strict";
x = 15; // ReferenceError: x is not defined
```

---

## 3. **List some errors caught by Strict Mode that are ignored otherwise.**

1. Assignment to undeclared variables.
   ```javascript
   "use strict";
   x = 10; // ReferenceError: x is not defined
   ```

2. Assignments to read-only properties.
   ```javascript
   "use strict";
   const obj = Object.freeze({ key: "value" });
   obj.key = "newValue"; // TypeError: Cannot assign to read-only property
   ```

3. Deleting undeletable properties.
   ```javascript
   "use strict";
   delete Object.prototype; // TypeError: Cannot delete property
   ```

4. Using duplicate parameter names in a function.
   ```javascript
   "use strict";
   function example(a, a) { // SyntaxError: Duplicate parameter name not allowed in strict mode
     return a;
   }
   ```

---

## 4. **Can you use Strict Mode selectively within a JavaScript file? How?**

Yes, Strict Mode can be applied to specific functions rather than the entire script. By adding the directive `"use strict"` within a function scope, only that function will operate in Strict Mode.

### Example

```javascript
function nonStrictFunction() {
  x = 10; // No error
  console.log(x); // Outputs: 10
}

function strictFunction() {
  "use strict";
  y = 20; // ReferenceError: y is not defined
}

nonStrictFunction();
strictFunction();
```

---

## 5. **What happens if you enable Strict Mode in older browsers?**

If an older browser does not support Strict Mode, it will ignore the `"use strict";` directive and execute the code in non-strict mode. To ensure compatibility, you should test your code in environments that support Strict Mode.

### Example for Compatibility

```javascript
(function () {
  "use strict";
  try {
    undeclaredVariable = 10; // Throws an error in modern browsers
  } catch (e) {
    console.log("Strict Mode error caught: " + e.message);
  }
})();
```
 
---

##  Practice Questions

1. Write a script that demonstrates how to enable Strict Mode globally.
2. Show how Strict Mode prevents the use of undeclared variables.
3. Explain how Strict Mode changes the behavior of `this` in functions.
4. Write a function using Strict Mode and demonstrate a TypeError when assigning to a read-only property.
5. Create an example showing the use of Strict Mode in ES6 modules.
6. Demonstrate how Strict Mode handles duplicate parameter names in functions.
7. Write a program where Strict Mode helps identify a common coding mistake.
8. Explain the differences in variable declaration between Strict Mode and non-Strict Mode.
9. Write a script where Strict Mode throws an error for deleting an undeletable property.
10. Show an example where Strict Mode is used to improve the code's security.

---

```krishna
Chahta to me bhi bhut hu... Ki ho , jisse sari baate share kr sku.... ,
.. vo bhi apni baate share kre...
 Mahfooz smje apne aap ko mere sath... Or sath nibha ske...

Ishq ho bhi jaye to parva nhi...
Hote hote.. ishq hua.. to isse pyara koi nhi....

Chaht abhi dil me chupa ke betha hu... Baya me ye kr sku itna sahas lekar me abhi Betha hu nhi....
---krishna
```