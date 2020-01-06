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