function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(200);
    fill(0, 0, 0);
    text('Chase Thomas', 40, 100);
    textSize(64);

    fill(236, 188, 180);
    circle(250,300,200);

    fill(150);
    rect(150,400,200,200);

    fill(236, 188, 180);
    triangle(240,315,250,335,260,315);

    line(350,420,425,600);

    line(150,420,75,600);
   
    point(300, 440);
    point(305, 450);
    point(295, 450);

    fill(101, 67, 33);
    arc(250, 250, 180, 100, PI, TWO_PI);

    strokeWeight(5);

    curve(220,350,240,365,260,365,280,350);

    fill(500);
    circle(220,275,35);

    fill(500);
    circle(280,275,35);

    fill(1);
    circle(220,275,10);

    fill(1);
    circle(280,275,10);

}