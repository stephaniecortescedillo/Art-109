

function intro () {
 
  this.setup = function() {
    textSize(30);
    background(161, 252, 255);

//button 1
      gui = createGui();
      N = createButton("Next", 560, 600, 150, 50); // x, y, width, height
    }
 
 
    this.draw = function() {
     background(225);

     if (s1) {
       image(s2, 0 , 0 , width, height);
     }

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

function ins2()  {
  
 

this.draw = function(){
    background(0);
    push();
    imageMode(CENTER);
    if (s3) {
      image(s3, width / 2 , height / 2 , 900, 800);
    }
    pop();


//check for Win
  if (points >= 10){
    noLoop();
    textAlign(CENTER);
    textSize(50);
    fill(0);
    text("Great Job!", width / 2+10, height / 2);
    text("Press 4 to continue", width / 2+15, height / 2 + 60);
    }
}


}

//////////////////////  Paperwork  ////////////////////////

function ins3()  {


 }


 