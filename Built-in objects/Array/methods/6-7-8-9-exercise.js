let fruits = ["apple", "orange", "banana"]
let foods = ["rice", "beans", "chicken", , , , ]


let shop = fruits.concat(foods)

console.log(shop)

shop.copyWithin(6,0,3)
console.log(shop)

shop.pop()
shop.pop()
shop.pop()
console.log(shop)


const iterator = shop.entries()
for(const [ , element] of iterator){
    console.log(`I will buy ${element}`)
}

console.log([12, 54, 18, 130, 44].every(x => x >= 10))
console.log([12, 54, 18, 130, 2].every(x => x >= 5))


