//Cria um array com apenas os itens desejados
function destroyer(arr, ...values) {
  var newarr = [];

  //Procurará os valores iguais entre os parâmetros "arr" e "values" e substituirá em "arr" pela palavra "remove"
  for(var i = 0; i < arr.length; i++){
    for (var j = 0; j < values.length; j++){
      if(arr[i] == values[j]){
        arr[i] = "remove";
      }
    }
  }
  //Filtro para que o vetor "newarr" só receba os valores diferentes de "remove"
  newarr = arr.filter(function(arr){
    return arr !== "remove";
  });

  console.log(newarr);
  return newarr;
}
destroyer(["tree", "hamburger", 53], "tree", 53);
