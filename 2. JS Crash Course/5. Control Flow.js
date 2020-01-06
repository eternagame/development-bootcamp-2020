// Lesson 4: Control Flow

// What if we want to do something conditionally?
let x = 5;
if (x > 2) {
    console.log("x is greater than two"); // "x is greater than two"
}

// We can also specify what to do if it isn't true
if (x < 2) {
    console.log("x is greater than two");
} else {
    console.log("x is not greater than two"); // "x is not greater than two"
}

// Or even multiple possible conditions, with a final catchall
if (x < 2) {
    console.log("x is greater than two");
} else if (x == 5) {
    console.log("x is 5"); // "x is 5"
} else {
    console.log("x is not greater than two or equal to 5");
}

// Note that if you don't include brases, the *next expression* will be executed
// (an `else if` is technically just an if nested in an else!)
if (x != 5) console.log("x is not 5");

// Careful, the second log will execute in both of these cases!
if (x != 5) console.log("x is not 5"); console.log("oops!"); // "oops!"
if (x != 5)
    console.log("x is not 5");
    console.log("oops!"); // "oops!"

// Lots of possible values? switch-case to the rescue!
switch (x) {
    case 1:
        console.log("x is 1");
        break;
    case 2:
        console.log("x is 2");
        break;
    case 5:
        console.log("x is 5"); // "x is 5"
        break;
}

// You can also specify what to do in the case none of the cases are valid
switch (x) {
    case 1:
        console.log("x is 1");
        break;
    case 2:
        console.log("x is 2");
        break;
    default:
        console.log("x is something else"); // "x is something else"
        break;
}

// If you don't include a `break`, it will contine executing the next case
// This can be useful, but be careful!!!
switch (x) {
    case 5:
    case 1:
        console.log("we execute this"); // "we execute this"
    case 2:
        console.log("and also this!"); // "and also this!"
        break;
    case 3:
        console.log("but not this");
}

// Sometimes it's nice to be a bit terse
// Ternarys allow us to return a value based on a condition
console.log(x == 5 ? 10 : 20); // 10

// Important to note is that `||`, `&&`, and ternaries
// use *short circuit evaluations* - if the result of the expression
// is known after the execution of the first part of the expression,
// it won't execute the second part!
function f() {
    console.log("Hello!");
    return true;
}

console.log(true || f()); // true "Hello!"
console.log(false || f()); // true
