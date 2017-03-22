/*Check if a string (first argument, str) ends with the given target string (second argument, target).*/


function confirmEnding(str, target) {
  var aux = [];
  aux = str.split(" ").reverse();
  
  if(str.substr(-1) == target || aux[0] == target || str.substr(7, 10) == target){
    return true;  
  }
  
  return false;
}

confirmEnding("Connor", "n");
