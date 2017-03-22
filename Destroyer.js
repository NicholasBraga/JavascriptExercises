//Resolução - Git
/*function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}*/

//Tentativa de criar um array apenas com os itens desejados
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
