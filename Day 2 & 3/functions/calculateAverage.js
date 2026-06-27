// - [ ] Create a function that returns the average of all numbers in an array.

let calculateAverage = (arr) => {
    if (arr.length === 0) {
        return 0; // or null
    }
    let sum = 0; // fisrt initialize the value 0, because i don't know what is the arr of the average.
    for (let num of arr){ //loop iterate
        sum += num; //stored the sum of arr into average.
    }
    return sum / arr.length; //divide it to make it half/average.
}

console.log(calculateAverage([12, 45, 65, 75, 89])) //log it 

/* What happened if i log an empty array in a function

console.log(calculateAverage([]));

Step-by-step
arr = []
sum = 0
The for...of loop doesn't run because the array is empty.
arr.length is 0.
The function returns:
0 / 0

Output: NaN (Not a Number)

console.log(0 / 0); // NaN

Handle the edge case

function calculateAverage(arr) {
    if (arr.length === 0) {
        return 0; // or null
    }
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

 Lesson: Always think about edge cases like an empty array ([]), because they can produce unexpected results such as NaN
*/