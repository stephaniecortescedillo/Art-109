let loy = 0;
let gui;
var a, b, c,d,e, Y, N, M;
var g1;

function intro () {
 
  this.setup = function() {
    textSize(30);
    background(161, 252, 255);
    console.log("We are at setup for intro");

//button 1
      gui = createGui();
      N = createButton("Next", 560, 600, 150, 50); // x, y, width, height
 
 // Volume 
 if (snd5) {
  snd5.setVolume(0.5);
}

// Button to play the sound 
const playSoundButton = createButton("Play Sound", 540 , 700, 200, 50);
playSoundButton.onPress = () => {
  if (snd5 && snd5.isLoaded()) {
    snd5.play();
    console.log("Sound played manually");
  } 
  else {
    console.log("Sound is not loaded");
  }
};
    }
 
 
    this.draw = function()
    {
     background(161, 252, 255);
     push();
     imageMode(CENTER);
     if (s1) {
       image(s1, width / 2 , height / 2 , 900, 800);
     }
     pop();

//Text
     textAlign(CENTER);
     fill(0);
     textSize(40);
     textFont(tv);
     
     text(" Title ", width/2+210,200);
     text("By stephanie Cortes", width/2+250,250);
     
     //Next button
     drawGui();
     if (N.isPressed) {
       mgr.showScene(ins1);
     }
  };
    }
  
    
     
///////////////////////////// page2 ///////////////

 function ins1()  {
  
  this.setup = function() {
    background(161, 252, 255);
    console.log("We are at setup for ins1");
    
 // Create button
    gui = createGui();
    g1 = createButton("Begin Game", width / 2-100, 250, 150, 50);
    drawGui();
}

  this.draw = function(){
    push();
    imageMode(CENTER);
    if (s2) {
      image(s2, width / 2 , height / 2 , 900, 800);
    }
    pop();

    textSize(40);
    fill(0);
    textFont(ks);
    text("So he got his winter scarf and went outside to gather food", width/2,100);
    text("Help frederick by catching as much food as possible",  width/2,150);
    text("(beware the racoons and their traps)", width/2,200);
    
    // button
    drawGui();
    if (g1.isPressed) {
      console.log("Begin Game button pressed");
      mgr.showScene(game1); // Transition to Game1
   }
  } 
 }


///////////////////////  Game  ////////////////////////

function game1()  {
  
  let maxMisses = 5; // Maximum allowed misses

  this.setup = function() {
    console.log("We are at setup for game1");

     // Volume of effect
    if (snd5) {
      snd5.setVolume(0.6);
    }
}

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

this.keyPressed = function () {
  switch (key) {
   
       case '4': // Transition to the next scene
          console.log("Key '4' pressed. Transitioning to 'ins2'");
          mgr.showScene(ins2); 
          loop(); 
          break;
          
      case '1': // Return to intro
          mgr.showScene(intro);
          break;
  }
};
}

//////////////////////  End scene  ////////////////////////

function ins2()  {
  this.setup = function()  {
    console.log("we are at set up on theend");
}

this.draw = function() {
 background(255,0,0);
 push();
 if (s4) {
  image(s4, width / 2 , height / 2 , 900, 800);
}
pop();
 
 textAlign(CENTER);
 fill(0);
 textSize(50);
 text("Frederick has enough food ", width / 2, 100);

}
 }

