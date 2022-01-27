/*  Syntax  */
// Arrow function
flatMap((currentValue) => { /* ... */ } )
flatMap((currentValue, index) => { /* ... */ } )
flatMap((currentValue, index, array) => { /* ... */ } )

// Callback function
flatMap(callbackFn)
flatMap(callbackFn, thisArg)

// Inline callback function
flatMap(function(currentValue) { /* ... */ })
flatMap(function(currentValue, index) { /* ... */ })
flatMap(function(currentValue, index, array){ /* ... */ })
flatMap(function(currentValue, index, array) { /* ... */ }, thisArg)

/*  Alternative */
var arr = [1, 2, 3, 4];

console.log(arr.flatMap(x => [x, x * 2]));
// is equivalent to
var n = arr.length;
var acc = new Array(n * 2);
for (let i = 0; i < n; i++){
  var x = arr[i];
  acc[i * 2] = x;
  acc[i * 2 + 1] = x * 2;
}
// [1, 2, 2, 4, 3, 6, 4, 8]

let arr1 = [1, 2, 3, 4];

console.log(arr1.map(x => [x * 2]));
// [[2], [4], [6], [8]]

console.log(arr1.flatMap(x => [x * 2]));
// [2, 4, 6, 8]

// only one level is flattened
console.log(arr1.flatMap(x => [[x * 2]]));
// [[2], [4], [6], [8]]

let arr1 = ["it's Sunny in", "", "California"];

console.log(arr1.map(x => x.split(" ")));
// [["it's","Sunny","in"],[""],["California"]]

const arr2 = arr1.flatMap(x => x.split(" "))
console.log(arr2);
// ["it's","Sunny","in", "", "California"]

let text = "";
for(let i of arr2){
    text += i + " ";
}
console.log(text);

// Let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1
let a = [5, 4, -3, 20, 17, -33, -4, 18]
//       |\  \  x   |  | \   x   x   |
//      [4,1, 4,   20, 16, 1,       18]

a.flatMap( (n) =>
  (n < 0) ?      [] :
  (n % 2 == 0) ? [n] :
                 [n-1, 1]
)

// expected output: [4, 1, 4, 20, 16, 1, 18]
console.log(a);