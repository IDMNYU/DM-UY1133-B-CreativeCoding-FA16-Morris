var socket;

function setup() {
  createCanvas(600, 400);
  background(200);

  socket = io.connect("http://localhost:7000");

  socket.on('mouse', makeDrawing);

}

function mouseDragged(){

	var data = {
		x:mouseX,
		y:mouseY
	}

	socket.emit('mouse', data);

	fill(0,0,255);
	ellipse(mouseX, mouseY, 20, 20);

}


function makeDrawing(data){
	fill(255,0,0);
	ellipse(data.x, data.y, 20, 20);
}

function draw(){


}