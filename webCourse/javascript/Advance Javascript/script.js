const first = () =>{
	const greet = "Hi";
	const second = () =>{
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

// Closures -  a function ran, the function executed.
// It's never going to run again BUT it's going remember
// that there are refences to those variables
// so the child scope always has acces to the parent scope.

//-------------------------------------------------------------

//Currying

const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a * b;

// In this expresion first we pass the value of the first function THE NUMBER 3
//  The second value is passed to the second function THE NUMBER 4
curriedMultiply(3)(4);

const multiplyBy5 = curriedMultiply(5);
multiplyBy5(10); //-> 10 * 5 = 50


//Compose
const compose = (f,g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum,sum)(5);
