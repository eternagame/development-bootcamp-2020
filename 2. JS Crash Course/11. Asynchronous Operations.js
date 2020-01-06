// Lesson 10: Asynchronous Operations

// Historically, JS has used callbacks to execute a function at some later time once a long
// operation has finished, like making a network request
getPage('/blogs', function(data) {
    // Do something now that we have data
});

// Promises were introduced to make this more manageable
// A promise is a wrapper around a value (or action) that isn't available yet
let promise = getPage('/blogs');
promise.then((data) => { /* Do something with data */ });
promise.catch((err) => { /* Do something with error */ });
promise.finally(() => { /* Do something once everything is handled */ });

// You can of course make your own promises
// The promise constructor takes a function, with has two arguments which are functions
// You call the first one when things complete successfully
// You call the second one if things don't go according to plan
function doSomething() {
    return new Promise((resolve, reject) => {
        if (isSuccessful) {
            resolve(someData);
        } else {
            reject(someError);
        }
    })
}

// There's also a bunch of handy utility functions!

// Wait for all promises to resolve, or for one to be rejected
Promise.all([
    getPage('/blogs/dogs'),
    getPage('/blogs/cats'),
]).then((values) => { /* We now have an array of all the values! */ });

// Wait for all promises to resolve or reject
Promise.allSettled([
    getPage('/blogs/dogs'),
    getPage('/blogs/cats'),
]).then((results) => { /* We can then inspect each result to see what happened with it */ });

// Whichever one resolves or rejects first wins!
Promise.race([
    getPage('/blogs/dogs'),
    getPage('/blogs/cats'),
]).then((res) => { /* We can then inspect each result to see what happened with it */ });

// Create a promise that resolves immediately
Promise.resolve(value);
// Create a promise that is rejected immediately
Promise.rejected(err);

// Turns out, we can do EVEN BETTER.
async function doSomething() {
    try {
        let data = await getPage('/blogs/pets');
        console.log(data)
    } catch(e) {
        console.log("I can't get my pets :(");
    }
}

// Async functions are simply functions that return a promise
// If you don't create one, it essentially wraps the entire execution
// of your function in a promise
// When you `await` a promise (or async function), it doesn't continue
// with the rest of the function until the promise is resolved or rejected
