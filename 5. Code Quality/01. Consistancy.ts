//type Point;

function addToArray(base_positions, newPosition){
  if(newPosition.y > newPosition.x)
      base_positions.push(newPosition);
  else
    //base_positions.push(new Point(newPosition.y, newPosition.x))
}

// Let eslint make sure your code follows a consistant, readable style

class C {
  public x;
  public y;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class D {
  constructor(public x, public y) {}
}
