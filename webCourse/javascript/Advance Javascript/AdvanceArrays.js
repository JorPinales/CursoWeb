//Advanced Arrays

const array = [1,2,10,16];

const double = [];
const newArray = array.forEach((num) => {
	double.push(num * 2);
});

// For loop, iterate in a colection of items

console.log('forEach', double);

//map, filter, reduce

// Map create a new array that helps to prevent 
// side effects. Due to map need to return an array.

/*const napArray = array.map((num) => {
	return num * 2;
})*/

const napArray = array.map(num => num * 2);

console.log('map',napArray);

//filter
const fileArray = array.filter(num => num > 5);
console.log('filter', fileArray);


//reduce
const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 0)

console.log('accumulator', reduceArray);