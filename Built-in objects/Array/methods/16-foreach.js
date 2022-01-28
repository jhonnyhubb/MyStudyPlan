const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

/*  Syntax  */
// Arrow function
forEach((element) => { /* ... */ } )
forEach((element, index) => { /* ... */ } )
forEach((element, index, array) => { /* ... */ } )

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function(element) { /* ... */ })
forEach(function(element, index) { /* ... */ })
forEach(function(element, index, array){ /* ... */ })
forEach(function(element, index, array) { /* ... */ }, thisArg)

let ratings = [5, 4, 5];
let sum = 0;

let sumFunction = async function (a, b)
{
  return a + b
}

ratings.forEach(async function(rating) {
  sum = await sumFunction(sum, rating)
})

console.log(sum)
// Naively expected output: 14
// Actual output: 0

const arraySparse = [1,3,,7]
let numCallbackRuns = 0

arraySparse.forEach(function(element) {
  console.log(element)
  numCallbackRuns++
})

console.log("numCallbackRuns: ", numCallbackRuns)

// 1
// 3
// 7
// numCallbackRuns: 3
// comment: as you can see the missing value between 3 and 7 didn't invoke callback function.

const items = ['item1', 'item2', 'item3']
const copyItems = []

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i])
}

console.log(copyItems)

// after
items.forEach(function(item){
  copyItems.push(item)
})
console.log(copyItems)
console.table(copyItems)

function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element)
  }
  
  // Notice that index 2 is skipped, since there is no item at
  // that position in the array...
  [2, 5, , 9].forEach(logArrayElements)
  // logs:
  // a[0] = 2
  // a[1] = 5
  // a[3] = 9
  
  function Counter() {
    this.sum = 0
    this.count = 0
  }
  Counter.prototype.add = function(array) {
    array.forEach(function countEntry(entry) {
      this.sum += entry
      ++this.count
    }, this)
  }
  
  const obj = new Counter()
  obj.add([2, 5, 9])
  console.log(obj.count)
  // 3
  console.log(obj.sum)
  // 16
  
  function copy(obj) {
    const copy = Object.create(Object.getPrototypeOf(obj))
    const propNames = Object.getOwnPropertyNames(obj)
  
    propNames.forEach(function(name) {
      const desc = Object.getOwnPropertyDescriptor(obj, name)
      Object.defineProperty(copy, name, desc)
    })
  
    return copy
  }
  
  const obj1 = { a: 1, b: 2 }
  const obj2 = copy(obj1) // obj2 looks like obj1 now
  console.log(obj1)
  console.log(obj2)

let words = ['one', 'two', 'three', 'four']
words.forEach(function(word) {
    if (word === 'two') {
        words.shift() //'one' will delete from array
    }
    
}) // one // two // four

console.log(words);  //['two', 'three', 'four']

function flatten(arr) {
    const result = []
  
    arr.forEach(function(i) {
      if (Array.isArray(i)) {
        result.push(...flatten(i))
      } else {
        result.push(i)
      }
    })
  
    return result
  }
  
  // Usage
  const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]]
  
  console.log(nested) 
  console.log(flatten(nested)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  

