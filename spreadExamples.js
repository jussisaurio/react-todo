/*function add(a,b) {
	return a+b;
}

console.log(add(3,1));

var toAdd=[9,5];

console.log(add(...toAdd));*/


var groupA=['Jussi', 'Mikko', 'Antti'];
var groupB=['Tarja', 'Rauno'];

var final = [...groupA, ...groupB];

console.log(final);

var p1 = ['Jussi', 28];
var p2 = ['Tube', 25];

function greet (name, age) {

	console.log('Hi ' + name + ", you are " +age);

}

greet(...p1); greet(...p2);