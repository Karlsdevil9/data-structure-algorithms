const bubbleSort = (arr, n) => {
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap values of arr[j] & arr[j+1]
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([2, 6, 4, 1, 5], 5)) // [1, 2, 4, 5, 6]