/*Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.*/

function mutation(arr) {
	var count = 0;

	for(var i = 0; i < arr[1].length; i++){	//Laço de repetição que terá a duração igual ao comprimento da string referente ao segundo termo do método
		for(var j = 0; j < arr[0].length; j++){	//Laço de repetição que terá a duração igual ao comprimeiro do primeiro termo do método
			if(arr[1][i].toLowerCase().indexOf(arr[0][j].toLowerCase()) == 0){	//Verifica se, letra por letra do segundo termo, está contida no primeiro termo
				count += 1	//Se estiver, conta +1 e pula para a próxima letra do segundo termo em função do primeiro
				break;
			}
		}
	}
  if(count == arr[1].length){	//Se o valor de count for igual ao comprimento do segundo argumento do array, retornar TRUE
  	console.log("Possui todos os caracteres! Valor de count: " + count);
  	return true;
  }
	//Se o valor de count for diferente do comprimento do segundo argumento do array, retornar FALSE
	console.log("Não possui todos os caracteres... \nValor de count: " + count + "\nValor esperado: " + arr[1].length);
  	return false;
}

mutation(["voodoo", "no"]);
