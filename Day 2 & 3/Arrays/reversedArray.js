// - [ ] Reverse the elements of an array.

let arr = [2, 3, 4, 5, 6, 7];

let start = 0,
  end = arr.length - 1,
  temp;

while (start < end) {
  temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
  (start++, end--);
}

console.log(arr);
