/*Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".*/

function titleCase(str) {
  var stringseparada = str.toLowerCase().split(" ");
  var stringmaiuscula = [];
  
  for(var i in stringseparada){
    for(var j in stringseparada[i]){
      stringmaiuscula[i] = stringseparada[i].charAt(0).toUpperCase(); //Array com as 1ªs letras maiusculas
    }
    stringseparada[i] = stringmaiuscula[i]+stringseparada[i].substring(1, stringseparada[i].length);
  }
  
  return stringseparada.join(" ");
}

titleCase("I'm a little tea pot");
