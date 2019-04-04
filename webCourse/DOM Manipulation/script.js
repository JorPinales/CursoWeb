/*var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
	console.log("CLICK!");
});

button.addEventListener("mouseleave",function(){
	console.log("Mouse leave");
});*/

function lookChildren(){
	return document.querySelector("ul").children;
}

function doneItems(){
var clickDone = lookChildren();
	for (var i = 0; clickDone[i]; i++) {
    	clickDone[i].onclick = function (i) {
			this.classList.add("done");
    	}
	}
}


function appendButton(){
	var node = document.createElement("button");
	var textnode = document.createTextNode("x");
	node.appendChild(textnode);
	var children = lookChildren();
	for (var i = 0; children[i]; i++){
		document.getElementsByTagName("li")[i].appendChild(node);
	}
}

var button = document.getElementById("enter");
var input =document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function createListElement(){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}

function addListAfterClick(){
	if(inputLength() > 0){
		createListElement();
		lookChildren();
		doneItems()
	}
}

function addListAfterKeypress(event){
	if(inputLength() > 0 && event.keyCode === 13){
		createListElement();
		lookChildren();
		doneItems();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


doneItems();