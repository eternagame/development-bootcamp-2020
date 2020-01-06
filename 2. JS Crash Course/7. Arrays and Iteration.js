// Lesson 6: Arrays and Iteration

// Whew, we've gone through some really crazy concepts.
// But you might've noticed something pretty simple missing: arrays and loops!
// It's not uncommon that we want to deal with a whole bunch of things at once

let array = ["foo", "bar", "foobar"];
console.log(array[0]); // "foo"
array[2] = "baz";
console.log(array[2]); // "baz"

// You may have seen for loops before
// You do something on start, test something each time you run it.
// then if that condition fails, do something and move on to the next iteration
for (let i=0; i<array.length; i++) {
    console.log(`i: ${i} elem: ${array[i]}`);
}
// i: 0 elem: "foo"
// i: 1 elem: "bar"
// i: 2 elem: baz

// While loops are also pretty common - keep looping while a condition is true
let i = 0;
while (i < array.length) {
    console.log(`i: ${i} elem: ${array[i]}`);
    i++;
}
// Same output as above

// JS also allows you to loop over the elements of an array
for (elem of array) {
    console.log(elem);
}
// "foo"
// "bar"
// "baz"

// If you `break` while in a loop, it will stop looping
for (let i=2; i<=10; i+=2) {
    if (i == 8) break;
    console.log(i);
}
// 2
// 4
// 6

// If you `continue` while in a loop, it will skip the rest of the current iteration
for (let i=2; i<=10; i+=2) {
    if (i == 8) continue;
    console.log(i);
}
// 2
// 4
// 6
// 10

// We can go further by iterating over objects
let o = {
    foo: "bar",
    baz: "foobar"
}
// You can use for..in - but be warned, this iterates over the entire prototype chain!
// This is almost never what you want.
for (let key in o) {
    console.log(key);
}
// "foo"
// "baz"

// Instead, try using Object.keys, Object.values, and Object.entries
for (let key of Object.keys(o)) console.log(key);
// "foo"
// "baz"
for (let key of Object.values(o)) console.log(key);
// "bar"
// "foobar"
for (let key of Object.entries(o)) console.log(key);
// ["foo", "bar"]
// ["baz", "foobar"]

// for..of works when an object has something called an *iterator* defined for it
// Arrays have this by default, but you can make your own if you want!
// For now though, let's move on

// Another set of useful array tools is filter, map and reduce
// These are functions that take functions as arguments (aka, higher order functions)
// and return a new array

// Filter takes a function that returns true or false.
// If true, the value is included. If false, it is not
console.log([1,2,3,4].filter(x => x > 2)); // [ 3, 4 ]

// Map takes a function that turns an element into something else
console.log([1,2,3,4].map(x => x + 1)); // [ 2, 3, 4, 5 ]

// Reduce is a little more compliated
// Its function takes two arguments, an accumulator and the current element
// It returns the new value of the accumulator
// Reduce also takes an initial accumulator value as it's last argument
let sum = (accumulator, element) => accumulator + element;
console.log([1,2,3,4].reduce(sum, 10)); // 20

// Here's another few neat party tricks to help you deal with a bunch of things at once!
// Destructuring: Pull values out of an array or object
let [a, b] = [1,2];
console.log(a); // 1
console.log(b); // 2
// And with objects
let z = {c: 1, d: 2};
let {c, d: something} = z;
console.log(c); // 1
console.log(something); // 2

// Spread: treat an array as comma separated items
let arr = [1,2,3];
let arr2 = [4,5, ...arr];
console.log(arr2); // [ 4, 5, 1, 2, 3 ]
// Again, with objects (notice one gets overwritten!)
let obj = {a: 1, b: 2};
let obj2 = {c: 3, b: 4, ...obj};
console.log(obj2); // { c: 3, b: 2, a: 1 }
// This also has applicability as *rest paramters* in functions
function f(a, b, ...args) {
    console.log(a, b, args);
}
f(1, 2, 3, 4, 5); // 1 2 [ 3, 4, 5 ]
f(...[1, 2, 3, 4, 5]) // 1 2 [ 3, 4, 5 ]
