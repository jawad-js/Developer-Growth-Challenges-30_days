// - [ ] Create a function that counts the number of odd numbers in an array.

let countOddNum = (arr) => {
    let count = 0
    for(let num of arr){
        if(num % 2 !== 0){ // num % 2 === 1
            count++;
        }
    }
    return count;
}

console.log(countOddNum([12, 43, 64, 33, 78]));
