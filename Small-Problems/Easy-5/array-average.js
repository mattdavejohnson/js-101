// Write a function that takes one argument, an array of integers, and returns
// the average of all the integers in the array, rounded down to the integer
// component of the average.

function average(array) {
  let total = array.reduce((a, b) => a + b);
  return Math.floor(total / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));
