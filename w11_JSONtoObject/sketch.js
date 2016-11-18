var myData; //create a variable for data
var myObject; //create a variable for an object

function preload(){

	//load from URL or download as a local file
	var url = "https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/web_colors.json"
	myData = loadJSON(url);
}

function setup(){

	createCanvas(600,600);
	//initialize objects
	//pass in data-derived colors as an argument -- can use hex values:
	//console.log(myData);

	// //pass through entire data object
	// myObject = new MyShape(myData);

	//pass through only a single color value
	var myRandomVal = int(random(0,myData.colors.length));
	myColor = myData.colors[myRandomVal].hex;
	console.log(myColor);

	//this object is new instance of the MyShape class
	myObject = new MyShape(myColor);
}

function draw(){

	myObject.drawShape();
}

//create a class to draw a shape
//inherit a color from the data file as the shape color
function MyShape(myColorData){

	this.x = random(width);
	this.y = random(height);
	this.myObjectColor = myColorData;

	// pseudocode
	this.drawShape = function(){
		fill(this.myObjectColor);
		ellipse(this.x, this.y, 60,60);
	}
};