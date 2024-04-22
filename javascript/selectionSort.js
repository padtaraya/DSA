let my_array = [64, 34, 55, 22, 12, 45, 99]

let n = my_array.length

for(i = 0; i < n - 1; i ++){
    console.log(i);
    let min_index = 1
    console.log("min ",min_index);
    for(j = i + 1; j <  n; j++){
        console.log("j : ", j);
        if(my_array[j] < my_array[min_index]){
            console.log("in if");
            min_index = j
        }
    }
    let min_value = my_array.splice(min_index,1)
    console.log("min value ", Number(min_value[0]));
    my_array.splice(i, 0,Number(min_value[0]))
   
}

console.log("Sort array: ", my_array);

