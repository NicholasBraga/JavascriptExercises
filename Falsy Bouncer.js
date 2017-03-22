function bouncer(arr) {
  var newarr = arr.filter(function(val){	//Retornará tudo o que for diferente de...
  	return val !== "" &&
  	val !== false &&
  	val !== 0 &&
  	val !== null &&
  	val !== undefined && 
  	val === val;//NaN is the only JS value for which val!==val is true. Therefore you can test for NaN with val!==val. Also you can test for value not being NaN with val===val.
  });
  console.log(newarr);
  return newarr;
}

bouncer([1, null, NaN, 2, undefined]);
