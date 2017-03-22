/*Return the lowest index at which a value (second argument)should be inserted into an array 
(first argument) once it has been sorted. The returned value should be a number.*/

//Função serve para corrigir falha do método sort() que converte os valores em strings e os organiza de acordo com a tabela Unicode, o que pode acarretar numa ordenação numérica errada
function organize(a, b){
  return a-b;
}

function getIndexToIns(arr, num) {
  var newarr = arr.sort(organize);

  for(var i = 0; i < newarr.length; i++){ //Percorre o array da esquerda para a direita
    if(num > newarr[newarr.length-1]){  //Checa se "num" é maior do que o último valor do array
      newarr[newarr.length] = num;
      return newarr.indexOf(num);
    }else{
      if(num >= newarr[i] && num < newarr[i+1]){  //Caso não seja maior que o último valor, procura onde ele se encaixa
        newarr[newarr.length] = num;
        newarr.sort(organize);
        return newarr.indexOf(num);
      }
    }
  }
}
getIndexToIns([2, 5, 10], 6);
