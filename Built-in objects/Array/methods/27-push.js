// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('cows');
// console.log(count);
// // expected output: 4
// console.log(animals);
// // expected output: Array ["pigs", "goats", "sheep", "cows"]

// console.log(animals.push('chickens', 'cats', 'dogs'));
// console.log(animals);
// // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

//Adding elements to an array

let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')

console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
console.log(total)   // 4

//Merging two arrays

let vegetables1 = ['parsnip', 'potato']
let vegetables2 = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

// Merge the second array into the first one
vegetables1.push(...moreVegs);
vegetables2.push(moreVegs);

console.log(vegetables1)  // ['parsnip', 'potato', 'celery', 'beetroot']
console.log(vegetables2)  // ['parsnip', 'potato', 'celery', 'beetroot']

//Using an object in an array-like fashion

let obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length is automatically incremented
        // every time an element is added.
        [].push.call(this, elem)
    }
}

// Let's add some empty objects just to illustrate.
console.log(obj.length)
// → 2