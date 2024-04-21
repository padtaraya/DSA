
let my_array = [64, 34, 55, 22, 12, 45, 99]
// let n = my_array.length
for(let i = 0; i < my_array.length - 1; i++) {
    console.log(my_array.length - 1);
    let min_index = 1
    
    console.log("i = ", i);
    
    for(let j = i + 1; j < my_array.length; j++){
        console.log("j = ", j);

        if(my_array[j] < my_array[min_index]){
            // console.log("jskldf");
            min_index = j
        }

        let min_value = my_array.splice(min_index)
        console.log("min_value ", min_value);
        my_array.splice(i, min_value)
        console.log(my_array);

    }
}

console.log("Sort array: ", my_array);