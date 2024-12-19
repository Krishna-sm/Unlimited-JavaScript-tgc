# Fetch API

The Fetch API is a modern interface that allows you to make HTTP requests in JavaScript, similar to `XMLHttpRequest` but with a more powerful and flexible promise-based approach.

---

## **Key Features of Fetch API**
1. **Promise-Based**: Fetch uses promises, making it simpler to handle asynchronous requests.
2. **Simplified Syntax**: Cleaner and more readable compared to `XMLHttpRequest`.
3. **Supports Modern Features**:
   - `async/await` for cleaner asynchronous code.
   - Streaming responses.
4. **Extensible Options**: Configure request methods, headers, body, and more.

---

## **Basic Syntax**
```javascript
fetch(url, options)
    .then(response => {
        // Handle the response
    })
    .catch(error => {
        // Handle any errors
    });
```

- `url`: The URL of the resource to fetch.
- `options` (optional): An object to customize the request (method, headers, body, etc.).

---

## **Example Usage**

### **GET Request**
```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
```

### **POST Request**
```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }),
})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

---

## **Common Methods and Properties**

### **Methods**
- `GET`: Retrieve data from a server.
- `POST`: Send data to a server.
- `PUT`: Update data on a server.
- `DELETE`: Remove data from a server.

### **Response Properties**
- `response.ok`: Boolean indicating if the response is successful (status 200-299).
- `response.status`: HTTP status code.
- `response.json()`: Parses the response body as JSON.
- `response.text()`: Parses the response body as plain text.

---

## **Error Handling**
Always check if the response is `ok` to handle HTTP errors properly.
```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));
```

---

## **Interview Questions on Fetch API**

### **1. What is the Fetch API, and how is it different from `XMLHttpRequest`?**

The Fetch API is a modern JavaScript interface for making HTTP requests. It is promise-based, which makes it easier to handle asynchronous operations compared to the older `XMLHttpRequest` (XHR).

**Differences:**
- **Promise-based**: Fetch uses promises, while XHR uses callbacks, making Fetch code cleaner and more readable.
- **Streamlined Syntax**: Fetch has a simpler API for making requests and handling responses.
- **No Implicit Headers**: Unlike XHR, Fetch does not automatically send cookies or credentials unless explicitly configured.
- **Better Error Handling**: Fetch treats HTTP errors (like 404 or 500) as successful responses, while XHR triggers errors for such cases.

---

### **2. Explain how to handle errors in a `fetch` request.**

To handle errors in a `fetch` request, you need to:
1. Check the `ok` property of the response object to determine if the HTTP status code indicates success (status 200-299).
2. Use `.catch()` to handle network or other fetch-related errors.

**Example:**
```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));
```

---

### **3. How do you send a POST request using the Fetch API?**

To send a POST request, include the `method`, `headers`, and `body` properties in the options object passed to `fetch`.

**Example:**
```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }),
})
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
```

---

### **4. What is the purpose of `response.json()` in a fetch call?**

The `response.json()` method parses the response body as JSON and returns a promise. It is commonly used when the server response is in JSON format.

**Example:**
```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data));
```

---

### **5. How would you cancel a fetch request?**

You can cancel a fetch request using the `AbortController` API. Create an instance of `AbortController`, pass its `signal` property to the fetch options, and call `abort()` to cancel the request.

**Example:**
```javascript
const controller = new AbortController();
const signal = controller.signal;

fetch('https://jsonplaceholder.typicode.com/posts', { signal })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        if (error.name === 'AbortError') {
            console.log('Fetch request was canceled');
        } else {
            console.error('Fetch error:', error);
        }
    });

// Cancel the request
controller.abort();
```

---

### **6. Explain the difference between `fetch` and `axios`.**

**Fetch API:**
- Native to the browser and does not require additional libraries.
- Less feature-rich compared to Axios.
- No automatic handling of JSON (e.g., headers configuration).
- Does not automatically handle timeouts or retries.

**Axios:**
- A third-party library offering advanced features like request cancellation, interceptors, and automatic JSON transformation.
- Supports older browsers that do not have the Fetch API.
- Has built-in support for timeouts and progress tracking.

**Example of Axios:**
```javascript
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
```

---

### **7. What is the significance of the `ok` property in the Fetch API response object?**

The `ok` property is a boolean that indicates whether the HTTP response status is in the range 200-299 (success).

**Example:**
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (response.ok) {
            console.log('Request was successful');
        } else {
            console.log('Request failed with status:', response.status);
        }
    });
```

If `ok` is `false`, you can handle the error accordingly, even if the request did not throw an error (e.g., 404 Not Found).

---

## **Practice Questions**

### 1. Write a fetch request to get a list of users from `https://jsonplaceholder.typicode.com/users` and log their names.
### 2. Create a POST request to send the data `{ name: 'John', age: 30 }` to `https://example.com/api/users` and handle the response.
### 3. Write a function using `async/await` to fetch posts from `https://jsonplaceholder.typicode.com/posts` and log the first post's title.
### 4. Implement error handling for a fetch request that fails to reach the server.
### 5. Use `Promise.all` to fetch data from two endpoints simultaneously and log both responses.
### 6. Write a program that makes a fetch request to an API and dynamically updates the DOM with the fetched data.
### 7. Demonstrate how to handle non-JSON responses using the Fetch API.

---

```krishna

---krishna
```
