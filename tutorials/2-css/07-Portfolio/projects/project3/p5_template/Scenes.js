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
     text("One day while looking out the", width/2+180,150);
     text("window, Frederick realized ", width/2+210,200);
     text("that winter would be", width/2+250,250);
     text("coming soon", width/2+250,300);
    
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

    // Initialize objects
    object = createVector(random(30, width - 30), -30);
    vel = createVector(0, 3);
    currentImage = random(imageArray);
    object2 = createVector(random(30, width - 30), -30);
    vel2 = createVector(0, 3);
    currentImage2 = random(imageArray2);

     // Volume of effect
    if (snd5) {
      snd5.setVolume(0.6);
    }
}

this.draw = function(){
    background(0);
    push();
    imageMode(CENTER);
    if (bg) {
      image(bg, width / 2 , height / 2 , 900, 800);
    }
    pop();

    //HANDS SIZE
    let player = createVector(mouseX, height - 100);

    // Display points and misses
    textFont(tv);
    textSize(40);
    fill(0);
    text(`Points: ${points}`,width / 2+10, 300);
    text(`Misses: ${misses}/${maxMisses}`, width / 2+10,350);

    // Timer logic
    if (timer > 0) {
        timer -= 1 / 90;
    } else {
        misses++;
        timer = 5;
    }

    // Move objects
    object.add(vel);
    object2.add(vel2);

    // Display images at object positions & SIZE
    image(currentImage, object.x, object.y, 90, 90);
    image(currentImage2, object2.x, object2.y, 90, 90);

    // Display Hands
    imageMode(CENTER);
    image(playerImage, player.x, player.y, 200, 200);

     // Check for collisions with nuts
     let d1 = dist(player.x, player.y, object.x, object.y);
     if (d1 < 50) {
         object = createVector(random(30, width - 30), -30);
         vel.y += 0.5;
         points++;
         currentImage = random(imageArray);
         object = createVector(random(30, width - 30), -30);

         if (snd4 && snd4.isLoaded()) {
          snd4.play();
          console.log("Sound played manually");
        } else {
          console.log("Sound is not loaded");
        }
    
     } else if (object.y > height) {
         misses++;
         object = createVector(random(30, width - 30), -30);
         vel.y = 5; 
     }
 

    // Check for collisions with rocks
    let d2 = dist(player.x, player.y, object2.x, object2.y);
    if (d2 < 50) {
      object2 = createVector(random(30, width - 30), -30);
        vel2.y += 0.5; 
        misses++;
        currentImage2 = random(imageArray2);
        object2 = createVector(random(30, width - 30), -30);

        if (snd4 && snd4.isLoaded()) {
          snd4.play();
          console.log("Sound played manually");
        } else {
          console.log("Sound is not loaded");
        }
       
      
    } else if (object2.y > height) {
        object2 = createVector(random(30, width - 30), -30);
        vel2.y += 0.5; 
    }

    /// Check for game over
    if (misses >= maxMisses) {
      noLoop();
      textAlign(CENTER);
      textSize(50);
      text("Game Over!", width / 2+10, height / 2+10);
      text("Press R to restart", width / 2+10, height / 2 + 60+10);
  }

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
    case 'R': // Restart the game
    case 'r':
        points = 0;
        timer = 5;
        misses = 0;

          // Reset object positions and velocities
          object = createVector(random(30, width - 30), -30);
          vel = createVector(0, 3);
          currentImage = random(imageArray);

          object2 = createVector(random(30, width - 30), -30);
          vel2 = createVector(0, 2.5);
          currentImage2 = random(imageArray2);
          loop(); 

          break;
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
 text("for the winter", width / 2, 150);
 text("You Win!", width / 2,200);
}
 }

