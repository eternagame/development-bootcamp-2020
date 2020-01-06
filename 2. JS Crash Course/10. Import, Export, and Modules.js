// Lesson 9: Import, Export, and Modules

// You probably want to split up your code, right? One big file 10000 lines long isn't really fun.

// Shape.js
export default class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// Rectangle.js
import Shape from 'Shape';
export default class Rectangle extends Shape {
    constructor(x, y, width, height) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
}
export class Square extends Rectangle {
    constructor(x, y, len) {
        super(x, y, len, len);
    }
}

// index.js
import {default as Rectangle, Square} from 'Rectangle'
// or
import Rectangle, {Square} from 'Rectangle'
// this is probably a bad idea, but it works!
import Rectangle, {Square as Circle} from 'Rectangle'
console.log((new Circle(1,2,3)).width); // 3
