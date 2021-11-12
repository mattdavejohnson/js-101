// Given the data structure, sort the array so that the sub-arrays are ordered
// based on the sum of the odd numbers that they contain.

let arr = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3],
];

let reducer = (previous, current) => {
  if (current % 2 === 1) {
    return previous + current;
  } else {
    return previous;
  }
};

arr.sort((a, b) => {
  return a.reduce(reducer) - b.reduce(reducer);
});

console.log(arr);
