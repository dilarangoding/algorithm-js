
const arr = [5, 4, 3, 2, 1, 6];

for (let i = 0; i < arr.length; i++) {
  let min = i;
  // mencari element terkecil dari array
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) {
      min = j;
    }
  }

  // swap element
  if (min != i) {
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
}

console.log(arr);

// [5, 4, 3, 2, 1, 6]
// [1, 4, 3, 2, 5, 6]
// [1, 2, 3, 4, 5, 6]
// [1, 2, 3, 4, 5, 6]
// [1, 2, 3, 4, 5, 6]
// [1, 2, 3, 4, 5, 6]

