const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

console.log([1, 2, 3].includes(2))         // true
console.log([1, 2, 3].includes(4))         // false
console.log([1, 2, 3].includes(3, 3))      // false
console.log([1, 2, 3].includes(3, -1))     // true
console.log([1, 2, NaN].includes(NaN))     // true
console.log([1, 2, 3].includes(NaN))     // true
console.log(["1", "2", "3"].includes(3))   // false

let arr = ['a', 'b', 'c']

arr.includes('c', 3)    // false
arr.includes('c', 100)  // false

let arr = ['a', 'b', 'c']

console.log(arr.includes('a', -100)) // true
console.log(arr.includes('b', -100)) // true
console.log(arr.includes('c', -100)) // true
console.log(arr.includes('a', -2))   // false