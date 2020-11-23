var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var invisibleGround, ground, bgroundImage;
var score=0;
var survivalTime = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

  bgroundImage = loadImage("jungle.jpg");

}

function setup() {

  createCanvas(400, 400);
  background("black");

  obstacleGroup = createGroup();

  ground = createSprite(200, 370, 400, 400);
  ground.scale = 1.5;
  ground.velocityX = 5;
  ground.x = ground.width / 2;
  ground.addImage(bgroundImage)

  invisibleGround = createSprite(0, 380, 400, 50);
  invisibleGround.visible = false;

  monkey = createSprite(50, 360, 20, 20)
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.11;

  ground.depth = monkey.depth;
  monkey.depth = monkey.depth + 1;
}

function draw() {

  background("black");

  if (ground.x > 200) {
    ground.x = 0;
  }

  monkey.collide(invisibleGround);

  if (keyDown("space") && monkey.y >= 200) {
    monkey.velocityY = -12;
  }

  monkey.velocityY = monkey.velocityY + 0.8
  
  stroke("white");
  textSize=(20);
  fill("white");
  text("Score: "+ score,15,25);
  
  stroke("white");
  textSize=(20);
  fill("white");
  survialTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 300,25);

  Banana();
  Obstacles();

  drawSprites();
}

function Banana() {
  if (frameCount % 60 == 0) {
    banana = createSprite(400, 200, 10, 10);
    banana.addImage(bananaImage);
    banana.scale = 0.07
    banana.y = Math.round(random(120, 200));
    banana.velocityX = -5;
    banana.lifetime = 100;
  }
}

function Obstacles() {
  if (frameCount % 300 == 0) {
    obstacle = createSprite(400, 325, 10, 10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -5;
    obstacleGroup.add(obstacle);
    banana.lifetime = 100;
  }
}