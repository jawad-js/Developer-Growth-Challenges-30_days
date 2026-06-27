let numbers = [1, 2, 3, 4, 5, 6, 7];

// Using reduce method
const sum = numbers.reduce((total, currentValue) => {
  return total + currentValue;
});

// without using any method [Standard method] using Standard loop

let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
  sum1 += numbers[i];
}

// Using for of loop
let sum2 = 0
for (let nums of numbers) {
  sum2 += nums;
}

console.log(sum); // using reduce array method
console.log(sum1); // using standard loop
console.log(sum2); // using for of loop

/* 
+= is the addition assignment operator, which adds the right operand to the left variable and assigns the result back to it, (equivalent to x = x + y).
=+ is not a single operator but a combination of the assignment operator (=) and the unary plus operator (+), (equivalent to x = +y).

Example
let a = 10;
let b = 5;

+= adds b to a and stores the result in a
a += b;
console.log(a); // Output: 15

Reset a
a = 10;

=+ casts b to a number and assigns it to a (ignoring previous value)
a =+ b;
console.log(a); // Output: 5
*/