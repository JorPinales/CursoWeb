//Objects are collections of properties

//You can have a property name and a value
var user = {
	name: "John",
	age: 34,
	hobby: "Soccer",
	isMaried: false,
	spells: ["leviosa","expeliermus","lumus"],
	shout: function(){
		console.log("AAAAH!");
	}
};

//Access to object parameters
// user.age;
// user.name;
// user.hobby;
// user.isMaried;
// user.spells[0];

//This is to create a new parameter in the object
// user.favoritefood = "spinach";



//This is an array 
var list = ["apple","bannana","orange"];

var list2 = [
	{
		username:"andy",
		password: "secret"
	},
	{
		username: "jess",
		password: "123"
	}
];

// list2[0].username;
// list2[0].password;

var emptyObject = {};
var nullObject = null;