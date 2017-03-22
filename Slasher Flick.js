
function slasher(arr, howMany) {
	var novoarray = arr.slice(howMany);
	console.log(novoarray);

  return arr;
}

slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);
