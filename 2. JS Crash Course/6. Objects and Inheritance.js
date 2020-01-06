// Lesson 5: Objects and Inheritance

// Functions are a great tool for using code, but we can do even better
// We can create templates for isolated groups of values and functions

// Let's start by talking about the JS "object literal"
// This is a way of associating names and values on a container
// (If you wanted, you could even put an object in an object - objects are values too!)
let rectange = {
    width: 6,
    height: 5
}

// We can use "dot notation" to access its members
console.log(rectange.width); // 6
// Bracket notation works too!
console.log(rectange['height']); // 5

// Cool! Now we can pass this rectangle around as an entire unit
function getArea(rect) {
    return rect.width * rect.height;
}
console.log(getArea(rectange)); // 30

// Let's take this one step further: lets tie in the
// `getArea` function directly to the `rectangle` object!
// Notice the use of `this` - for a function within an object,
// `this` referrs to the object the function is inside
// (a slight simplification, but we'll get to that in a minute!)
let rectangle2 = {
    width: 6,
    height: 5,
    getArea: function() {
        return this.width * this.height;
    }
}
console.log(rectangle2.getArea()); // 30

// As it turns out, functions are also objects themselves!
// (Unless they are already the property of another object, like our getArea above)
// They have a `this`, and in order to get a reference to the object,
// we simply have to return `this`!
function makeRectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function() {
        return this.width * this.height;
    }
    return this;
}

let rectangle4 = makeRectangle(2,3);
console.log(rectangle4.width); // 2

// But there's a problem - what happens when we execute this function again?
let rectangle5 = makeRectangle(5, 6);
console.log(rectangle5.width); // 5
console.log(rectangle4.width); // 5
rectangle4.width = 10;
console.log(rectangle5.width); // 10

// Both rectangles are referring to the same object!
// makeRectangle is still makeRectangle both times,
// so it's `this` is the same. But JS has a solution!
// When using the operator `new`, it will create a new `this` for us each time!
let rectangle6 = new makeRectangle(5, 10);
let rectangle7 = new makeRectangle(20, 20);
rectangle6.width = 1;
rectangle6.height = 2;
console.log(rectangle6.getArea()); // 2
console.log(rectangle7.getArea()); // 2

// When using a function to make an object,
// we can also take advantage of its ability to limit what the outside world can access
function makeRectangleStats(width, height) {
    let perimiter = width + height;
    
    function getArea() {
        return width * height;
    }

    this.getInfo = function() {
        return {perimiter: perimiter, area: getArea()};
    }
    return this;
}

let rectangle8 = new makeRectangleStats(2, 4);
console.log(rectangle8.perimiter); // undefined
// console.log(rectangle8.getArea()); ==> Error: rectangle8.getArea is not a function
console.log(rectangle8.getArea); // undefined
console.log(rectangle8.getInfo()); // { perimiter: 6, area: 8}

// Now what if we want to be a bit more generic and talk about multiple shapes
// Both a circle and a rectangle have an area and location, but a rectangle doesn't have a radius
// and a circle doesn't have a width or height (at least not in the traditional sense)
// In comes *inheritance*! The way JS handles this is a bit special - it's called *prototypical inheritance*
// This is different from how many other languages handle inheritance!
// To explore this, let's look at a third way of creating objects

let Shape = function(x, y) {
    this.x = x;
    this.y = y;
}
Shape.prototype.color = "white";
Shape.prototype.getArea = function() {
    throw new Error("getArea is not defined for this shape!");
}
Shape.prototype.toString = function() {
    // This is called a template string - it lets us do cool things
    // like include values and use multiple lines!
    return `Color: ${this.color} Position: (${this.x}, ${this.y}) Area: ${this.getArea()}`;
}

// Our new constructor function calls the outer constructor function
let Rectangle = function(x, y, width, height) {
    Shape.call(this, x, y);
    this.width = width;
    this.height = height;
}
// We also need to inherit the properties of Shape
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.getArea = function() {
    return this.width * this.height;
}

// And we're finally done!
let anotherRectangle = new Rectangle(1, 2, 5, 10);
console.log(anotherRectangle.color); // white
console.log(anotherRectangle.width); // 5
console.log(anotherRectangle.toString()); // Color: white Position: (1, 2) Area: 50

// Whew. That was... not pretty. But it does explain a little bit about
// how JS implements inheritance - it has a prototype *chain*, and it uses
// the values of the prototye as defaults when it doesn't have one of its own
// (and the values of the prototype of the prototype when *it* doesn't... you get the picture)
// Luckily, there's a beter way. Classes!

class Shape2 {
    color = "white";

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getArea() {
        throw new Error("getArea is not defined for this shape!");
    }

    toString() {
        return `Color: ${this.color} Position: (${this.x}, ${this.y}) Area: ${this.getArea()}`;
    }
}

class Rectangle2 extends Shape2{
    constructor(x, y, width, height) {
        super(x, y);
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

let rect = new Rectangle2(1, 2, 3, 4);
console.log(rect.toString()); // Color: white Position: (1, 2) Area: 12

// There's another neat thing you can do with objects: getters and setters
// Lets say we want to limit the minimum width and height
let square = {
    _width: 5,    
    get width() { return this._width },
    set width(val) { this._width = Math.max(1, val) },

    _height: 5,
    get height() { return this._height },
    set height(val) { this._height = Math.max(1, val) },
    
    get area() { return this.width * this.height }
}
console.log(square.area); // 25
square.width = -10;
console.log(square.area); // 5

// Works with classes too!
class Square extends Shape2 {
    _width = 5;
    get width() { return this._width }
    set width(val) { this._width = Math.max(1, val) }

    _height = 5;
    get height() { return this._height }
    set height(val) { this._height = Math.max(1, val) }

    get area() { return this.width * this.height }

    getArea() { return this.area }
}

let newSquare = new Square(1, 5);
newSquare.width = 0;
newSquare.height = 0;
console.log(newSquare.toString()); // Color: white Position: (1, 5) Area: 1

// Last thing - there's a funny little gotcha with `this` and functions
class Application {
    message = "I am an application!"
    onClick = function(){};
    
    click() {
        this.onClick();
    }
}

class Button {
    constructor(app) {
        app.onClick = this.onClick;
    }

    message = "I've been clicked!";
    onClick() {
        console.log(this.message);
    }
}

let app = new Application();
let button = new Button(app);
app.click(); // "I am an application!"

// Oh dear - the button.onClick method is using `app` as `this`!
// We can fix this with `.bind`
class Application2 {
    message = "I am an application!"
    onClick = function(){};
    
    click() {
        this.onClick();
    }
}

class Button2 {
    constructor(app) {
        app.onClick = this.onClick.bind(this);
    }

    message = "I've been clicked!";
    onClick() {
        console.log(this.message);
    }
}

let app = new Application2();
let button = new Button2(app);
app.click(); // "I've been clicked!""

// Better. But JS has given us another tool in our toolbox to handle this!
class Application3 {
    message = "I am an application!"
    onClick = function(){};
    
    click() {
        this.onClick();
    }
}

class Button3 {
    constructor(app) {
        app.onClick = () => this.onClick();
    }

    message = "I've been clicked!";
    onClick() {
        console.log(this.message);
    }
}

// This is a handy shorthand for creating functions
// that also has the benefit of binding to the current context!
//  name     // parameters          // body
let double =      (x)       => { return x * 2 };
// When you have one parameter, you can drop the parenthesis
let double2 = x => {
    return x * 2;
}
// And when you only have one expression, you can drop the braces and `return` too!
let double3 = x => x * 2;

console.log(double(2)); // 4
console.log(double2(2)); // 4
console.log(double3(2)); // 4

// If you wanted, you could even write our code before like this:

class Button4 {
    message = "I've been clicked!";

    constructor(app) {
        app.onClick = () => console.log(this.message);
    }
}
