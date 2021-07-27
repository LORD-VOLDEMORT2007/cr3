var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
carani1 = loadAnimation("images/car1.png")
carani2 = loadAnimation("images/car2.png")
playery = loadAnimation("images/Player-03.png")
loggy = loadAnimation("images/log2.png")

}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  
  
  for (i = 0 ; i < 40 ; i ++){

    logs = new Log(-9)
    logs.spt.addAnimation("lgs" , loggy)
    logs.spt.scale = 0.08
    logGroup1.add(logs.spt)

  }

  for(i = 0; i < 6 ; i++){

    grass = createSprite(683 , height - 50 - (i * 400) , width , grassHeight)

    if(i % 2 === 0 ){

      road1 = createSprite(683 , height - 150 - (i * 400) - grassHeight , width ,300)
      road1.shapeColor = 'black'
    }

    grass.shapeColor = 'grey'

  }

  for (i = 0 ; i < 40 ; i++){
    cars = new Car(9)
    carGroup1.add(cars.spt)

  }
  console.log("hi")

  player = new Player( width/2 ,height - 25)
  player.spt.addAnimation("plyr" , playery)
  player.spt.scale = 0.07
  

 }

function draw() {
  background("skyblue");
  for(i = 1 ; i < 40 ; i ++){
  if (carGroup1[i].x > 1366 ){
    carGroup1[i].x = 0
  }

  if (carGroup1[i].x < 0){

    carGroup1[i].x = 1366
  }
  }

  for(i = 1 ; i < 40 ; i ++){
    if (logGroup1[i].x < -70 ){
      logGroup1[i].x = 1366
    }}



    if (keyDown("left"))  
    { 
      player.moveLeft();
    }
    if (keyDown("right")) 
    { 
      player.moveRight();
    }
    if (keyDown("up")) 
    {
      player.moveUp();
    }
    if (keyDown("DOWN_ARROW")) 
    {
      player.moveDown();
    }

  

  if(carGroup1.isTouching(player.spt)){

    player.spt.x = width/2
    player.spt.y = height - 25

  }  
  
  if(logGroup1.isTouching(player.spt)){

    player.spt.x += -5
  }
  else if ((player.spt.y > height-1550 && player.spt.y < height-1300) ||
   (player.spt.y < height-500 && player.spt.y > height-850) || (player.spt.y > height)
   || (player.spt.x < 0) || (player.spt.x > width)) {

    player.spt.x = width/2
    player.spt.y = height - 25

   }

  translate (0 , -player.spt.y + height - 150)
  
  drawSprites();
}

