/*
Write a function that takes two array arguments, each containing a list of
numbers, and returns a new array containing the products of all combinations
of number pairs that exist between the two arrays. The returned array should
be sorted in ascending numerical order.
*/

function multiplyAllPairs(arr1, arr2) {
  let result = [];

  for (let index = 0; index < arr1.length; index += 1) {
    for (let index2 = 0; index2 < arr2.length; index2 += 1) {
      result.push(arr1[index] * arr2[index2]);
    }
  }

  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
