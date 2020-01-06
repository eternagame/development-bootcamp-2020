export {}

class EternaPoint {
  x: number;
  y: number;
  constructor(x: number, y: number){
    this.x = x;
    this.y = y;
  }
}

// const point = new EternaPoint(); // => Error: Expected 2 arguments, but got 0.
const point = new EternaPoint(5, 5);
point.x = 80; // Adding readonly to the x field marks this as an error
console.log(point.x);

class Drawing {
  private points: EternaPoint[];

  constructor(points: EternaPoint[]){
    this.points = [...points];
  }

  draw() {
    //...
  }
}

const drawing = new Drawing([point]);
// drawing.points[0] = new EternaPoint(7,7); // Error => Property 'points' is private and only accessible within class 'Drawing'.

class Shape {
  protected points: EternaPoint[];

  constructor(points: EternaPoint[]){
    this.points = [...points];
  }
}

class Square extends Shape {
  constructor(topLeft: EternaPoint, length: number){
    super([topLeft]);
  }

  changeTopleft(newTopLeft: EternaPoint){
    this.points = [newTopLeft];
  }
}

const s = new Square(point, 5);

// s.points // => Error: Property 'points' is protected and only accessible within class 'Shape' and its subclasses.

class Door {
  static doorCount = 0;
  constructor(){
    Door.doorCount++;
    // console.log(this.doorCount); // => Property 'doorCount' is a static member of type 'Door'
  }
}

// Let's say that we know the user will pass a property, but not in the constructor,
// like what's done in VueJS
class VueComponent {
  // prop1: number; // => Error: Property 'prop' has no initializer and is not definitely assigned in the constructor. 
  prop2!: number; // Solution: ! says that it will be initialized for sure
  prop3?: number; // Another solution: ? says that it may be undefined, like in functions
}

const myComponent = new VueComponent();
myComponent.prop2 = 3;