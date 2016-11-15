var myData;

function preload(){

	//load JSON formatted data from URL
	//var url = 'http://api.open-notify.org/iss-now.json';
	var url = 'http://api.wunderground.com/api/8e54910369119eef/conditions/q/NY/New_York.json';
	myData = loadJSON(url);

	//myData = loadJSON("assets/myFile.json");
}

function setup(){

	createCanvas(600,600);

	println(myData.current_observation.temp_f); //for use with weather data only

	//println(myData.iss_position.latitude); //for use with ISS data only

}

function draw(){

	var myCurTemp = myData.current_observation.temp_f;
	//map(value, inputMin, inputMax, outputMin, outputMax)
	var myMappedColor = map(myCurTemp, 0, 100, 0, 255);
	//fill(0, 0, myMappedColor);


	background(0,0,myMappedColor);
	fill(255,0,100);
}