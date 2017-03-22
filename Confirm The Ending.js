
function confirmEnding(str, target) {
  var aux = [];
  aux = str.split(" ").reverse();
  
  if(str.substr(-target.length == target)){	 //We use the method substr() with the negative value of target's length to extract the ending segment of str of the same size as target, 
  	//compare it to target, and then return the value of this boolean expression.
  	console.log("Verdade");
    return true;  
  }else{
  	console.log("Falso");
    return false;
  }
}

confirmEnding("Connor", "n");
