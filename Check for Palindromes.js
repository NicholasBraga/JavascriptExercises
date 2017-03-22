
function palindrome(str) {
  
  var novaString = str.toLowerCase().replace(/[\W_]/gi, ""); //O método replace com os argumentos /\W/g, "" remove os caracteres não alfa numéricos
  var novaStringReversa = novaString.split("").reverse().join("");
  
 return novaString == novaStringReversa;
}


palindrome("_eye");
