function swap(i, j, array) {
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
}
function bubbleSort(array) {
    let isSorted = false 
    let interation = 0 
    while(isSorted == false) {
        isSorted = true
        for(let i = 0; i < array.length - 1 - interation; i++){
            if(array[i] > array[i+1]) {
                swap(i, i+1 , array)
                isSorted = false
            }
        }
        interation += 1
        console.log(array);
    }

}





let arr = [1, 3, 5, 4, 2]
bubbleSort(arr)
