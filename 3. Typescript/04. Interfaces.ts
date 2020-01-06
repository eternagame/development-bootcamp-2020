export {}

class EternaPoint {
  x: number;
  y: number;
  constructor(x: number, y: number){
    this.x = x;
    this.y = y;
  }
}

const points: EternaPoint[] = [];

function getPointFromServer(){
  return { x: 5, y: 7 };
}

async function getPoints(){
  const point = getPointFromServer();
  points.push(point);
}

// If we only read the points from the server, the class wouldn't get used as an actual class!
interface Point {
  x: number;
  y: number;
}

const points2: Point[] = [];
points2.push({x: 5, y: 7}); // Both this and classes have autocomplete!

// Error: Point3D doesn't implement x and y
class Point3D implements Point {
  
}

class Vector implements Point {
  private length: number;
  private angle: number;
  get x() {
    return 0;
  }
  get y() {
    return 0;
  }
  constructor(length: number, angle: number){
    this.length = length;
    this.angle = angle
  }
}