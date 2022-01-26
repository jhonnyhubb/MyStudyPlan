// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));
// // expected output: 3

// /*  syntax  */
// // Arrow function
// findIndex((element) => { /* ... */ } )
// findIndex((element, index) => { /* ... */ } )
// findIndex((element, index, array) => { /* ... */ } )

// // Callback function
// findIndex(callbackFn)
// findIndex(callbackFn, thisArg)

// // Inline callback function
// findIndex(function(element) { /* ... */ })
// findIndex(function(element, index) { /* ... */ })
// findIndex(function(element, index, array){ /* ... */ })
// findIndex(function(element, index, array) { /* ... */ }, thisArg)
function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
  }
  
console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 9, 13].findIndex(isPrime)); // 2 (array[2] is 7)

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries

  