var rotAmount = 0;

function setup(){

  createCanvas(500,500);
}

function draw(){

  push(); //NEW DRAWING MATRIX
  //Everything inside the push() and pop() calls is on a separate drawing matrix
  //This includes geometry transforms and graphic styles
    fill(255,0,127);

    //Move the entire new matrix down to the handle point
    translate(100,100);

    rotAmount = map(mouseX, 0, width, 0, 2*PI);
    rotate(rotAmount);

    //draw the geometry at (0,0) relative to the new matrix
    rect(0,0,40,40);
    
  pop(); //END DRAWING MATRIX

  rect(0,0,60,60);


}