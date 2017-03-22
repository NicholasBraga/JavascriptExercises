/*function diffArray(arr1, arr2) {
  var newArr = [];

  for(var i = 0; i < arr1.length; i++){
  	for(var j = 0; j < arr2.length; j++){
  		if(arr1[i] == arr2[j]){ //Pensar em como identificar o item diferente em cada array
  			console.log(arr1[i]);
  		}
  	}
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);*/

function diffArray(arr1, arr2) {
  var newArr = [];

  if(arr1.length !== arr2.length){
    for(var i = 0; i < arr1.length; i++){
      for(var j = 0; j < arr2.length; j++){ //j inteiro percorre cada item do "i" de cada vez
        console.log("i = " + i);
        console.log("j =" + j);
      }
    }
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

