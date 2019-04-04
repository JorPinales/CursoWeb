var list = ["tiger", "cat", "bear", "bird"];
console.log(list[0]);

var numbers = [1,2,3,4];
var booleans = [true, false, true];
var functionList = [function apple(){
	console.log("apple");
}];
var mixedList = ["apples", 3, undefined, true, function apple(){
	console.log("apples");
}];

var listinlist = [["tiger", "cat", "bear", "bird"],["tiger", "cat", "bear", "bird"]];
console.log(listinlist[0][2]);

//Array Functions
list.shift();
list.pop();
list.push("elephant");
list.concat(["bee","dear"]);
list.sort();