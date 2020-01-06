// Lesson 8: Exceptions

// Sometimes bad things happen. We can handle that!

// Try: A block that might throw an error
// Catch: A block that gets executed if an error occurs, along with the error
// Finally: A block that gets run at the end whether or not an error is thrown
// Throw: Make an error happen!

try {
    console.log(5);
    throw new Error("Oops!");
    console.log(10);
} catch(e) {
    console.log(e);
} finally {
    console.log(20);
}

// 5
// "Error: Oops!"
// 20

// NOTE: Errors are computationally expensive and best used when you don't have a choice
// Prefer just using if statements to recover where you can!
