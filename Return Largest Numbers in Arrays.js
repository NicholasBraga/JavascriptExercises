/*Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.*/

function largestOfFour(arr) {
var i = 0;
var j = 0;
var aux = 0;
var maiorvalor = 0;
var testearray = [];



for(i in arr){  //Laço mais lento - vai iterar o "i" só quando todo o "j" tiver sido percorrido
	//console.log("Nova Iteração de I:");
	for(j in arr[i]){  //Laço mais rápido - vai percorrer todos os itens da dimensão atual do array
		if(arr[i][j] >= maiorvalor){  //Se o item da posição atual do array for maior ou igual que "maiorvalor"...
			maiorvalor = arr[i][j];  //"maiorvalor" recebe o item
			//console.log(testearray);
		}
	}
	testearray[i] = maiorvalor;  //O array só receberá o maior valor de cada dimensão, pois ele está localizado fora do laço "j" que é o mais rápido.
	maiorvalor = 0;  //"maiorvalor" é zerado toda vez que o laço "j" acabar e outro laço "i" for começar, para não carregar o valor prévio para a próxima iteração.
}

  return testearray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
