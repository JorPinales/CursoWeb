//let + const

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90){
	let wizardLevel = true;
	console.log('inside', wizardLevel);
}

/*const a = function(){
	 console.log("a");
}

const obj = {
	player: bobby,
	experience = 100,
	wizardLevel = false
}
	In this example is important to mentiton
	that you can not reasign the object
	but you can reasign the variables.

*/


//Destructing
const obj = {
	player: bobby,
	experience = 100,
	wizardLevel = false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience} = obj;
let {wizardLevel} = obj;

//----------------------------------------

//Declare const in a dinamic way.
const name = 'john';

const obj = {
	[name]: "hello",
	[1 + 2]: 'hihi'
}

//Object properties
const a = "Simon";
const b = true;
const c = {};

const obj = {
	a,
	b,
	c
}

//Templete strings

const name = "Sally";
const age = 24;
const pet = "horse";

const greeting = "Hello" + name + " you seen to be doing" + greeat;

const greetingBest = `Hello ${name} you seem to be ${age-5}. What a lovely ${pet} you have`;

//Default arguments

function greet(name='', age=30,pet='cat'){
	return `Hello ${name} you seem to be ${age-5}. What a lovely ${pet} you have`;
} 

// run as greet() that will take default arguments
// or greet("John",20,"dog").

//Symbol
//Symbols create a unique type
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// sym2 === sym3 --> false;


//Arrow Function
function add(a,b){
	return a + b;
}

const add (a,b) => a + b;

const add (a,b) => {
	return a + b;
}


//==============================================================================================================================================================================================================================================
// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const { firstName, lastName, age, eyeColor } = person;

// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = {
	a,
  	b,
  	c
};

// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
let messageBest = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;
function isValidAge(age) {
    return age;
}

const isValidAge = (age = 10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"

let sym = Symbol("This is my first Symbol");

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username, location) => {
	if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}