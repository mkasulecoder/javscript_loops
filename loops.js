//while loops
//WILL NOT RUN ANY CODE BEFORE CHECKING THE CODE
var myArray = [];
var i = 0;
while (i < 10) {
  myArray.push(i);
  i++;
}
console.log(myArray);

//for loops

var newArray = [];
for (var i = 0; i <= 10; i++) {
  newArray.push(i);
}
console.log(newArray);

//even number for loops i = 0.

var evenNum = [];
for (var i = 0; i <= 20; i += 2) {
  evenNum.push(i);
}
console.log(evenNum);

//odd numbers for loops i = 1

var oddNum = [];
for (var i = 1; i <= 20; i += 2) {
  oddNum.push(i);
}
console.log(oddNum);

//counting backwards with for loops

var backNum = [];
//make i to initially equal to 10
for (i = 10; i > 0; i -= 1) {
  backNum.push(i);
}
console.log(backNum);

//NESTING THROUGH A READY PROVIDED ARRAY
var x = [1, 2, 3, 4, 5];
var total = 0;
for (var i = 0; i < x.length; i++) {
  total += x[i];
}
console.log(total);

//multiply through an array

function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

var product = multiplyAll([
  [1, 4],
  [3, 5],
  [4, 6, 7],
]);
console.log(product);

//2
function myList(arr) {
  var product = 1;
  for (a = 0; a < myList.length; a++) {
    for (b = 0; a < myList[a]; a++) {
      product = [a][b];
    }
    return product;
  }
  var product = myList[([1, 2], [4, 6], [8, 9])];
}
console.log(product);

//DO WHILE
// DO WILL RUN SOME CODE BEFORE THE WHILE LOOP
var myArray = [];
var i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 10);

console.log(i, myArray);

//2
var x = 1;
do {
  x++;
} while (x < 5);
console.log(x);
