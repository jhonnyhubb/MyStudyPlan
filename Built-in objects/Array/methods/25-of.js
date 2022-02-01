console.log(Array.of(7)); // [7]
console.log(Array(7)); // array of 7 empty slots

console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array(1, 2, 3));    // [1, 2, 3]
// /*  Syntax  */

// Array.of(element0)
// Array.of(element0, element1)
// Array.of(element0, element1, /* ... ,*/ elementN)

console.log(Array.of(1));         // [1]
console.log(Array.of(1, 2, 3));   // [1, 2, 3]
console.log(Array.of(undefined)); // [undefined]
