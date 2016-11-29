var canvas;
var pos;
var myImage;
var myPar;
var button;
var slider;
var input;
var inputButton;

var grayVal;
var myInputValue;

function setup(){

	//create a Canvas element
	canvas = createCanvas(400,300);
	canvas.position(400,200);
	// canvas.mouseOver(movedOnto);
	// canvas.mouseOut(movedOff);

	//create an Image element
	myImage = createImg("https://pbs.twimg.com/profile_images/446566229210181632/2IeTff-V.jpeg");
	myImage.position(0,100);
	myImage.size(300,300);
	myImage.mouseOver(hideCanvas);
	myImage.mouseOut(showCanvas);

	//create a Paragraph element
	myPar = createP("This is a HTML paragraph");
	myPar.position(30,30);

	//create a Button element
	button = createButton("it's a button!");
	button.position(300,50);
	button.mousePressed(changeColor);

	//create a Slider element
	slider = createSlider(0, 255, 200);
	slider.position(400,50);

	//create an Input element
	input = createInput("Favorite fruit?");
	input.position(400,150);
	inputButton = createButton("Submit");
	inputButton.position(530, 150);
	inputButton.mousePressed(readValue);

	background(200);
	pos = 0;
	grayVal = 0;
	myInputValue = "";
	textSize(40);
}

function draw(){

	var mySliderValue = slider.value();
	background(mySliderValue);
	pos += 2;
	if(pos > width) pos = 0;

	fill(grayVal);
	ellipse(pos, height/2, 30, 30);

	//text(myInputValue, pos, height/2);
}

function readValue(){

	myInputValue = input.value();
	console.log(myInputValue);

	//text(myInputValue, random(width), random(height));
}

function changeColor(){
	grayVal = random(255);

}

function hideCanvas(){
	canvas.hide();
	console.log("mouse went over the canvas");
}

function showCanvas(){
	canvas.show();
	console.log("mouse went off the canvas");
}