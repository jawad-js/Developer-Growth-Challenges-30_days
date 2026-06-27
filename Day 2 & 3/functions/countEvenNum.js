// - [ ] Create a function that counts the number of even numbers in an array.

let countEvenNum = (arr) => {
    let count = 0
    for(let num of arr){
        if(num % 2 === 0){
            count++;
        }
    }
    return count;
}

console.log(countEvenNum([12, 43, 54, 23, 64, 44]));
