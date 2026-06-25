// Create a function `isEven(num)` that returns whether a number is even or odd.

function isEven(num){
    // if(num % 2 == 0) {
    //     console.log(`The below number is even`);    
    // }
    // else {
    //     console.log(`The below number is odd`);
    // } or
   const isEven = (num % 2 == 0) ? `The ${num} number is even` : `The ${num} number is odd`
   return isEven;
        
}

console.log(isEven(57));
