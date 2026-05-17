//Stores stuff

let s11, s22, s33, s44, s55;
let b1, b2, b3, b4,b5;
let fnt1;
let message = "";
let pd =[];
let mgr;

 textFont(cou);

function preload() {

  //background images
  s1 = loadImage("assets/bg1.png");
  s2 = loadImage("assets/bg1.png");
  s3 = loadImage("assets/bg2.jpg");
 
 // kitchen images
 s11 = loadImage("assets/1.gif");
 s22 = loadImage("assets/2.gif");
 s33 = loadImage("assets/3.gif");
 s44 = loadImage("assets/4.gif");
 s55 = loadImage("assets/5.gif");
 s66 = loadImage("assets/6.gif");

 //Crime-board images

 b1 = loadImage("assets/b1.png");
 b2 = loadImage("assets/b2.png");
 b3 = loadImage("assets/b3.png");
 b4 = loadImage("assets/b4.png");
 b5 = loadImage("assets/b5.png");
 b6 = loadImage("assets/b6.png");

 //fonts
  fnt1 = loadFont("assets/StardosStencil-Regular.ttf");

}
 

function setup() {
  let canvas = createCanvas(900, 800);
  canvas.parent("scenemg");

  mgr = new SceneManager();
  // Preload scenes but needed if showNextScene() is used.
  mgr.addScene(intro);
  mgr.addScene(ins1);
  mgr.addScene(ins2);
  mgr.addScene(ins3);
  mgr.addScene(ins4);

  mgr.showNextScene();
}

function draw() {
  mgr.draw();
  
}

function mousePressed() {
 // insert crying emoji
  mgr.handleEvent("mousePressed");



  for (let p of pd) {

    if (
      mouseX > p.x &&
      mouseX < p.x + p.w &&
      mouseY > p.y &&
      mouseY < p.y + p.h
    ) {

      message = p.text;
    }
  }

  /////////crime board code

  // stop after complete
  if (step >= dots.length - 1) return;

  // next target dot
  let next = dots[step + 1];

  // check if click is close enough
  if (
   dist(mouseX, mouseY, next[0], next[1]) < 100
  ) {
    step++;
  }
}

function mouseDragged() {
  mgr.handleEvent("mouseDragged");
}

function keyPressed(){
   mgr.handleEvent("keyPressed");
  // less confusing way3
    if (key === "1") mgr.showScene(intro);
    if (key === "2") mgr.showScene(ins1);
    if (key === "3") mgr.showScene(ins2);
    if (key === "4") mgr.showScene(ins3);
     if (key === "5") mgr.showScene(ins4);
           
    }


function touchMoved() {
  return false;
}


