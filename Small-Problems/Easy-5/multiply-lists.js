// Write a function that takes two array arguments, each containing a list
// of numbers, and returns a new array that contains the product of each
// pair of numbers from the arguments that have the same index.

/*

P:

Input: Two arrays of numbers
Output: An array


E:

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]


D:

Arrays
Numbers


A:

1. Declare variable result and initialize to empty array.
2. Loop amount of length of passed in arrays.
  - Push the product of arr1[index] * arr2[index] to result.
3. Return result.


C:

*/

function multiplyList(arr1, arr2) {
  let result = [];

  for (let index = 0; index < arr1.length; index += 1) {
    result.push(arr1[index] * arr2[index]);
  }

  return result;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));
