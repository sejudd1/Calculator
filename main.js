// declare global variables
var buttons = document.querySelectorAll(".buttons");
	console.log(buttons);

var array = [];
var result;
var div = document.querySelector("#outputBox");

// takes calc input makes array and performs calculations
function createArray(){
	array.push(this.innerHTML);
	console.log(array);

	div.innerHTML += this.innerHTML;
	
	if(this.innerHTML === "="){
		array.pop();
		var answer =array.join("");
		console.log(answer);
		console.log(eval(answer));
		result = eval(answer);
		div.innerHTML = result;

		
	}
	
}
// listening for click on the buttons
for(var i = 0; i < buttons.length; i ++) {
	buttons[i].addEventListener("click", createArray);

}

// Resets the calculator
document.querySelector("#clearOutput").addEventListener("click", clearCalculator);
function clearCalculator(){
		document.querySelector("#outputBox").innerHTML = "";
		result = "";
		convert = "";
		array = [];
	
}









