 var css = document.querySelector("h3");
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var colorBtn = document.getElementById('colorBtn');


function setGradient() {
		body.style.background = "linear-gradient(to right, " 
	+color1.value 
	+ ", " 
	+color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

document.addEventListener("DOMContentLoaded", setGradient);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
    var r = getRandomInt(0, 255);
    var g = getRandomInt(0, 255);
    var b = getRandomInt(0, 255);
    var r2 = getRandomInt(0, 255);
    var g2 = getRandomInt(0, 255);
    var b2 = getRandomInt(0, 255);
	var ranrgb="rgb("+r+","+g+","+b+")";
   	var ranrgb2="rgb("+r2+","+g2+","+b2+")";


colorBtn.addEventListener('click', function(){
  body.style.background="linear-gradient(to right, " 
	+ ranrgb
	+ ", " 
	+ ranrgb2
	+ ")";

	css.textContent = body.style.background + ";";
});