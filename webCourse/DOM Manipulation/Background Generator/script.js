var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");

document.getElementsByClassName("color1")[0].value;
document.getElementsByClassName("color2")[0].value;

function setGradient(){
	body.style.background = "linear-gradient(to right, "
							+ color1.value
							+ ", "
							+ color2.value
							+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

var arrayHex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

function randomNumber(){
	  return Math.floor(Math.random() * (15 - 0 + 1) + 0);
}

var number = 0;
function randomColor(){
	var numberHex = "#";
	for (var i = 0; i <= 5 ; i++) {
		number = randomNumber();
		numberHex += arrayHex[number];
	}
	return numberHex;
}

function setGradientRandom(){
	var color1Random = randomColor();
	var color2Random = randomColor();

	body.style.background = "linear-gradient(to right, "
							+ color1Random
							+ ", "
							+ color2Random
							+ ")";

	css.textContent = body.style.background + ";";
	document.getElementsByClassName("color1")[0].value= color1Random;
	document.getElementsByClassName("color2")[0].value= color2Random;
}

button.addEventListener("click", setGradientRandom);

setGradient();