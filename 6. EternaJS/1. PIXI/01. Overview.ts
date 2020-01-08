import { Container, Graphics, Point, Sprite } from "pixi.js";

// Modified from pixijs.io
const renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);

// A stage is the main element which is the parent of everything else,
// and is what gets rendered.
const stage = new Container();

const container = new Container();

stage.addChild(container);
for (var i = 0; i < 5; i++) {
  const bunny = Sprite.fromImage('required/assets/basics/bunny.png');
  bunny.x = 40 * i;
  bunny.y = 40;
  container.addChild(bunny);
};

container.x = 100;
container.y = 60;

let ticker = PIXI.ticker.shared;
const speed = 1;

ticker.add(function (time) {
  for(const bunny of container.children){
    bunny.x += time * speed;
  }
  // When moving the parent, all of the children move alongside it
  container.y += time * speed / 2;
  renderer.render(stage);
});

// Text
const text = new PIXI.Text('You need at least 4 GU pairs', {
  fontFamily : 'Arial',
  fontSize: 24,
  fill : 0xff1010,
  align : 'center'
});
text.x = 50;
text.y = 50;
stage.addChild(text);

// Graphics Object
const base = new Container();
const arrowForward = new Graphics();
arrowForward.drawPolygon([new Point(-0.5, 0), new Point(0.5, 0), new Point(0, 1)]);
arrowForward.y = 0.5;

const arrowBack = arrowForward.clone().moveTo(0, -0.5);
arrowBack.rotation = Math.PI;

const body = new Graphics().beginFill(0xff00ff).drawCircle(0,0,1).endFill();

base.addChild(body, arrowBack, arrowForward);
stage.addChild(base);