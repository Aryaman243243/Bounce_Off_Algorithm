var fixedrect;
var movingrect;

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(500,300,100,50);
  movingrect.shapeColor = "red";
  movingrect.velocityX = -5;
  fixedrect = createSprite(100, 300, 100, 50);
  fixedrect.shapeColor = "blue";
  fixedrect.velocityX = 5;
}

function draw() {
  background("lightgrey");
 // movingrect.x = World.mouseX;
  //movingrect.y = World.mouseY;
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2){
      movingrect.velocityX = movingrect.velocityX * (-1);
      fixedrect.velocityX = fixedrect.velocityX * (-1);
    }

    if(movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 &&
      fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
        movingrect.velocityY = movingrect.velocityY * (-1);
        fixedrect.velocityY = fixedrect.velocityY * (-1);
 }

  drawSprites();
}