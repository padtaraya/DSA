const arrayData = [5, 6, 7, 8, 3, 2]
let minVal = arrayData[0]
for (let i in arrayData) {

    if (minVal > arrayData[i]) {
        minVal = arrayData[i]
    }
}
console.log(minVal);


