// x and y for character
var characterX = 100;
var characterY = 100;

// letter key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for character?
var shapeX = 50;
var shapeY = 50;

//random starting position/diameter
var shapeXs = [];
var shapeYs = [];
var diameters = [];

// enemy direction
var enemyXdirection;
var enemyYdirection;

// enemy speed
var shapeXSpeeds = [6];
var shapeYSpeeds = [6];

//enemy colors
var randomColor;

// create shape on mouse click
var mouseShapeX = -10;
var mouseShapeY = -10;

var rectangleObject;
var rectangle2Object;
var rectangle3Object;

function setup() {
    createCanvas(500, 600);

    rectangleObject = new Rectangle(0,85,400,25,255,255,0);
    rectangle2Object = new Rectangle2(150,230,200,100,255,0,0);
    rectangle3Object = new Rectangle3(65,450,435,25,255,165,0);
  
    // enemy bounce/movement
    enemyXdirection = 6;
    enemyYdirection = 6;
  
    // random colors
    randomColor = color(random(255),random(255),random(255));

    // random starting speed
    for (var i = 0; i < 7; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);s
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }

    createCharacter(50,50);
}

function draw() {
    background(500);
    stroke(0);
    fill(0);

    // create and display an object
    rectangleObject.display();
    rectangle2Object.display();
    rectangle3Object.display();

    // createBorders call
    createBorders(10);

    // exit message
    textSize(16);
    text("Exit Here", width - 80, height - 105)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();

    // potential enemy
    fill(randomColor);

    // draw enemys
    for (var i = 0; i < shapeXs.length; i++)
    {
        circle(shapeXs[i], shapeYs[i], diameters[i]);

        // move enemys
        shapeXs[i] = shapeXs[i] + shapeXSpeeds[i];
        shapeYs[i] = shapeYs[i] + shapeYSpeeds[i];

        // bounce enemys
        if (shapeXs[i] > 500)
        {
             shapeXSpeeds[i] *= -1;
        }

        if (shapeXs[i] < 0)
        {
             shapeXSpeeds[i] *= -1;
        }

        if (shapeYs[i] > 600)
        {
             shapeYSpeeds[i] *= -1;
        }

        if (shapeYs[i] < 0)
        {
             shapeYSpeeds[i] *= -1;
        }

    }
    // check if character has left exit
    if (characterX > width && characterY > width - 50) {
        fill(0);
        stroke(5);
        textSize(64);
        text("You Win!", width / 2 - 120, height / 2 - 50);
    }

    // create shape on mouse click
    fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement() {

    // handle keys
    if (keyIsDown(w)) {
        characterY -= 5;
    }
    if (keyIsDown(s)) {
        characterY += 5;
    }
    if (keyIsDown(a)) {
        characterX -= 5;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 5;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(0);
    circle(characterX, characterY, 25);
}

function createBorders(thickness) {
    fill(0)
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-100);
    // right lower border
    rect(490,550,10,50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}