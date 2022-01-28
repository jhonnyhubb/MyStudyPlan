const names = ["Bianca", "Thiago", "Isabel", "Miguel", "Henrique", "Alícia", "Gael", "Luna", "Bento", "Mariah", "Luiz", "Henrique", "Maria", "Heloísa", "Arthur", "Gabriel"]

let number = 0;
const list = []

names.forEach(function(element){
    number++
    list.push(`${number}º: ` + element)
})

console.log(number)
console.log(names)
console.log(list)


console.log(Array.from({length: number}, (value, index) => i))