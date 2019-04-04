var user = {
	username: "user",
	password: "password"
}

var database = [
	{
		username:"user",
		password:"password"
	},
	{
		username:"Peter",
		password:"Parker"
	},
	{
		username:"Mary",
		password:"Jane"
	}
];

var newsfeed = [
	{
		username: "userone",
		timeline: "Learing javaScript"
	},
	{
		username: "usertu",
		timeline: "I want to learn also"
	},
	{
		username: "usertre",
		timeline: "piolin durmiendo.jpg"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password){
	for (var i = 0; i < database.length; i++) {
			if (database[i].username === username && database[i].password === password) {
				return true;
		}
	}
	return false;
}

function signIn(username, password){
	if (isUserValid(username,password)) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong username or password.");
	}
}

signIn(userNamePrompt, passwordPrompt);