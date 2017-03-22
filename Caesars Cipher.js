
function rot13(str) { // LBH QVQ VG!
  //Desmonta as palavras tornando-as letras soltas em um array. Transforma em maíusculo para garantir o funcionamento correto do algoritmo
  str = str.split("").join("").toUpperCase();
  console.log(str);
  var finalstr = [];

  //Percorre o array da esquerda para a direita
  for(var i = 0; i < str.length; i++){
    console.log(str.charCodeAt(i));

    //Transforma as letras nos valores (códigos) referentes a elas e anda 13 casas de acordo com a lógica abaixo
    if(str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90){
     finalstr[i] = str.charCodeAt(i);
      }else{
        if(str.charCodeAt(i) + 13 > 90 ){
        finalstr[i] = str.charCodeAt(i) - 13;
          }else{
            finalstr[i] = str.charCodeAt(i) + 13;
          }
        }
    //Reverte de Int para Char
    finalstr[i] = String.fromCharCode(finalstr[i]);
  }
  //console.log(outrastr.fromCharCode());
  console.log(finalstr.join(""));
  return finalstr.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
