// Lesson 7: Strings

// And now for a quick discussion about strings!
console.log("Double quotes are good");
console.log('So are single quotes');
console.log("You can add\n\"escape characters\"")
// You can add
// "escape characters"

// Another important thing is template expressions
// They allow for multiline strings and interprolating values
let x = 5;
console.log(`Hello
x is ${x}
Goodbye`)
// Hello
// x is 5
// Goodbye

// There is also a neat feature called tempalte tags that allow you to attatch a function
function myTag(strings, ...values) {
    console.log(strings);
    console.log(values);
}
myTag`Hello ${x} ${12} There`
// [ 'Hello ', ' ', ' There' ]
// [ 5, 12 ]

// We can move between strings and arrays
console.log("Hello there friend!".split(" ").reverse().join(".")); // friend!.there.Hello

// We can also use regular expressions to parse them
let match = "(123) 456-7890".match(/\((\d+)\) (\d+)-(\d+)/);
console.log(match.slice(1).join(''))// 1234567890
