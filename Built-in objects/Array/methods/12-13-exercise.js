const arr = [38, 13, 37, 28, 59, 42, 65, 70, 77, 66, 50, 28, 32, 18, 96, 54, 94, 87, 8, 84, 68, 21, 21, 65 ]

const names =["Bianca", "Thiago", "Isabel", "Miguel", "Henrique", "Alícia", "Gael", "Luna", "Bento", "Mariah", "Luiz", "Henrique", "Maria", "Heloísa", "Arthur", "Gabriel"]

// console.log(arr)

console.log(arr.find(element => element > 50))
console.log(arr.findIndex(element => element > 80 && element <96))
console.log(arr[16])

const result = names.find(element => element === "Gabriel")
console.log(result)
