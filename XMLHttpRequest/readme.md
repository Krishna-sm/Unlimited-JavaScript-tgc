# XMLHttpRequest 

`XMLHttpRequest` (XHR) is a built-in browser object used to interact with servers and make HTTP requests. It allows data to be retrieved from a URL without having to refresh the page, enabling dynamic web applications.

---

## **Features of XMLHttpRequest**
1. Supports both synchronous and asynchronous requests.
2. Can handle different types of data formats (e.g., JSON, XML, plain text).
3. Provides detailed information about the response, such as HTTP status codes and response headers.
4. Compatible with older browsers.

---

## **Basic Syntax**
```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};
xhr.onerror = function () {
    console.error('Network error occurred.');
};
xhr.send();
```

---

## **Steps to Use XHR**
1. Create an instance using `new XMLHttpRequest()`.
2. Call `.open()` with the HTTP method and URL.
3. Set request headers if needed (e.g., `Content-Type`).
4. Define callback functions for `onload`, `onerror`, etc.
5. Send the request using `.send()`.

---

## **Interview Questions and Answers**

### **1. What is XMLHttpRequest, and how is it used?**
`XMLHttpRequest` is a JavaScript API used to send HTTP requests to a server and load data without refreshing the page. It is primarily used for AJAX operations.

**Example Usage:**
```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(xhr.responseText);
    }
};
xhr.send();
```

---

### **2. What are the advantages of using XMLHttpRequest?**
- Enables asynchronous communication with a server.
- Provides detailed response information, such as headers and status codes.
- Supports a variety of HTTP methods (GET, POST, PUT, DELETE, etc.).
- Allows interaction with APIs that do not support modern tools like Fetch.

---

### **3. What is the difference between synchronous and asynchronous requests in XHR?**
- **Synchronous**: The browser is blocked until the request is complete.
- **Asynchronous**: The browser continues executing other scripts while waiting for the response.

Asynchronous requests are preferred to avoid freezing the user interface.

---

### **4. How do you handle errors in an XHR request?**
Use the `onerror` event handler to catch network-related errors. Check the `status` property to handle HTTP errors.

**Example:**
```javascript
xhr.onerror = function () {
    console.error('Network error occurred.');
};
xhr.onload = function () {
    if (xhr.status !== 200) {
        console.error('HTTP Error:', xhr.status);
    }
};
```

---

### **5. How can you send a POST request with XMLHttpRequest?**
Use the `POST` method in the `.open()` call and include data in the `.send()` method.

**Example:**
```javascript
const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function () {
    if (xhr.status === 201) {
        console.log('Created:', JSON.parse(xhr.responseText));
    }
};
xhr.send(JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }));
```

---

## **Practice Questions**

1. What is the purpose of the `readyState` property in `XMLHttpRequest`?
2. How do you set custom headers in an XHR request?
3. Write an example of making a synchronous XHR request.
4. How do you handle timeouts in `XMLHttpRequest`?
5. What is the significance of the `responseType` property in XHR?
6. Write a program to fetch and display JSON data using XHR.
7. How can you retrieve response headers using XHR?
8. What is the difference between `.onload` and `.onreadystatechange`?
9. How do you upload files using `XMLHttpRequest`?
10. Compare and contrast XHR with the Fetch API.




```krishna

---krishna
```
