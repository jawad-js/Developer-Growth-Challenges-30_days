// - [ ] Create a function that returns a new array with all numbers doubled.

let  doubleNumbers = (arr) => {
    let double = arr.map((num) => num * 2);
    return double;
}

console.log( doubleNumbers([23, 45, 55]));
