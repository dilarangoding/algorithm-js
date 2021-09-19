const arr = [5, 3, 2, 6, 1, 4];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);


// RESULT
// [3, 5, 2, 6, 1, 4]
// [3, 2, 5, 6, 1, 4]
// [3, 2, 5, 1, 6, 4]
// [3, 2, 5, 1, 4, 6]
// [2, 3, 5, 1, 4, 6]
// [2, 3, 1, 5, 4, 6]
// [2, 3, 1, 4, 5, 6]
// [2, 1, 3, 4, 5, 6]
// [1, 2, 3, 4, 5, 6]