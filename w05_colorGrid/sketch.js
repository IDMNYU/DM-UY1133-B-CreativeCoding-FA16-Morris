var offset = 40;
var triWidth = 20;
var buffer = 30;

function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw(){

  for(var i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
      var r = 255-(i*20);
      var g = 255-(j*20);
      fill(r,g,0);
      rect((i*offset)+buffer, (j*offset)+buffer, triWidth, triWidth);
    }
  }

}
