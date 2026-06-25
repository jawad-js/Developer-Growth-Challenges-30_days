// Create a function `findLargest(a, b)` that returns the larger of two numbers 

let findLargestNum = (num1, num2) => {
    // return Math.max(num1, num2)
    // Math.max is the built-in javascript method the helps compares two values to find the largest number. 
    // or
    let compareValue = (num1 > num2) ? num1 : num2;
    // The ternary operator is a conditional operator that evaluates a single condition to return one of two values.  
    return compareValue;
}

console.log(findLargestNum(45, 89));
