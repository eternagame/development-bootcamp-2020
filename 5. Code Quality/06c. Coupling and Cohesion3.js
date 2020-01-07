class Base {
  draw(){
    // Bad - High coupling:
    this.baseMark.draw();
    this.body.draw();
    this.glueMarker.draw();
    
    // What if we want to add a new child (like an inner marker)?
    // What if we want to let a *user-created* booster to add a new child?

    // Good - Low coupling:
    for(const child of this.pixiObject){
      child.draw();
    }
  }
}