function isUserValid(bool){
	return bool;
}

var answer = isUserValid(ture) ? "You may enter" : "Access Denied";
var automatedAnswer = "Your account # is " + (isUserValid(false) ? "1234" : "not availabe");
 
function condition(){
 	if(isUserValid(true)){
 		return "You may enter";
 	}else{
 		return "Access denied";
 	}
}

var answer2 = condition();

//-----------------------------------------------------------

function moveCommand(diriection){
	var whatHappens;
	switch(diriection){
		case "forward":
			whatHappens = "You encounter a monster";
			break;
		case "back":
			whatHappens = "You arrived home";
			break;
		case "right":
			whatHappens = "You found a river";
			break;
		case "left":
			whatHappens = "You run into a troll";
			break;
		default:
			whatHappens = "Please enter a valid direction";
	}
	return whatHappens;
}