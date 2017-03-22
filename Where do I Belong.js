//Função serve para corrigir falha do método sort() que converte os valores em strings e os organiza de acordo com a tabela Unicode, o que pode acarretar numa ordenação numérica errada
/*function organize(a, b){
  return a-b;
}

function getIndexToIns(arr, num) {
  var newarr = arr.sort(organize);

  for(var i = 0; i < newarr.length; i++){ //Percorre o array da esquerda para a direita
    if(num > newarr[newarr.length-1]){  //Checa se "num" é maior do que o último valor do array
      newarr[newarr.length] = num;
      console.log(newarr.indexOf(num));
      return newarr.indexOf(num);
    }else{
      if(num >= newarr[i] && num < newarr[i+1]){  //Caso não seja maior que o último valor, procura onde ele se encaixa
        newarr[newarr.length] = num;
        newarr.sort(organize);
        console.log(newarr.indexOf(num));
        console.log(newarr);
        return newarr.indexOf(num);
      }
    }
  }
}
getIndexToIns([2, 5, 10], 6);*/

function organize(a, b){
  return a - b;
}

function getIndexToIns(arr, num) {
  arr[arr.length] = num;  //Cria um novo slot no array para receber o valor da variável "num"
  var newarr = arr.sort(organize);  //Array de apoio que recebe o array original organizado por sort() e com o método organize() para evitar problemas inerentes ao sort(), já que ele converte os valores em Strings e os organiza pelo código Unicode, o que pode causar erro na sequência numérica
  return newarr.indexOf(num);
}

getIndexToIns([2, 5, 10], 15);