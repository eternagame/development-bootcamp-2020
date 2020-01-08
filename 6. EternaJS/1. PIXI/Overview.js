// Modified from pixijs.io
document.addEventListener("DOMContentLoaded", function(){
  const renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
  document.body.appendChild(renderer.view);

  // A stage is the main element which is the parent of everything else,
  // and is what gets rendered.
  const stage = new PIXI.Container();

  const container = new PIXI.Container();

  stage.addChild(container);
  for (var i = 0; i < 5; i++) {
    const bunny = PIXI.Sprite.fromImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM6FMZVdPx7R6CBLhp1hmNG8ua5iUQ-8Yk7PbNaLAbZML6x3hRFQ&s');
    bunny.width = 20;
    bunny.height = 20;
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
  const base = new PIXI.Container();
  const arrowForward = new PIXI.Graphics();
  arrowForward.drawPolygon([new PIXI.Point(-0.5, 0), new PIXI.Point(0.5, 0), new PIXI.Point(0, 1)]);
  arrowForward.y = 0.5;

  const arrowBack = arrowForward.clone().moveTo(0, -0.5);
  arrowBack.rotation = Math.PI;

  const body = new PIXI.Graphics().beginFill(0xff00ff).drawCircle(0,0,1).endFill();

  base.addChild(body, arrowBack, arrowForward);
  stage.addChild(base);
});