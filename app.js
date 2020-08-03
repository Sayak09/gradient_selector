var css=document.querySelector("h3");
var c1=document.querySelector(".color1");
var c2=document.querySelector(".color2");
var body=document.querySelector("body");

c1.addEventListener("input",setgrad);

c2.addEventListener("input",setgrad);

function setgrad(){
	body.style.background="linear-gradient(to right,"+c1.value+","+c2.value+")";
	css.textContent=body.style.background+";";
}



