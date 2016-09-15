/*
Various functions that may be useful for basic game development.
These are demonstrated here in static mode but can be implemented into active mode in other sketches for testing
*/

//randomness within a range
//random(minimumOfRange, maximumOfRange)
int a = int(random(0,50)); //generates a number between 0 and 50, including 0 and 50
fill(random(0,255), random(0,255), random(0,255)); //all random color vals
//random() returns a float, so we have to cast it to an int using int(   ) before using it in an int variable

//distance between two points
//dist(x1, y1, x2, y2)  -- same format as drawing a line between two points
int myDistance = int(dist(0,50, 100,60));

//time is measured in milliseconds, or "millis"
// test it out by printing the millis() value within the draw() loop
int currentTime = millis();
println(currentTime);

//previous mouseX and mouseY positions are stored in variables "pmouseX" and "pmouseY"
//this will draw a continuous line from the last mouse position to the current position
line(mouseX, mouseY, pmouseX, pmouseY);

//TRICKS
// reset the screen by drawing background on mouseClicked / keyPressed
// use a boolean value as a toggle for setting general states, like "if I click this box, turn this property on"
