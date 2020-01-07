// Very good read on the topic - https://enterprisecraftsmanship.com/posts/cohesion-coupling-difference/

// God object - Too coupled:
class Pose2D {
  drawBases() {
    //...
  }

  activateBooster() {
    //...
  }
}

function actiavteFavoriteBoosters(pose: Pose2D) {
  // Why should it have access to drawBases?
}