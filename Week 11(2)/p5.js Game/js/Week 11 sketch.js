// character x and y
var characterX = 100;
var characterY = 100;

// codes for each letter key
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

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

// shape on mouse click
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
    ball2DirectionY = 5;
}

function draw()
{
    background(500);
    stroke(0);
    fill(0);
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


    // exit message
    textSize(16);
    text("Exit Here", width-80,height-155)

    //character
    fill(0);
    circle(characterX,characterY,25);

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
    }
    if(keyIsDown(d))
    {
        characterX += 5;   
    }

    // enemy1
    fill(255,69,0);
    circle(ballX,ballY,40);

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

    // enemy 2
    fill(255,0,0);
    circle(ball2X,ball2Y,80);

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

    // check if character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(64);
        text("You Win!", width/2-120, height/2-50);
    }

    // create cricle on mouse click
    fill(120,130,140);
    // circle(mouseShapeX, mouseShapeY, 25);
    rect(mouseShapeX,mouseShapeY,50,50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}