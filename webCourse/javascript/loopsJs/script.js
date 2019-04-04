var toDo = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat helthy"
];

var toDoLength = toDo.length

for (var i = 0; i < toDoLength; i++) {
	//console.log(toDo[i] + "!");

	//Modify the content of the list
	//toDo[i] = toDo[i] + "!";

	//toDo.pop();
	console.log(i);
}

function logToDos(toDo, i){
	console.log(toDo, i);
}

toDo.forEach(logToDos);

// var counterOne = 10

// while(counterOne > 0){
// 	console.log(counterOne);
// 	counterOne--;
// }


// counterTwo = 10;
// do {
// 	console.log(counterTwo);
// 	counterTwo--;
// }while (counterTwo > 0);