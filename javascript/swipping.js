const my_array = [63, 77, 22, 55, 21, 12, 123, 26]


const len = my_array.length

for (let i = 0; i < len; i++) {
    
    let min_index = i

    for (let j = i + 1; j < len; j++) {
        if (my_array[j] < my_array[min_index]) {
            min_index = j
        }

    }
    let chunk = my_array[i]
    my_array[i] = my_array[min_index]
    my_array[min_index] = chunk


}

console.log(my_array);



