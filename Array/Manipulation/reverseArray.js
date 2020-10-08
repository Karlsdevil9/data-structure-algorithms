const reverseArray = arr => {
    let finalArray = []
    arr.forEach(el => finalArray.unshift(el))
    return finalArray
}

console.log(reverseArray([2, 6, 4, 1])) // [1, 4, 6, 2]