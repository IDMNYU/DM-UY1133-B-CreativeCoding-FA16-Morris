var minX = 100;
var maxX = 400;

var constrainedEllipseX = 0;
var mappedEllipseX = 0;

function setup(){
  createCanvas(500,400);

}

function draw(){

  background(240);

  line(minX,0,minX,height);
  line(maxX, 0, maxX, height);

  //constrain(value, min, max)
  constrainedEllipseX = constrain(mouseX, minX, maxX);

  //map(value, inputMin, inputMax, outputMin, outputMax)
  mappedEllipseX = map(mouseX, 0, width, minX, maxX);

  fill(255,0,0);
  ellipse(constrainedEllipseX, height/3, 20, 20);

  fill(0,255,0);
  ellipse(mappedEllipseX, height*2/3, 20, 20);

}