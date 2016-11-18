var url;
var globalData;

function setup(){

	createCanvas(600,600);

	url = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/web_colors.json'

}

function gotData(myData){

	console.log(myData);
	globalData = myData;
	//get this data to a global variable

}

function draw(){

	if(globalData){ //test if data is available
		println(globalData.colors[4].hex);
	}
	else { //still loading!
		println("there's no data yet!");
	}

}

function mouseClicked(){
	myData = loadJSON(url, gotData);
}

