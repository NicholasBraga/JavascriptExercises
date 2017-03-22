/*Write a function that splits an array (first argument) into groups the length of size
(second argument) and returns them as a two-dimensional array.*/

function chunkArrayInGroups(arr, size) {
	var arrayaux = [];
	var novoarray= [];
	var aux1 = size;
	var aux2 = 0;

	for(var i = 0; i <= arr.length; i++){
		console.log("\n--------------------");
		console.log("Primeiro FOR:" + "\narr: " + arr + "\ni: " + i)	//For mais lento. Percorrerá o array como um todo
		for(var j = 0; j <= arr.length; j++){	//For mais rápido. Percorrerá item a item do array
			console.log("--------------------");
			console.log("Segundo FOR:" + "\nj: " + j)
			if(j == size){	//Todas as vezes em que j for igual ao valor da variável "size"
				arrayaux[i] = arr.slice(aux2, aux1);	//o "arrayaux" receberá o corte do array de acordo com os valores das variáveis "aux2" e "aux1"
				console.log(arrayaux);
				aux2 = aux1;	//variável "aux2" receberá o valor da variável "aux1"
				aux1 = aux1 + size; //variável "aux1" receberá o valor dela somado com ela mesma
				console.log("Valor da aux1: " + aux1);
				console.log("Valor da aux2: " + aux2);
				}if(arrayaux.length >= (arr.length / size)){
					novoarray = arrayaux;
					console.log("novoarray: ");
					console.log(novoarray);
					break;
				}

		}
	}

  console.log("\n\nVALOR DO RETURN:");
  console.log(novoarray);
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
