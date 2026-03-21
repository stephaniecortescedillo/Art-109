let Canvas;
let points = [];
let font;
let r = 15; let angle = 0;


function preload(){
    font =loadFont("images/FugazOne-Regular.ttf");
}

function setup (){
    Canvas= createCanvas(windowWidth, windowHeight);
    Canvas.position(0,0);
    Canvas.style("z-index", "-2");
    noStroke();
  
  points = font.textToPoints("CAT", 200, 300, 300, {
    sampleFactor:0.1,
    simplifyThreshold: 0
  });
  angleMode(DEGREES);   
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}

function draw(){
    fill (random(225),random(225),random(225));
     star (mouseX, mouseY, 15, 36, 15);

    
     //letters
    for (let i=0; i<points.length; i++) {
    ellipse(points[i].x + r*sin(angle + i*25), points[i].y, 10, 10);
  }
  angle += 5;

}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;

  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);

    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}