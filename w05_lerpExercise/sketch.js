var a;
var b;
var c;
var pct;

var yPos;

function setup(){
  createCanvas(600,600);
  background(0);

  a = 50;
  b = 400;
  c = 0;
  pct = 0.99;

  yPos = 200;

}

function draw(){

  // interpolate between positions A and B at pct %
  c = lerp(a, b, pct);

  fill(255);
  ellipse(a, yPos, 20,20);
  ellipse(b, yPos, 20, 20);

  fill(255,0,0);
  ellipse(c, yPos, 20, 20);


}