//var mySquare1;
//var mySquare2;

var squareArray = [];

function setup(){
	createCanvas(600,500);
	//mySquare1 = new Squares(width/3, height/2, 30);
	//mySquare2 = new Squares(width * 2/3, height/2, 60);

	squareArray[0] = new Squares(width/3, height/2, 30);
	squareArray[1] = new Squares(width * 2/3, height/2, 60);
}

function draw(){

	background(255);

	//i = 0; i < 2; i++
	for(var i = 0; i < squareArray.length; i++){
		squareArray[i].pulse();
		squareArray[i].display();
	}
/*
	squareArray[0].pulse();
	squareArray[1].pulse();

	squareArray[0].display();
	squareArray[1].display();
*/
	//mySquare1.pulse();
	//mySquare1.display();

	//mySquare2.pulse();
	//mySquare2.display();

}

function Squares(_x, _y, _size){

	this.x = _x;
	this.y = _y;
	this.minSize = _size;
	this.maxSize = _size+40;
	this.curSize = _size;
	this.step = 2;

	this.pulse = function(){
		//handle animation
		this.curSize += this.step;
		if(this.curSize > this.maxSize || this.curSize < this.minSize){
			this.step = this.step * -1;
		}
	}

	this.display = function(){
		//draw graphics
		rect(this.x, this.y, this.curSize, this.curSize);
	}
};