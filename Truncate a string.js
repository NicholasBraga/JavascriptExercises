
function truncateString(str, num) {

	if(str.length <= num){	//Se o comprimento da string for menor ou igual ao da variável "num"...
		console.log("Primeiro IF");
		console.log(str);	//Imprime a string inteira, sem modificações.
	}else{
		if(num <= 3){	//Se a variável "num" tiver um valor menor ou igual a 3...
			console.log("Segundo IF");
			console.log(str.slice(0, num) + "...");	//Imprime apenas as letras do índice 0 até o índice referente ao valor da variável "num" e adiciona "..."
		}else{	//Se o comprimento da string for maior que o valor da variável "num"
				console.log("Terceiro IF");
				console.log(str.slice(0, num-3) + "...");	//Imprime apenas as letras do índice 0 até o índice referente ao valor da variável "num" - 3 posições e acrescenta "..."
		}
	}
  
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);