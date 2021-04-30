// level change
var mode;

// x and y for character
var characterX = 50;
var characterY = 50;

// letter key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for character?
var shapeX = 50;
var shapeY = 50;

//random starting position and diameter
var shapeXs = [];
var shapeYs = [];
var diameters = [];

// enemy direction
var enemyXdirection;
var enemyYdirection;

// enemy speed
var shapeXSpeeds = [6];
var shapeYSpeeds = [6];

function setup() {
    mode = 0;
    createCanvas(500, 600);
  
    // enemy bounce/movement
    enemyXdirection = 6;
    enemyYdirection = 6;

    // random starting speed
    for (var i = 0; i < 7; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);s
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }
}

function draw() {
    //Game Rules page
    clear();
    if (mode==0) {
      textSize(24);
      textStyle(BOLD);
      text('Game Rules',20,40);
      textStyle(NORMAL);
      text('Use the W, A, S, D keys to',20,80);
      text('get the character safely to the exit',20,100);
      text('Do not get hit by the Green Viruses',20,140);
      text('Avoid the Red Barriers',20,180);
      text('Do not run into the Black Borders',20,220);
      text('Press ENTER to start',20,260);
    }

// level 1
if (mode==1) {
background(500);
stroke(0);
fill(0);
textSize(24);
text('Level 1',215,290);

// createBorders call
createBorders(10);

// exit message
textSize(16);
text("Exit Here", width - 80, height - 105)

//createCharacter;
drawCharacter();
characterMovement();

keyPressed();

// potential enemy
fill(0,255,0);

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

    // check collision of the character and enemy
    if (collided(characterX, characterY, 25, 25, shapeXs[i], shapeYs[i], diameters[i], diameters[i])) {
        mode = 4;
    }

}
// change levels
if (characterX > 490 && characterY > 490 && characterY < 550) {
    mode=2;
    characterX = 50;
    characterY = 50;
}
// check if character has touched upper right boundry
if (characterX > 485 && characterY < 495) {
    mode=4;
}
// check if character has touched lower right boundry
if (characterX > 485 && characterY > 551) {
    mode=4;
}
// check if character has touched left boundry
if (characterX < 15) {
    mode=4;
}
// check if character has touched lower boundry
if (characterY > 580) {
    mode=4;
}
// check if character has touched upper boundry
if (characterY < 25) {
    mode=4;
}
    }

// level 2
if (mode==2) {
background(500);
stroke(0);
fill(0);

// draW obsticle 2
fill(255,0,0);
rect(150,230,200,100);

// level text
fill(0,0,0);
textSize(24);
text('Level 2',215,290);

// createBorders call
createBorders(10);

keyPressed();

// exit message
textSize(16);
text("Exit Here", width - 80, height - 105)

//createCharacter;
drawCharacter();
characterMovement();

// potential enemy
fill(0,255,0);

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

        // check collision of the character and enemys
    if (collided(characterX, characterY, 25, 25, shapeXs[i], shapeYs[i], diameters[i], diameters[i])) {
        mode = 4;
    }

}
// change levels
if (characterX > 490 && characterY > 490 && characterY < 550) {
    mode=3;
    characterX = 50;
    characterY = 50;
}
// check if character has touched upper right boundry
if (characterX > 485 && characterY < 495) {
    mode=4;
}
// check if character has touched lower right boundry
if (characterX > 485 && characterY > 551) {
    mode=4;
}
// check if character has touched left boundry
if (characterX < 15) {
    mode=4;
}
// check if character has touched lower boundry
if (characterY > 580) {
    mode=4;
}
// check if character has touched upper boundry
if (characterY < 25) {
    mode=4;
}

    // collision for obsticle 2
    if (characterY > 215 && characterX > 135 && characterY < 335 && characterX < 360) {
        mode=4;
    }
}

// level 3
if (mode==3) {
background(500);
stroke(0);
fill(0);

// draw obsticle 1
fill(255,0,0);
rect(0,85,400,25);

// draW obsticle 2
rect(150,230,200,100);

// draw obsticle 3
rect(65,450,430,25);

keyPressed();

// level text
fill(0,0,0);
textSize(24);
text('Level 3',215,290);

// createBorders call
createBorders(10);

// exit message
textSize(16);
text("Exit Here", width - 80, height - 105)

//createCharacter;
drawCharacter();
characterMovement();

// potential enemy
fill(0,255,0);

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

    // check collision of the character against all the moving shapes
    if (collided(characterX, characterY, 25, 25, shapeXs[i], shapeYs[i], diameters[i], diameters[i])) {
        mode = 4;
    }

}
// check if character has won the game
if (characterX > 490 && characterY > 490 && characterY < 550) {
    mode=5;
}
// check if character has touched upper right boundry
if (characterX > 485 && characterY < 495) {
    mode=4;
}
// check if character has touched lower right boundry
if (characterX > 485 && characterY > 551) {
    mode=4;
}
// check if character has touched left boundry
if (characterX < 15) {
    mode=4;
}
// check if character has touched lower boundry
if (characterY > 580) {
    mode=4;
}
// check if character has touched upper boundry
if (characterY < 25) {
    mode=4;
}

    // collision for obsticle 1
    if (characterY > 70 && characterX < 400 && characterY < 125) {
        mode=4;
    }

    // collision for obsticle 2
    if (characterY > 215 && characterX > 135 && characterY < 335 && characterX < 360) {
        mode=4;
    }

    // collision for obsticle 3
    if (characterY > 435 && characterX > 50 && characterY < 490) {
        mode=4;
    }
    }

    // You Loose screen
    if (mode==4) {
        fill(255,0,0);
        rect(0,0,500,600,0,0,0);
        stroke(5);
        textSize(64);
        fill(250,250,250);
        text("You Lose!", 100, height / 2 - 50);
        textSize(24);
        text("Press ENTER to play again",100,450)
        keyPressed();
    }

    // You Win screen
    if (mode==5) {
        fill(34,139,34);
        rect(0,0,500,600,0,0,0);
        fill(250,250,250);
        stroke(5);
        textSize(64);
        text("You Win!", 130, height / 2 - 50);
        textSize(24);
        text("Press ENTER to play again",100,450)
        keyPressed();
    }
}

function characterMovement() {
    // handle keys
    if (keyIsDown(w)) {
        characterY -= 3;
    }
    if (keyIsDown(s)) {
        characterY += 3;
    }
    if (keyIsDown(a)) {
        characterX -= 3;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 3;
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
    fill(0,0,0);
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

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}

// press ENTER to start game
function keyPressed() {
    if (keyCode===ENTER) {
      mode=1;
      characterX = 50;
      characterY = 50;
    }
  }

//character enemy collisions
function collided(x, y, w, h, x2, y2, w2, h2) {
    // return true/false for collision
    return (x < x2 + w2 &&
        x + w > x2 &&
        y < y2 + h2 &&
        y + h > y2);
}