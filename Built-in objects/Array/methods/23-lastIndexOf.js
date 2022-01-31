// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

// console.log(animals.lastIndexOf('Dodo'));
// // expected output: 3

// console.log(animals.lastIndexOf('Tiger'));
// // expected output: 1

// /*  Syntax  */
// lastIndexOf(searchElement)
// lastIndexOf(searchElement, fromIndex)

// var numbers = [2, 5, 9, 2];
// console.log(numbers.lastIndexOf(2));     // 3
// console.log(numbers.lastIndexOf(7));     // -1
// console.log(numbers.lastIndexOf(2, 3));  // 3
// console.log(numbers.lastIndexOf(2, 2));  // 0
// console.log(numbers.lastIndexOf(2, -2)); // 0
// console.log(numbers.lastIndexOf(2, -1)); // 3

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}

console.log(indices);
// [4, 2, 0]