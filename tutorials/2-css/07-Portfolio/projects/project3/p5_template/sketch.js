
let snd1,snd2, snd3,snd4,snd5;
let cat,vives;
let tv,ks; 
var s4,s5,bg;
var mgr;



function preload() {

  //sounds
  snd4 = loadSound("assets/game-start-6104.mp3");
  snd5 = loadSound("assets/sinnesloschen-beam-117362.mp3");

  //background images
  s1 = loadImage("assets/s1.PNG");
  s2 = loadImage("assets/s2.PNG");
  s3 = loadImage("assets/s3.png");
  s4 = loadImage("assets/s4.png");
  bg = loadImage("assets/bg.GIF");

//fonts
  tv = loadFont("assets/NotTunedTV.ttf");
  ks = loadFont("assets/Kestoy_Selfie.ttf");
  
  ////Game
    cat = loadImage("assets/cat.png");
  playerImage = loadImage("assets/cat.png");  
  imageArray = [
      loadImage("assets/1.png"),
      loadImage("assets/2.png"),
  ];
  imageArray2 = [
      loadImage("assets/6.PNG"),
      loadImage("assets/7.PNG"),
      loadImage("assets/8.PNG"),
  ];
}

function setup() {
  createCanvas(900, 800);
  background(0);

  mgr = new SceneManager();
  // Preload scenes but needed if showNextScene() is used.
  mgr.addScene (intro);
  mgr.addScene (ins1);
  mgr.addScene (game1);
  mgr.addScene (ins2);
  mgr.showNextScene();
}

function draw() {
  mgr.draw();
}

function mousePressed() {
  mgr.mousePressed();
}

function mouseDragged() {
  mgr.handleEvent("mouseDragged");
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( intro );
            break;
         case '2':
            mgr.showScene( ins1 );
            break;
            case '3':
            mgr.showScene( game1 );
            break;
            case '4':
            mgr.showScene( ins2);
            break;
    }
6
    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
function touchMoved() {
  return false;
}


