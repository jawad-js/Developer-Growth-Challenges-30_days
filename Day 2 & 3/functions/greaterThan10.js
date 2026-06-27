// - [ ] Create a function that returns only numbers greater than 10 from an array.

function greaterThan10(arr) {
    return arr.filter((num) => num > 10);
}

console.log(greaterThan10([5, 8, 12, 18, 26, 35]));
