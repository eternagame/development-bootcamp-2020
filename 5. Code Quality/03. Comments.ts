// A misplaced comment can be indicitive of bad code
function getDirectionCode(forwardDirection, wheelDirection){
  if(forwardDirection.x > wheelDirection.x)
    return 0x04; // left
  else
    return 0x02; // right
}

// Why do we need these comments? Because we didn't use variables where we should have

// Better:
enum DirectionCode { LEFT = 0x04, RIGHT = 0x02 }

function getDirectionCode2(forwardDirection, wheelDirection){
  if(forwardDirection.x > wheelDirection.x)
    return DirectionCode.LEFT;
  else
    return DirectionCode.RIGHT;
}

// If you write a comment to explain a specific line, it has to update whenever that line changes

// Good Comments usually explain why, as opposed to what or how
function addSetEntry(set, value) {
  /* Don't return `set.add` because it's not chainable in IE 11. */    
  set.add(value);
  return set;
}

class BaseRope {
  getSegmentBetween(base1, base2) {
    // We have to make it straight, instead of something nicer,
    // to make sure we can not-render it again when the bases move
    return {start: base1.pos, end: base2.pos};
  }
}