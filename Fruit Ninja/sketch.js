var gameState=1;
var score;
var wall1,wall2,wall3,wall4,wall5,wall6;
var wall7,wall8,wall9,wall10,wall11,wall12;
var wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;
var goal,ball;
var wallGroup;
function preload(){
  
}



function setup() {
  createCanvas(800, 800);
  wall1  = new Wall(50, 133, 10, 135);
  wall2 = new Wall(120, 100, 10, 70);
  wall3 = new Wall(340, 140, 450, 10);
  wall4 = new Wall(117, 195, 145, 10);
  wall5 = new Wall(190, 250, 10, 120);
  wall6 = new Wall(260, 310, 150, 10);
  wall7 = new Wall(330, 295, 10, 40);
  wall8 = new Wall(345, 280, 40, 10);
  wall9 = new Wall(370, 265, 10, 40);
  wall10 = new Wall(385, 250, 40, 10);
  wall11 = new Wall(400, 235, 10, 40);
  wall12 = new Wall(435, 220, 80, 10);
  wall13 =new Wall(560, 285, 10, 300);
  wall14 =new Wall(470, 285, 10, 140);
  wall15 = new Wall(260, 350, 430, 10);
  wall16 = new Wall(350, 430, 430, 10);
  wall17 = new Wall(50, 430, 10, 150);
  wall18 = new Wall(345, 500, 600, 10);
  wall19 = new Wall(650, 355, 10, 300);
  wall20 = new Wall(390, 70, 550, 10);

  goal = createSprite(650, 140, 50, 120);
  goal.shapeColor = "yellow";
  ball = createSprite(70,120,20,20);
  ball.shapeColor = "orange";
}

function draw(){
  background("skyblue");

  if(keyIsDown(UP_ARROW)){
    ball.velocityY = -5;
}
if(keyIsDown(RIGHT_ARROW)){
    ball.velocityX = 5;
}
if(keyIsDown(DOWN_ARROW)){
    ball.velocityY = 5;
}
if(keyIsDown(LEFT_ARROW)){
    ball.velocityX = -5;
}  

if(ball.isTouching(goal)){
  ball.velocityX = 0;
  ball.velocityY = 0;
  textSize(20);
  fill(255);
  text("You Won!!",200,200);
}


wall1.display();
wall2.display();
wall3.display();
wall4.display();
wall5.display();
wall6.display();
wall7.display();
wall8.display();
wall9.display();
wall10.display();
wall11.display();
wall12.display();
wall13.display();
wall14.display();
wall15.display();
wall16.display();
wall17.display();
wall18.display();
wall19.display();
wall20.display();
drawSprites();
}
