// const array1 = [1, 2, 3, 4];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15

/*  Syntax  */
// Arrow function
// reduce((previousValue, currentValue) => { /* ... */ } )
// reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
// reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
// reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

// // Callback function
// reduce(callbackFn)
// reduce(callbackFn, initialValue)

// // Inline callback function
// reduce(function(previousValue, currentValue) { /* ... */ })
// reduce(function(previousValue, currentValue, currentIndex) { /* ... */ })
// reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })
// reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)

// const getMax = (a, b) => Math.max(a, b);

// // callback is invoked for each element in the array starting at index 0
// console.log([1, 100].reduce(getMax, 50)); // 100
// console.log([    50].reduce(getMax, 10)); // 50

// // callback is invoked once for element at index 1
// console.log([1, 100].reduce(getMax));     // 100

// // callback is not invoked
// console.log([    50].reduce(getMax));     // 50
// console.log([      ].reduce(getMax, 1));  // 1

// // How reduce() works without an initial value

// const array = [15, 16, 17, 18, 19];

// function reducer(previous, current, index, array) {
//   const returns = previous + current;
//   console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
//   return returns;
// }

// console.log(array.reduce(reducer));

// //How reduce() works with an initial value

// console.log([15, 16, 17, 18, 19].reduce( (previousValue, currentValue, currentIndex, array) => previousValue + currentValue, 10 )
// )

// //Sum all the values of an array
// let sum = [0, 1, 2, 3].reduce(function (previousValue, currentValue) {
//     return previousValue + currentValue
//   }, 0)
//   // sum is 6
// console.log(`sum: ${sum}`)  
// let total = [ 0, 1, 2, 3 ].reduce(
//     ( previousValue, currentValue ) => previousValue + currentValue,
//     0
//   )
//   console.log(`sum: ${total}`)  
  
// //Sum of values in an object array
// let initialValue = 0
// let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (previousValue, currentValue) {
//     return previousValue + currentValue.x
// }, initialValue)

// console.log(sum) // logs 6

// let initialValue = 0
// let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
//     (previousValue, currentValue) => previousValue + currentValue.x
//     , initialValue
// )

// console.log(sum) // logs 6

// //Flatten an array of arrays
// let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//     function(previousValue, currentValue) {
//       return previousValue.concat(currentValue)
//     },
//     []
//   )
//   // flattened is [0, 1, 2, 3, 4, 5]
// console.log(flattened)  
// let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//     ( previousValue, currentValue ) => previousValue.concat(currentValue),
//     []
//   )

// //Counting instances of values in an object
// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

// let countedNames = names.reduce(function (allNames, name) {
//   if (name in allNames) {
//     allNames[name]++
//   }
//   else {
//     allNames[name] = 1
//   }
//   return allNames
// }, {})
// // countedNames is:
// // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
// console.log(countedNames)

// //Grouping objects by a property
// let people = [
//     { name: 'Alice', age: 21 },
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ];
  
// function groupBy(objectArray, property) {
//     return objectArray.reduce(function (acc, obj) {
//     let key = obj[property]
//     if (!acc[key]) {
//         acc[key] = []
//       }
//       acc[key].push(obj)
//       return acc
//     }, {})
//   }
  
// let groupedPeople = groupBy(people, 'age')
//   // groupedPeople is:
//   // {
//   //   20: [
//   //     { name: 'Max', age: 20 },
//   //     { name: 'Jane', age: 20 }
//   //   ],
//   //   21: [{ name: 'Alice', age: 21 }]
//   // }
// console.log(groupedPeople)

// // Bonding arrays contained in an array of objects using the spread operator and initialValue

// // friends - an array of objects
// // where object field "books" is a list of favorite books
// let friends = [{
//     name: 'Anna',
//     books: ['Bible', 'Harry Potter'],
//     age: 21
//   }, {
//     name: 'Bob',
//     books: ['War and peace', 'Romeo and Juliet'],
//     age: 26
//   }, {
//     name: 'Alice',
//     books: ['The Lord of the Rings', 'The Shining'],
//     age: 18
//   }]
  
//   // allbooks - list which will contain all friends' books +
//   // additional list contained in initialValue
//   let allbooks = friends.reduce(function(previousValue, currentValue) {
//     return [...previousValue, ...currentValue.books]
//   }, ['Alphabet'])
  
//   // allbooks = [
//   //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   //   'Romeo and Juliet', 'The Lord of the Rings',
//   //   'The Shining'
//   // ]
//   console.log(allbooks)

  //Remove duplicate items in an array
  let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue)
  }
  return previousValue
}, [])

console.log(myArrayWithNoDuplicates)
