function isBigEnough (element, index, array){
    return element >=5;
}

arr = [-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10]


let filtered = arr.filter(isBigEnough)

filtered.fill(5,3)
console.log(arr)
console.log(filtered)