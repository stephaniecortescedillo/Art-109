

function intro () {
 
  this.setup = function() {
    textSize(30);
    background(225);

//button 1
      gui = createGui();
      N = createButton("Next", 560, 600, 150, 50); // x, y, width, height
    }
 
 
    this.draw = function() {
     background(225);
       image(s2, 0 , 0 , width, height);
    

//Text
     textAlign(CENTER);
     textSize(40);
     
     text(" Kidnapped ", width/2+210,200);
     text("By stephanie Cortes", width/2+250,250);
     
     //Next button
     drawGui();
     if (N.isPressed) {
       mgr.showScene(ins1);
     }
  };
    }
    
     
///////////////////////////// Kitchen ///////////////

 function ins1() {

  this.setup = function () {

    // image data
    pd = [

      {
        x: 180,
        y: 280,
        w: 120,
        h: 100,
        img: s11,
        text: "Blood x1"
      },

      {
        x: 260,
        y: 360,
        w: 120,
        h: 100,
        img: s22,
        text: "broken cup"
      },

      {
        x: 190,
        y: 400,
        w: 120,
        h: 100,
        img: s33,
        text: "Blood x2"
      },

      {
        x: 390,
        y: 400,
        w: 120,
        h: 100,
        img: s44,
        text: "Broken phone"
      },

       {
        x: 450,
        y: 150,
        w: 120,
        h: 100,
        img: s55,
        text: "Window shards"
      },
       
      {
        x: 300,
        y: 520,
        w: 120,
        h: 100,
        img: s33,
        text: "Blood x3"
      },


    ];
  };

  this.draw = function () {

    background(225);

     if (s2) {
     
       image(s2, 0 , 0 , width, height);
     }
    // draw images
    for (let p of pd) {

      image(p.img, p.x, p.y, p.w, p.h);
    }

    // show text
    fill(0);
    textSize(24);
    text(message, 710, 650);
  };


  

}


///////////////////////  Crime Board  ////////////////////////

function ins2() {

  this.setup = function() {

    this.dots = [
      [140,250],
      [500,150],
      [350,500],
      [800,580]
      //[500,600],
    
    ];

    this.step = 0;
  }

  this.draw = function() {
       background(225);
       image(s3, 0 , 0 , width, height);
   //text
    textAlign(CENTER);
    textSize(30);
    text("Connect the Evidence ", 200, 130);


    for (let d of this.dots) {
      circle(d[0], d[1], 20);
    }

    for (let i = 0; i < this.step; i++) {
      line(
        this.dots[i][0],
        this.dots[i][1],
        this.dots[i + 1][0],
        this.dots[i + 1][1]
      );
    }
  }

  

  this.mousePressed = function() {

    let next = this.dots[this.step + 1];
    if (!next) return;

    if (dist(mouseX, mouseY, next[0], next[1]) < 20) {
      this.step++;
    }


    // Finished square
    if (currentDot === dots.length - 1) {
      // Connect back to start
      ctx.beginPath();
      ctx.moveTo(dots[dots.length - 1].x, dots[dots.length - 1].y);
      ctx.lineTo(dots[0].x, dots[0].y);
      ctx.stroke();

      setTimeout(() => {
        alert("Square completed!");
      }, 100);
    }
  }
}
//////////////////////  Paperwork  ////////////////////////

function ins3()  {


 }


 