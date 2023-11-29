//The setup function only happens once
var dude=0;
var fan=0;
var fab=0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(173,216,mouseX); //an RGB color for the canvas' background
  //circle
  stroke(200,73,184) // an RGB color for the circle's border
  fill(255,255,127,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,80,20); // center of canvas, 20px dia
  stroke(84,178,205);
  fill(211,dude,200)
  rect(dude,300,dude,dude);
  line(dude,200,600,dude);
  point(random(width),random(height));
  textSize(40);
  textFont("Arial");
  text("Hi",40,40);
  rect(fan,300,fan,fan);
  line(fan,200,600,fan);
  rect(fab,300,fab,fab);
  line(fab,200,600,fab);


}

function mousePressed() {
if (dude>=200)
  {dude=0;}
  else
    {dude=dude+5;}

  if (fan>=350)
  {fan=0;}
  else
    {fan=fan+7;}

  if (fab>=150)
  {fab=0;}
  else
    {fab=fab+9;}
  
}

