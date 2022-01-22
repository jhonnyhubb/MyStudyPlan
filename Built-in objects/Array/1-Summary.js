// var fruits = ['Apple', 'Banana'];

// console.log(fruits.length);
// // 2

// // var first = fruits[0];
// // console.log(first)
// // var last = fruits[fruits.length - 1];
// // console.log(last)

// //iterate
// fruits.forEach(function(item, index, array){
//     console.log(item, index);
//     });

// //add a item
// var add = fruits.push('Orange');
// //remove the last item
// var last = fruits.pop();
// //remove first item
// var first =fruit.shift();
// //add in the beginnig
// var add = fruits.unshift("strawberry")
// //search a item in the array
// fruits.push("mango")

// var pos = fruits.indexOf('Banana')
// //remove a item at index position
// var removeItem = fruits.splice(pos, 1);
//to train
var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
// ['Repolho', 'Nabo', 'Rabanete', 'Cenoura']

var pos = 1, n = 2;

var itemsRemoved = vegetables.splice(pos, n);

console.log(vegetables);

console.log(itemsRemoved);

var promise = {
    'var': 'text',
    'array': [1, 2, 3, 4]
  };
  
console.log(promise['var']);


var frutas = [];
frutas.push('banana', 'maça', 'pêssego');

console.log(frutas.length); // 3

frutas[5] = 'manga';
console.log(frutas[5]); // 'manga'
console.log(frutas); // ['0', '1', '2', '5']
console.log(frutas.length); // 6

// Finds a d followed by one or more b's followed by a d
// Save the found b's and the next d
// Ignore case (upper/lower case)

var myRegex = /d(b+)(d)/i;
var myArray = myRegex.exec('cdbBdbsbz');
console.log(myArray)
