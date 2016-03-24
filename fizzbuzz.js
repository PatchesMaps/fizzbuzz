var fizzbuzz = function(i) {
  fizz = function(i) {
    if (i%3 == 0){
      return "fizz"
    } else{
      return ""
    }
  }
  buzz = function(i) {
    if (i%5 == 0) {
      return "buzz"
    } else{
      return ""
    }
  }
  return fizz(i) + buzz(i)
}

var run = function(){
  var i = 1

  while (i <= 100) {
    console.log(fizzbuzz(i));
    i++;
  }  
}
return run;
