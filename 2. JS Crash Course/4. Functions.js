// Lesson 3: Functions

// Functions allow us to reuse a bit of code - we've already used one!
// Function Name     // Argumemt List
console.log       (  "Hello", "there"  );

// Let's make our own functions!
function sayHello() {
    console.log("Hello!");
}
sayHello(); // "Hello!"

// We can add a parameter to allow our function to act dynamically
function greet(name) {
    console.log("Hello, " + name);
}
greet("Joe"); // "Hello, Joe"
greet("Sally"); // "Hello, Sally"

// We can have multiple parameters, and we can return values
function addTwo(a, b) {
    return a + b;
}
console.log(addTwo(3, 4)); // 7

// When you `return`, none of the following code will be executed
function returnEarly() {
    console.log("Start");
    return;
    console.log("End");
}
returnEarly(); // "Start"

// Functions are values too, so you can assign them to variables
let add = addTwo;
console.log(add(2,3)); // 5

// You can also declare a function in a similar manner
let subtract = function(a, b) {
    return a - b;
}

// Functions can have default values
function sendMessage(message="Hello") {
    console.log("I have a message: " + message);
}
sendMessage(); // "I have a message: Hello"
sendMessage("Greetings"); // "I have a message: Greetings"

// If you create variable within the function,
// it won't be accessible from outside the function
// Parameters work a similar way - the parameter is assigned to the
// evaluated value of the argument, so changing it inside the function
// won't change the value of a variable you might pass in
function addFive(x) {
    let y = 3;
    x = x + 2;
    return x + y;
} 
let z = 10;
console.log(addFive(z)); // 15
console.log(z); // 10
// console.log(x); ==> Error: x is not defined
// console.log(y); ==> Error: y is not defined

// This makes sense, considering the fact that you could be passing in
// a literal or an expression
console.log(addFive(7)); // 12
console.log(addFive(z + 7)); // 22
