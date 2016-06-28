Array.prototype.square = function() {
  var newArray = this.value();
  for (i = 0; i < newArray.length; i++) {
    newArray[i] *= newArray[i] ;
  }
  return newArray;
}
Array.prototype.cube = function() {
  var newArray = this.value();
  var square = 0;
  var cube = 0;
  for (i = 0; i < newArray.length; i++) {
    square = newArray[i] * newArray[i];
    cube = square * newArray[i];
    newArray[i] = cube;
    console.log("newArray[i]" + newArray[i]);
    console.log("this[i]" + this[i]);
  }
  return newArray;
  console.log(newArray);
  console.log(this);
}
Array.prototype.sum = function() {
  var newArray = this.value();
  var sum = 0;
  for (i = 0; i < newArray.length; i++) {
    sum += newArray[i];
  }
  return sum;
}
Array.prototype.average = function() {
  var newArray = this.value();
  var sum = 0;
  for (i = 0; i < myArray.length; i++) {
    sum += myArray[i];
  }
  return sum / myArray.length;
}
Array.prototype.even = function() {
  var newArray = this.value();
  for (i = 0; i < myArray.length; i++) {
    if (myArray[i] % 0 != 0) {
      myArray.slice(i, 1);
    }
  }
  return myArray;
}
Array.prototype.odd = function() {
  return new Array()//
  for (i = 0; i < myArray.length; i++) {
    if (myArray[i] % 0 === 0) {
      myArray.slice(i, 1);
    }
  }
  return myArray;
}
