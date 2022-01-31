let fruits = ["apple", "orange", "banana"];

console.log(fruits.includes("strawberrie"));

if(!fruits.includes("strawberrie")) {
    fruits.push("strawberrie");
}
if(Array.isArray(fruits)) {
    console.log(`strawberrie is in: ${fruits.indexOf("strawberrie")}`)
}

console.log(fruits)

console.log(fruits.join(" + "))
console.log(Array.isArray(fruits.join(" + ")))
console.log(Array.isArray(fruits.join(",")))


for (const key of fruits) {    
    console.log(`fruit: ${key}`)
}
console.log(Object.keys(fruits))

if(fruits.lastIndexOf("banana") != fruits.indexOf("banana")) {
    console.log(fruits.lastIndexOf("banana"))
}else{
    console.log("there is only one banana in array of fruits")
}

