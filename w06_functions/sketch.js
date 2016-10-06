var myStrokeColor; //variable for custom function
var myStrokeWidth; //variable for custom function

var keyPressIndex;

function setup(){

	createCanvas(500,500);
	keyPressIndex = 0;

}

function draw(){


	if(mouseIsPressed){
		makeCircles(); //call function without arguments
	}

	var mappedColor = map(mouseX,0,width,0,255);

	//call function with arguments
	makeLines(mappedColor, keyPressIndex);

}

//first custom function, doesn't require any arguments
function makeCircles(){
	ellipse(mouseX,mouseY,60,60);
	ellipse(mouseX,mouseY,40,40);
	ellipse(mouseX,mouseY,20,20);
}

//second custom function, requires two arguments
function makeLines(myStrokeColor, myStrokeWidth){

	stroke(myStrokeColor);
	strokeWeight(myStrokeWidth);

	line(mouseX,mouseY,pmouseX,pmouseY);
}

function keyPressed(){
	keyPressIndex++;
}
