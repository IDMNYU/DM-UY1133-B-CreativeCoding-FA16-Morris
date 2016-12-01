var socket;

function setup() {
  createCanvas(720, 400);
  background(200);
  rotationMapped = 0;

  socket = io.connect("http://localhost:7000");

}

function draw(){


}