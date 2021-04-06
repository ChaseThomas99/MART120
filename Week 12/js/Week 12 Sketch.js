// x and y for my character
var characterX = 100;
var characterY = 100;

// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// enemy1 variables
var ballX;
var ballY;
var ballDirectionX;
var ballDirectionY;

// enemy2variables
var ball2X;
var ball2Y;
var ball2DirectionX;
var ball2DirectionY;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(500, 600);

    // enemy1
    ballX = random(0,width); //random x starting location
    ballY = random(0,height);//random y starting location
    ballDirectionX = 3;
    ballDirectionY = 3;

    // enemy2
    ball2X = random(0,width); //random x starting location
    ball2Y = random(0,height);//random y starting location
    ball2DirectionX = 5;
    ball2DirectionY = 5;5

    createCharacter(50,50);
}

function draw()
{
    background(500);
    stroke(0);
    fill(0);
    
    // call createBorders function
    createBorders(10);

    // exit message
    exitMessage();

    //createCharacter(50,50);
    drawCharacter();
    characterMovement();

    // enemy1
    createEnemy1();
    enemy1Movement();

    // enemy 2
    createEnemy2();
    enemy2Movement();

    // move shape
    moveShape();

    // check if the shape has gone out of bounds
    boundsCheck();

    // check if the character has left exit
    exitCheck();

    // create shape based on the mouse click
    createShapeOnMouseClick();

}

function characterMovement()
{
    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY += 5;   
    }
    if(keyIsDown(a))
    {
        characterX -= 5;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 5;   
    }
}

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
}

function drawCharacter()
{
    fill(0);
    circle(characterX,characterY,25);
}
function createBorders(thickness)
{
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-150);
    // right lower border
    rect(490,500,10,200);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function createEnemy1()
{
    fill(255,69,0);
    circle(ballX,ballY,40);
}

function enemy1Movement()
{
    ballX=ballX+ballDirectionX;
    ballY=ballY+ballDirectionY;
    if ((ballX > width-30) || (ballX < 30))
    {
        //reverse enemy1 X direction
       ballDirectionX = -1*ballDirectionX;
      }

      if ((ballY > height-30) || (ballY < 30))
      {
        //reverses enemy1 Y direction
       ballDirectionY = -1*ballDirectionY;
      }
}

function createEnemy2()
{
    fill(255,0,0);
    circle(ball2X,ball2Y,80);
}

function enemy2Movement()
{
    ball2X=ball2X+ball2DirectionX;
    ball2Y=ball2Y+ball2DirectionY;
    if ((ball2X > width-50) || (ball2X < 50))
    {
        //reverse enemy1 X direction
       ball2DirectionX = -1*ball2DirectionX;
      }

      if ((ball2Y > height-50) || (ball2Y < 50))
      {
        //reverses enemy1 Y direction
       ball2DirectionY = -1*ball2DirectionY;
      }
}

function exitMessage()
{
    textSize(16);
    text("Exit Here", width-80,height-155)
}

function moveShape()
{
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
}

function boundsCheck()
{
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
}

function exitCheck()
{
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(64);
        text("You Win!", width/2-120, height/2-50);
    }
}

function createShapeOnMouseClick()
{
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}