int circleSize; //size of the circle
int xPos; // x position of the circle
int yPos; // y position of the circle

int xVelocity; // x speed / step of the circle
int yVelocity;

int xDirection; //moving forward or backward?
int yDirection;

void setup(){
  size(600,600);
  background(255,255,255);
  circleSize = 60;
  
  xPos = 1; //start at 1 so we don't get trapped in our "is X equal to 0?" test below
  yPos = 1;
  
  xVelocity = 5;
  yVelocity = 3;
  
  xDirection = 1; //positive 1, moves to the right
  yDirection = 1;
}

void draw(){
  background(255,255,255);
  ellipse(xPos, yPos, circleSize, circleSize);
  
  xPos = xPos + xVelocity;
  yPos = yPos + yVelocity;
//  println(xPos);
  
  /*
  if( xPos >= width){
     xPos = 0; //just reset to 0 in a loop
  }
  */
  
  if (xPos >= width || xPos <= 0){
    xDirection = -xDirection; //now my direction is -1, moving to left
    xVelocity = xVelocity * xDirection; // makes xVelocity negative
  }
  
  if(yPos >= height || yPos <= 0){
    yDirection = -yDirection;
    yVelocity = yVelocity * yDirection;
  }
  
}
