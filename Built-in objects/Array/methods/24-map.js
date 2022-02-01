// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]

// /*  Syntax  */
// // Arrow function
// map((element) => { /* ... */ })
// map((element, index) => { /* ... */ })
// map((element, index, array) => { /* ... */ })

// // Callback function
// map(callbackFn)
// map(callbackFn, thisArg)

// // Inline callback function
// map(function(element) { /* ... */ })
// map(function(element, index) { /* ... */ })
// map(function(element, index, array){ /* ... */ })
// map(function(element, index, array) { /* ... */ }, thisArg)

// Mapping an array of numbers to an array of square roots

let numbers = [1, 4, 9]
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})
console.log(numbers)
console.log(roots)
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

// Using map to reformat objects in an array

let kvArray = [{key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}]

let reformattedArray = kvArray.map(obj => {
let rObj = {}
rObj[obj.key] = obj.value
return rObj
})
console.log(reformattedArray)
console.log(kvArray)
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]

// Mapping an array of numbers using a function containing an argument

let numbers = [1, 4, 9]
let doubles = numbers.map(function(num) {
  return num * 2
})
console.log(numbers)
console.log(doubles)

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]

// Using map generically

let map = Array.prototype.map
let a = map.call('Hello World', function(x) {
  return x.charCodeAt(0)
})
console.log(a)
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

console.log(['1', '2', '3'].map(Number))

// Mapped array contains undefined

let numbers = [1, 2, 3, 4]
let filteredNumbers = numbers.map(function(num, index) {
  if (index < 3) {
     return num
  }
})

console.log(numbers)
console.log(filteredNumbers)
// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]
