var myData;
var globalData;

var url;
var baseUrl;
var city;
var APIkey;

/*
function preload(){

	//load JSON formatted data from URL
	var url = "http://api.openweathermap.org/data/2.5/weather?q=New%20York,ny&appid=89309063680894bde99f0b41e0e6ccbc";
	// var url = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/web_colors.json'
	myData = loadJSON(url);

}
*/

function setup(){

	createCanvas(600,600);

	baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
	//baseUrl = "http://netflixroulette.net/api/api.php?";
	city = "New York,ny";
	APIkey = "89309063680894bde99f0b41e0e6ccbc";

	url = baseUrl + "q=" + city + "&appid=" + APIkey;

	myData = loadJSON(url, gotData);

}

function gotData(myData){
	// do something with this data
	globalData = myData;

	console.log(globalData);


}

function draw(){

}

function mouseClicked(){

	city = "Tokyo";

	url = baseUrl + "q=" + city + "&appid=" + APIkey;

	myData = loadJSON(url, gotData);


}