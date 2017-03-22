
function repeatStringNumTimes(str, num) {
  if(num < 0){
    return str = "";
  }else{
   return str.repeat(num); 
  }
}

repeatStringNumTimes("abc", 3);
