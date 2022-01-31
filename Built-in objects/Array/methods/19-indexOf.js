// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));
// // expected output: 1

// // start from index 2
// console.log(beasts.indexOf('bison', 2));
// // expected output: 4

// console.log(beasts.indexOf('giraffe'));
// // expected output: -1

// // Using indexOf()
// var array = [2, 9, 9];
// console.log(array.indexOf(2));     // 0
// console.log(array.indexOf(7));     // -1
// console.log(array.indexOf(9, 2));  // 2
// console.log(array.indexOf(2, -1)); // -1
// console.log(array.indexOf(2, -3)); // 0

// // Finding all the occurrences of an element
// var indices = [];
// var array = ['a', 'b', 'a', 'c', 'a', 'd'];
// var element = 'a';
// var idx = array.indexOf(element);
// while (idx != -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);
// // [0, 2, 4]

// Finding if an element exists in the array or not and updating the array

function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

console.log(veggies)

updateVegetablesCollection(veggies, 'spinach');
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach

console.log(veggies)

updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.

console.log(veggies)


