// Given the following data structure, return a new array with the same
// structure, but with the values in each subarray in ascending order

let arr = [
  ['b', 'c', 'a'],
  [2, 11, -3],
  ['blue', 'black', 'green'],
];

// arr is not mutated in this solution
let sortedArray = arr.map((inner) => {
  return inner.slice().sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });
});

console.log(sortedArray);
console.log(arr);
