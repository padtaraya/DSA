function countingSort(arr){
    let max_val = Math.max(...arr)
    let count = Array(max_val + 1).fill(0)
    
    while (arr.length > 0) {
        let num = arr.shift()
        count[num] +=  1
    }

    let sortedArr  = []
    for(let i = 0; i < count.lenght; i++){
        while (count[i] > 0){
            sortArray.push(i)
            count[i] -= 1
        }
    }
    return sortedArr 
}

let unsortedArr = [4, 2, 2, 6, 3, 3, 1, 6, 5, 2, 3]
let sortedArr  = countingSort(unsortedArr)
console.log("Sorted array:", sortedArr )