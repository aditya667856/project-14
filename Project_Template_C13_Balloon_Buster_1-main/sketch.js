var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background20.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blueBalloon = loadImage("blue_balloon0.png");
  pinkBalloon = loadImage("pink_balloon0.png");
  greenBalloon = loadImage("green_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(backgroundImage);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
  }
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      blueBalloon();
    }
  }
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
     greenBalloon();
    }
  }
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      pinkBalloon();
    }
  }
drawSprites()
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  //write code for spwaning blue balloons
blueBalloon = createSprite(0,Math.round(random(20, 370)), 10, 10);
blueBaloon.velocityX = 3;
  blueBalloon.lifetime = 150;
  blueBalloon.scale = 0.1;



}

function greenBalloon() {
  //write code for spwaning green balloons
  greenBalloon = createSprite(0,Math.round(random(20, 370)), 10, 10);
  greenBaloon.velocityX = 3;
  greenBalloon.lifetime = 150;
  greenBalloon.scale = 0.1;

}

function pinkBalloon() {
  //write code for spwaning pink balloons
  pinkBalloon = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pinkBaloon.velocityX = 3;
  pinkBalloon.lifetime = 150;
  pinkBalloon.scale = 0.1;

}
