const numbers = Array.of(1,2,3,4,5,6,7,8,9)

console.log(numbers)

let rest = numbers.map(element => element % 2)
let numbersPairs = [];
for(let index = 0; index < numbers.length; index++) {
    if(rest[index] === 0){
        numbersPairs.push(numbers[index])
    }
}

console.log(numbers)

console.log(numbersPairs)