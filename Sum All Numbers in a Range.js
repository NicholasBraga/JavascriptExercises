/*We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.*/

function sumAll(arr) {
	var apoio = 0;

	for(var i = Math.min.apply(null, arr); i <= Math.max.apply(null, arr); i++){ //In order for "Math.max()" to work with an array, you must use it with "apply()"" and pass as a first parameter "null"
		apoio += i;
		//console.log(apoio);
	}
	return apoio;
}

sumAll([10, 5]);
