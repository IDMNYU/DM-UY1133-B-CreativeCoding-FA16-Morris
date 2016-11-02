var ballArray = [];

function setup(){
	createCanvas(600,600);

	//myBall = new Ball(xPos, yPos, vel);
	for(var i = 0 ; i < 5; i++){
		ballArray[i] = new Ball(random(0,width), random(0,height), 3);
	}
}

function draw(){
	background(255,0,125);

	for(var i = 0; i < ballArray.length; i++){
		ballArray[i].animate();
		ballArray[i].display();
	}
}

function mouseClicked(){

	//create a temporary object to push into the array
	var tempBall = new Ball(mouseX, mouseY, random(1,8));
	//array.push() function adds a new element to the end of the array
	ballArray.push(tempBall);
}

function Ball(_x, _y, _vel){

	this.x = _x;
	this.y = _y;
	this.vel = _vel;

	this.animate = function(){
		//animate ball
		this.x += this.vel;
		if(this.x > width || this.x < 0){
			this.vel = -this.vel;
		}
	}

	this.display = function(){
		//draw ball
		ellipse(this.x, this.y, 30,30);
	}
};