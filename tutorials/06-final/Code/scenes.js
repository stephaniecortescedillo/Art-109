

function intro () {
 
  this.setup = function() {

    //button 1
      gui = createGui();
      N = createButton("Next", 560, 700, 150, 50); // x, y, width, height
    }
 
    this.draw = function() {
     background(225);
     image(s2, 0 , 0 , width, height);
    

    //Text
     textFont(fnt1);
     textAlign(CENTER);
     textSize(40);
     
     text(" Kidnapped ", width/2+210,600);
     text("By stephanie Cortes", 650,650);
     
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
        y: 300,
        w: 120,
        h: 100,
        img: s22,
        text: "broken cup"
      },

      {
        x: 190,
        y: 450,
        w: 120,
        h: 100,
        img: s33,
        text: "Blood x2"
      },

      {
        x: 360,
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
        y: 500,
        w: 120,
        h: 100,
        img: s33,
        text: "Blood x 3"
      },


    ];
  };

   //Instruction timer

  this.draw = function () {

    background(225);

     if (ins1) {
     
       image(s2, 0 , 0 , width, height);

       // instruction timer (5 seconds)
       console.log("Start");
       
       setTimeout(() => {
       console.log(" 5 seconds");
        textSize(40);
        text("Press 3 to continue", 700,750);

        }, 5000);

        console.log("End");
     }

    // draw images
      for (let p of pd) {
      image(p.img, p.x, p.y, p.w, p.h);
      }

    // text
      textFont(fnt1);
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
    image(b1, 370 , 300 , 300, 300);
    image(b2, 30 , 150 , 300, 300);
    image(b3, 200 , 500 , 300, 300);
    image(b4, 500 , 20 , 300, 300);
    image(b6, 605 , 300 , 300, 300);
    //Notes
    image(b5, 350 , 100 , 200, 200);
    image(b7, -50 , 420 , 400, 400);


   //text
    textFont(fnt1);
    textAlign(CENTER);
    textSize(30);
    text("Connect the Evidence ", 200, 130);
    textSize(20);
    text("Not enough blood", 150 , 600);
    text("= Not dead ", 150 , 650);



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

  this.setup = function () {
    // image data
    pd = [

      {
        x: 10,
        y: 200,
        w: 300,
        h: 300,
        img: b11,
        text: "Nah! try again"
      },      
      {
        x: 320,
        y: 200,
        w: 300,
        h: 300,
        img: b22,
        text: "Yeah! Press 3 to continue"
      },

      {
        x: 600,
        y: 200,
        w: 300,
        h: 300,
        img: b33,
        text: "Nah! try again"
      },
    ]
    }

     this.draw = function() {
      background(225);
     
 // draw images
      for (let p of pd) {
      image(p.img, p.x, p.y, p.w, p.h);
      }
  //Text
     textFont(fnt1);
     textAlign(CENTER);
     textSize(37);
     text("A witness came foward! Help her identify the suspect.", width/2,100);
     text("He has blonde hair, blue eyes and a green sweater", width/2,700);
  
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
     textFont(fnt1);
     textAlign(CENTER);
     textSize(30);
     
     text("After interrogation, your partner was found alive", width/2,100);
     text("Good job Agent!", width/2,150);
     text("Not ready to go yet?", width/2,650);
     text("Continue to explore the website", width/2,700);
     
  };

 }
 

 