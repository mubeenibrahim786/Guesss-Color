// new Audio("Afternoon/Balloon.wav").play();

let array = [
"]Ding.wav",
"Balloon.wav",
"Bar.wav",
"Blocked.wav",
"complete.wav",
"]Ding.wav",
"Balloon.wav",
"Bar.wav",
"Blocked.wav",
"complete.wav",
"Default.wav",
"Discovered.wav",
"Error.wav",
"Exclamation.wav",
"Fail.wav"
];

let minus = 5;
let countRed = 0;
let countBlue = 0;
function createDiv() {
	for (let i=0; i<15; i++) {
		document.querySelector(".container").innerHTML += `<div id='div-${i}' onclick='drum(${i})'></div>`;
	}
}
function drum(i) {
	let randomm = parseInt(Math.random()*16);
	let col = document.querySelector(`#div-${randomm}`);
	if ( array[i] == array[randomm]) {
		countBlue++
		document.querySelector(`#div-${i}`).style[`background-color`] = "blue";
	} else {
		countRed++
		new Audio(`Afternoon/${array[i]}`).play();
		document.querySelector(`#div-${i}`).style.display = "none";
		countMInus();
		document.querySelector(`.num`).innerHTML = minus;
	}
	if (countBlue === 2) {
		new Audio(`Afternoon/Fail.wav`).play();
		document.querySelector(`h4`).innerHTML = `Congratulations`;
		document.querySelector(`.container`).style.display = "none";
		document.querySelector(`.alert-div`).style.display = "flex";
		document.querySelector(`.counter`).innerHTML = "";
		document.querySelector(`button`).innerHTML = "Guess Again ?";
		document.querySelector(`.Ques`).style.display = "none";


	}
	if (countRed === 5) {
		new Audio(`Afternoon/Fail.wav`).play();
		document.querySelector(`h4`).innerHTML = `Better Luck Next Time`;
		document.querySelector(`.container`).style.display = "none";
		document.querySelector(`.alert-div`).style.display = "flex";
		document.querySelector(`.Ques`).style.display = "none";
	}
}
function refresh() {
	window.location.replace('index.html');
}
function countMInus() {
	minus--
}
function start() {
	document.querySelector(`.getstart`).style.display = "none";
}