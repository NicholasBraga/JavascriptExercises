
function chunkArrayInGroups(arr, size) {
	var arrayaux = [];
	var novoarray= [];
	var aux1 = size;
	var aux2 = 0;

	for(var i = 0; i <= arr.length; i++){
		for(var j = 0; j <= arr.length; j++){	//For mais rápido. Percorrerá item a item do array
			if(j == size){	//Todas as vezes em que j for igual ao valor da variável "size"
				arrayaux[i] = arr.slice(aux2, aux1);	//o "arrayaux" receberá o corte do array de acordo com os valores das variáveis "aux2" e "aux1"
				aux2 = aux1;	//variável "aux2" receberá o valor da variável "aux1"
				aux1 = aux1 + size; //variável "aux1" receberá o valor dela somado com ela mesma
				}if(arrayaux.length >= (arr.length / size)){
					novoarray = arrayaux;
					break;
				}

		}
	}

  return novoarray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
