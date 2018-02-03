//variables for the various elements on the page

var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var textOut = document.querySelector('h3');
var body = document.getElementById('gradient');
var randomButton = document.getElementById('randomButton');
var directionButton = document.getElementById('directionButton');
var randomInt = function(max){
	return Math.floor(Math.random() * Math.floor(max));
};

direction.value = randomInt(361); 

var setGradient = function(){
	var	direction = document.getElementById('direction');
	body.style.background = 
		"fixed linear-gradient("
		+ direction.value
		+"deg, " 
		+ color1.value 
		+ ", " 
		+ color2.value
		+")";
	textOut.textContent = body.style.background +";";
};
setGradient();

var randomize = function(){
	var newDirection = randomInt(361);
	body.style.background =
		"fixed linear-gradient("
		+ newDirection
		+"deg, rgb(" 
		+ randomInt(256)
		+ ","
		+ randomInt(256)
		+ "," 
		+ randomInt(256)
		+ "),rgb("
		+ randomInt(256)
		+ ","
		+ randomInt(256)
		+ "," 
		+ randomInt(256)
		+")"; 
	textOut.textContent = body.style.background+";";
	direction.value = newDirection;
};

randomButton.addEventListener('click', randomize);
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
directionButton.addEventListener('click', setGradient);
