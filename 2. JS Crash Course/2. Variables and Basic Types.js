// Lesson 1: Variables and Basic Types

// First off, this is a comment!
/*
This is a
multiline comment
*/

// Javascript can represent a lot of different kinds of data

// Like numbers
console.log(5); // 5
// Or text (aka strings)
console.log("Hello there!"); // "Hello there!"
// Or boolean values
console.log(true); // true
// There is also a special type saying there is no value
console.log(null); // null
// As well as a similar one saying that we don't know a value *yet*
console.log(undefined); // undefined

// These are called *primative values*, they're the basic types in javascript.
// There are also "bigint" (for large numbers) and "symbol" (a special unique identifier)

// You can combine multiple values into expressions, which get *evaluated*,
// ie executed so that it creates a single value
console.log(5 + 4); // 9

// Variables are named containers for values
let x;
console.log(x); // undefined

// Once declared, we can assign it the value of an expression
x = 2 + 3;

// We can retrieve its value
console.log(x); // 5

// We can even use it in an expression
console.log(x + x - 1); // 9

// We can change it too!
x = x + 10;
console.log(x); // 15

// We can also declare and assign in one step
let y = x;
console.log(y); // 15

// Since x was *evaluated* to its value when assigned to x,
// If we change x now y won't change
console.log(x); // 15
console.log(y); // 15
x = x - 10;
console.log(x); // 5
console.log(y); // 15

// Note that this is special because primatives are *immutabe*
// The same is not true for, say, an array
let a = [1,2,3];
console.log(a); // [ 1, 2, 3 ]
let b = a;
console.log(b); // [ 1, 2, 3 ]
b.push(4);
console.log(a); // [ 1, 2, 3, 4]
console.log(b); // [ 1, 2, 3, 4 ]

// You can also create variables that are constant (immutable)
// If you try to assign it, it will error
const z = 10;
// z = z + 1 ==> Error: Assignment to constant variable

// If you've encountered javascript before, you may be wondering
// why I've been using `let` and not `var`. Let has a big advantage:
// block scoping. As a matter of good practice, we'll never use `var`.
if(true) {
    var foo = 5;
    let bar = 10; 
}

console.log(foo); // 5
// console.log(bar); ==> Error: bar is not defined
