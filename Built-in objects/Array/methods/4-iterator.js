// const arr = ['a', 'b', 'c'];
// const eArr = arr[Symbol.iterator]();
// const letterResult = document.getElementById('letterResult');
// // your browser must support for..of loop
// // and let-scoped variables in for loops
// // const and var could also be used
// for (let letter of eArr) {
//   const li = document.createElement('LI');
//   li.textContent = letter;
//   letterResult.appendChild(li);
// }

// var arr = ['a', 'b', 'c', 'd', 'e'];
// var eArr = arr[Symbol.iterator]();
// console.log(eArr.next().value); // a
// console.log(eArr.next().value); // b
// console.log(eArr.next().value); // c
// console.log(eArr.next().value); // d
// console.log(eArr.next().value); // e


function logIterable(it) {
    if (!(Symbol.iterator in Object.getPrototypeOf(it)
    /* or "Symbol.iterator in Object.__proto__"
       or "it[Symbol.iterator]" */)) {
      console.log(it, ' is not an iterable object...');
      return;
    }
   
    var iterator = it[Symbol.iterator]();
     // your browser must support for..of loop
     // and let-scoped variables in for loops
     // const and var could also be used
     for (let letter of iterator) {
         console.log(letter);
     }
   }
   
   // Array
   logIterable(['a', 'b', 'c']);
   // a
   // b
   // c
   
   // string
   logIterable('abc');
   // a
   // b
   // c
   logIterable(['abc']);
   
   logIterable(123);
   // 123 " is not an iterable object..."
   
