// - [ ] Find the largest number in an array.

let arr = [12, 24, 35, 57, 46];

let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(`found largest number: ${largest}`);

/*
                            Algorighm approach

                            Take the first number.
                                    ↓
                            Assume it's the largest.
                                    ↓
                            Visit every other number.
                                    ↓
                            If the current number is larger,
                            replace the largest.
                                    ↓
                            Continue until the end
*/

const numbers = [24, 56, 12, 54, 62];
let large = Math.max(...numbers)
console.log(large)
/* 
                            Imagine the array is a closed box.

                            numbers
                                │
                                ▼
                            [10, 5, 20]
                            The spread operator opens the box.
                            ...numbers
                                ↓
                            10, 5, 20
                            Then Math.max() receives:
                            Math.max(10, 5, 20)

                            Math.max() returns the largest number from the values you pass to it.

                            ...numbers (...variable) is spread operator
                            The spread operator takes an array and spreads its elements into individual values.
*/


