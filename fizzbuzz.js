fizzbuzz = function(i) {
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
var i = 1

while (i < 100){
  fizzbuzz(i);
  i++;
}
