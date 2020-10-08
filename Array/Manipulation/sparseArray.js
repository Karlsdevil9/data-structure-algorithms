const sparseArray = (strings, queries) => {
    let finalArray = []
    for(let i=0; i<queries.length; i++) {
        finalArray.push(strings.filter(st => st==queries[i]).length)
    }
    return finalArray
}

console.log(sparseArray(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']))