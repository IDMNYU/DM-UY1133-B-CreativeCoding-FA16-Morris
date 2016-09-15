/*
This sketch demonstrates how to get the color of any x,y pixel on the sketch canvas
*/

color myColor; //new datatype "color"

void setup(){
  size(600,600);
  myColor = color(255,255,255); //define the object with a set of color values in R,G,B format, specified as "color" type outside the parenthesis
  
}

void draw(){
  
  // fill this rectangle with the color we're updated with the get() function in mouseClicked
  fill(myColor);
  rect(0,0,100,100);
  
  //just some static rectangles to test different color values
  fill(255,0,0);
  rect(0,200,100,100);
  
  fill(0,255,0);
  rect(0,400,100,100);
}

void mouseClicked(){
  // "get()" grabs the color from an (x,y) pixel
    myColor = get(mouseX,mouseY);
}
