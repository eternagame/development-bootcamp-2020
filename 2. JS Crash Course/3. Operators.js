// Lesson 2: Operators

// Javascript has a number of operators we can use on primative types

// Strinc concatenation
console.log("hello" + "there"); // "hellothere"

// Arithmetic
console.log(3 + 3); // 6
console.log(3 - 3); // 0
console.log(3 * 3); // 9
console.log(3 / 3); // 1
console.log(3 ** 3); // 27
console.log(3 % 3); // 0

// Order of operations applies!
console.log( 3 + 2 ** (4 - 2));

// Careful with floating point math!
console.log(0.1 + 0.2); // 0.30000000000000004

// Note that you can write numbers as binary or hex!
console.log(0b1111); // 15
console.log(0xFF); // 255

// No need to understand this, but it will make the next examples print in binary,
// so they'll be easier to udnerstand
let toBinary = num => (num >>> 0).toString(2);

// Bitwise
console.log(toBinary(0b1010 & 0b1001)); // 1000
console.log(toBinary(0b1010 | 0b1001)); // 1011
console.log(toBinary(0b1010 ^ 0b1001)); // 11
// Implicit leading zeros!
console.log(toBinary(~0b1010)); // 11111111111111111111111111110101
console.log(toBinary(0b1010 << 2)); // 101000
console.log(toBinary(0b111010 >> 2)); // 1110
// Notice how this is handled with negative numbers - >>> left pads with 0s
console.log(toBinary(~0b111010 >> 2)); // 11111111111111111111111111110001
console.log(toBinary(~0b111010 >>> 2)); // 111111111111111111111111110001

// Assignment
let x = 5;
console.log(x); // 5
x = 6;
console.log(x); // 6
// This works with all arithmetic operators
x += 2;
console.log(x); // 8
x -= 2;
console.log(x); // 6
// And bitwse operators
x &= 7;
console.log(x); // 6
x |= 7;
console.log(x); // 7

// Increment and decrement are tricky
// If you postfix the operator, it returns and THEN computes
// If you prefix the operator, it computes and THEN returns
console.log(x++); // 7
console.log(x); // 8
console.log(++x); // 9
console.log(x); // 9
console.log(x--); // 9
console.log(x); // 8
console.log(--x); // 7
console.log(x); // 7

// Logical operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

// Comparrisons
console.log(4 == 3); // false
console.log(4 != 3); // true
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false

// == ignores data type, but === does not
console.log(4 == '4'); // true
console.log(4 === '4'); // false
console.log(4 != '4'); // false
console.log(4 !== '4'); // true

// This gets into an interesting point: JS likes to be helpful
// It will, without your asking, attempt to cast disparate types
// to make an expression valid
console.log(1 + "2"); // 12
console.log(1 + parseInt("2")); // 3
console.log(1 - "2"); // -1
console.log(true && "false"); // false
// This can have... interesting effects
// See also: https://www.destroyallsoftware.com/talks/wat
console.log([] + []); // ""
console.log([] - []); // 0

// All operators have a precedence. There is an order of operations,
// though using parenthesis is often clearer and less error-prone.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Operator_precedence
// Also, please never write code like this. No one will have any clue what you're doing
console.log(1 + 2 | 4 && 3); // 3
