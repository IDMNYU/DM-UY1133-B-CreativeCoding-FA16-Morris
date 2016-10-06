var rotationMapped;

function setup() {
  createCanvas(720, 400);
  background(200);
  rotationMapped = 0;

}

function draw(){

	fill(200,200,200,50);
	noStroke();
	rect(0,0,width,height);

	// left rectangle fixed with no rotation
	push();
		fill(255,0,0);
		translate(width/4, height/2);
		rect(0,0,40,50);
	pop();

	// right rectangle fixed at a rotation value
	push();
		fill(0,255,0);
		translate(width*3/4, height/2);
		rotate(PI/6);
		rect(0,0,40,50);
	pop();


	// center rectangle with rotation mapped to Y mouse value
	push();
		fill(0,0,255);
		rotationMapped = map(mouseY,0,height,0,2*PI);
		translate(width/2,height/2);
		rotate(rotationMapped);
		rect(0,0,40,50);
	pop();

}