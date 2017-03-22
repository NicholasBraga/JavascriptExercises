
/*function largestOfFour(arr) {
var i = 0;
var j = 0;
var aux = 0;
var maiorvalor = 0;
var testearray = [];



for(i in arr){
	console.log("Nova Iteração de I:");
	for(j in arr[i]){
		if(arr[i][j] >= maiorvalor){
			maiorvalor = arr[i][j];
			//console.log(testearray);
		}
	}
	testearray[i] = maiorvalor;
	console.log("Impressão do 'testearray': " + testearray);
}

  //return aux;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);*/

function largestOfFour(arr) {
var i = 0;
var j = 0;
var aux = 0;
var maiorvalor = 0;
var testearray = [];



for(i in arr){
	console.log("Nova Iteração de I:");
	for(j in arr[i]){
		if(arr[i][j] >= maiorvalor){
			maiorvalor = arr[i][j];
			//console.log(testearray);
		}
	}
	testearray[i] = maiorvalor;
	console.log("Impressão do 'testearray': " + testearray);
	maiorvalor = 0;
}

  //return aux;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);