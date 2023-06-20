var _ = require('lodash');

console.log(_);


var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function color_picker(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}
color1.addEventListener("input", color_picker)

color2.addEventListener("input", color_picker)

