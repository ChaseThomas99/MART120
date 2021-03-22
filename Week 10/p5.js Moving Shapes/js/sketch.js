// head
var headX = 250;
var headY = 300;
var headDirection = 1;

// body
var bodyX = 150;
var bodyY = 400;
var bodyDirection = 3;

// text
var size = 22;
var count = 0;
var sizeDirection = 2;

// shirt logo
var leftPointX = 295;
var leftPointY = 450;
var leftPointDirection = 1;

// shirt logo
var rightPointX = 305;
var rightPointY = 450;
var rightPointDirection = 1;

// shirt log
var midPointX = 300;
var midPointY = 440;
var midPointDirection = 1;

// hair
var hairX = 250;
var hairY = 250;
var hairDirection = -1;

// left eye
var leftEyeX = 220;
var leftEyeDirection = -1;

// right eye
var rightEyeX = 280;
var rightEyeDirection = 1;

// left pupil
var leftPupilY = 275;
var leftPupilDirection = -1;

// right pupil
var rightPupilY = 275;
var rightPupilDirection = -1;

var movement;

function setup()
{
    createCanvas(500, 600);
    movement = Math.floor(Math.random() * 10) + 1;
}

function draw()
{
    background(200);
    textSize(22);
    text("Hello!", 10,80);


    // head
    fill(236, 188, 180);
    circle(headX,headY,200);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }
    {
        headY+=headDirection;
    }


    // shirt logo
    fill(1);
    triangle(295,450,300,440,305,450);


    // left eye
    strokeWeight(5);
    fill(500);
    circle(leftEyeX,275,35);
    // leftEyeX+=leftEyeDirection;
    leftEyeX+=movement;
    if(leftEyeX <= 17.5 || leftEyeX >= 482.5)
    {
        // leftEyeDirection *= -1;
        movement*= -1;
    }


    // right eye
    fill(500);
    circle(rightEyeX,275,35);
    rightEyeX+=movement;
    if(rightEyeX <= 17.5 || rightEyeX >= 482.5)
    {
        movement*= -1;
    }


    // left pupil
    fill(1);
    circle(220,leftPupilY,10);
    // leftPupilY+=leftPupilDirection;
    
    if(leftPupilY <= 5 || leftPupilY >= 590)
    {
        leftPupilDirection *= -1;
    }


    // right pupil
    fill(1);
    circle(280,leftPupilY,10);
    leftPupilY+=leftPupilDirection;
    if(leftPupilY <= 5);
    {
        leftPointDirection *= -1;
    }


    // nose
    fill(236, 188, 180);
    triangle(240,315,250,335,260,315);
    

    // mouth
    curve(220,350,240,365,260,365,280,350);


    // hair
    fill(101, 67, 33);
    arc(hairX, 250, 180, 100, PI, TWO_PI);


    // body
    fill(150);
    rect(150,bodyY,200,200);
    // bodyY += bodyDirection;
    bodyY+=movement;
    if(bodyY <= 0 || bodyY >= 450 )
    {
        // bodyDirection *= -1;
        // putting movement*= -1; makes the eyes bounce at the halfway point instead of on the edge
    }

    bodyY += movement

    // right arm
    line(350,420,425,600);
    // left arm
    line(150,420,75,600);


    // text
    fill(1);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Chase Thomas",250,100 );
}