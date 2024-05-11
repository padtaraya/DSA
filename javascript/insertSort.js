let my_array = [64, 34, 25, 12, 22, 11, 90, 5]

let n = my_array.length

for(let i = 1; i < my_array.length; i++ ){
    console.log("i ", i);
    let insert_index = 1

    let current_value = my_array.splice(i,1)

    console.log("current_value ", current_value);
    console.log("my_array ", my_array);
    // let j = i - 1

    // console.log("j ", j);
    for(let j = i - 1; j > -1; j--){
        console.log("j ", j);
    }


}