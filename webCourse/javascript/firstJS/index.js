alert("This is in JS file, and making your browser wait");

console.log("Helloooooo, im here");

//Create a function

function sayHello(){
	console.log("Hello");
}

sayHello();

//Anonymous Function

var sayBay = function() {
	console.log("Bye");
}

sayBay();

//function arguments
function sing(song){
	console.log(song);
}

sing("LADIDA");
sing("LOLOLO");
sing("TARARA");
sing("DADADA");

//retrun statement
function multiply(a,b){
	if (a > 10 || b > 10){
		return "that's too hard";
	}else{
		return a*b;
	}
	return a*b;
}

var total = multiply(3,4) + " <-- hello from function multiply(a,b)");
alert(total);

