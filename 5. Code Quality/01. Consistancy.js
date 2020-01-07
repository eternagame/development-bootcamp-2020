function addToArray(base_positions, newPosition){
  if(newPosition.y > newPosition.x)
      base_positions.push(newPosition);
  else
    base_positions.push(new Point(newPosition.y, newPosition.x))
}

// Let eslint make sure your code follows a consistant, readable style


