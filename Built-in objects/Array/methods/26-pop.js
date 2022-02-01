// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// console.log(plants.pop());
// // expected output: "tomato"

// console.log(plants);
// // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

// plants.pop();

// console.log(plants);
// // expected output: Array ["broccoli", "cauliflower", "cabbage"]

// // Removing the last element of an array

// var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

// var popped = myFish.pop();

// console.log(myFish); // ['angel', 'clown', 'mandarin' ]

// console.log(popped); // 'sturgeon'

// Using apply( ) or call ( ) on array-like objects

var myFish = {0:'angel', 1:'clown', 2:'mandarin', 3:'sturgeon', length: 4};

var popped = Array.prototype.pop.call(myFish); //same syntax for using apply( )

console.log(myFish); // {0:'angel', 1:'clown', 2:'mandarin', length: 3}

console.log(popped); // 'sturgeon'

// Using an object in an array-like fashion

const collection = {
    length: 0,
    addElements: function(...elements) {
        // obj.length will be incremented automatically
        // every time an element is added.
        
        // Returning what push returns; that is
        // the new value of length property.
        return [].push.call(this, ...elements);
    },
    removeElement: function() {
        // obj.length will be decremented automatically
        // every time an element is removed.
        
        // Returning what pop returns; that is
        // the removed element.
        return [].pop.call(this);
    }
}

collection.addElements(10, 20, 30);
console.log(collection.length);  // 3
collection.removeElement();
console.log(collection.length);  // 2

