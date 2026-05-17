

function intro () {
 
  this.setup = function() {

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
      [620,150],
      [300,600],
      [700,500]
      
    
    ];

    this.step = 0;
  }

  this.draw = function() {
    //background
       background(225);
       image(s3, 0 , 0 , width, height);

   //crime board images
    image(b1, 370 , 300 , 200, 200);
    image(b2, 80 , 200 , 200, 200);
    image(b3, 270 , 540 , 200, 200);
    image(b4, 605 , 100 , 200, 200);
    image(b5, 50 , 450 , 200, 200);
    image(b6, 645 , 350 , 200, 200);
    //decorations
    image(b5, 700 , 600 , 150, 150);
    image(b5, 400 , 90 , 150, 150);


   //text
    textAlign(CENTER);
    textSize(30);
    text("Connect the Evidence ", 200, 130);

    //dots

    for (let d of this.dots) {
      circle(d[0], d[1], 20);
    }

    for (let i = 0; i < this.step; i++) {
      //color and thickness of line
      stroke(128, 0, 32);
      strokeWeight(5);

      line(
        this.dots[i][0],
        this.dots[i][1],
        this.dots[i + 1][0],
        this.dots[i + 1][1]
      );
    }


    // close final connection
  if (this.step >= this.dots.length - 1) {

    line(
      this.dots[this.dots.length - 1][0],
      this.dots[this.dots.length - 1][1],

      this.dots[0][0],
      this.dots[0][1]
    );

    //Next button
     drawGui();
     if (N.isPressed) {
       mgr.showScene(ins3);
     }
  }
  }

  this.mousePressed = function() {

    let next = this.dots[this.step + 1];
    if (!next) return;

    if (dist(mouseX, mouseY, next[0], next[1]) < 20) {
      this.step++;
    }

  }
}
//////////////////////  suspect //////////////////////// 

function ins3()  {

  this.setup = function() {
    
    
    }
 
 
    this.draw = function() {
     background(225);
       image(s2, 0 , 0 , width, height);
    

  //Text
     textAlign(CENTER);
     textSize(30);
     
     text("A witness came foward! Help her identify the suspect.", width/2,600);
     text("He had blonde hair, etc", width/2,650);
     
     //Next button
     drawGui();
     if (N.isPressed) {
       mgr.showScene(ins4);
     }
  };

 }



////////////////////// Ending  //////////////////////// 

 function ins4()  {

  this.setup = function() {
  }
  
    this.draw = function() {
     background(225);
       image(s2, 0 , 0 , width, height);
    

  //Text
     textAlign(CENTER);
     textSize(30);
     
     text("After interrogation, your partner was found alive", width/2,100);
     text("Good job Agent!", width/2,150);
     text("Not ready to go yet?", width/2,650);
     text("Continue to explore the website", width/2,700);
     
  };

 }
 

 