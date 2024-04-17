// implementation with loop

let prev1 = 0;
let prev2 = 1;
const round = 18
console.log(prev1);
console.log(prev2);
for(let i = 1; i <= round; i++){
    let newFibo = prev1 + prev2
    console.log(newFibo);
    prev1 = prev2;
    prev2 = newFibo
}

// implementation with recursion

let firstFibo = 0;
let secondFibo = 1;
let count = 2;
console.log(firstFibo);
console.log(secondFibo);

function Fibonacci(prev1, prev2) {

    if(count <= 19){
        let newFibo = prev1 + prev2
        console.log(newFibo);
        prev1 = prev2;
        prev2 = newFibo
        count += 1
        Fibonacci(prev1, prev2)
    }else {
        return
    }
}

Fibonacci(firstFibo, secondFibo);

// implement with recusion find n th of fibonacci

function FindPositionOfFibonacci(n){

    if(n <= 1){
        return n
    }else {
        return FindPositionOfFibonacci(n - 1) + FindPositionOfFibonacci(n - 2)
    }
}


console.log(FindPositionOfFibonacci(19));