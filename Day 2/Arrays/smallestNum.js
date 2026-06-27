let arr = [46, 35, 24, 12];

let smallest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}
console.log(`found smallest number: ${smallest}`);