/*
Write a function that takes an array as an argument and returns an array that
contains two elements, each of which is an array. Put the first half of the
original array elements in the first element of the return value, and put the
second half in the second element. If the original array contains an odd
number of elements, place the middle element in the first half array.
*/

/*

P:

Input: An array
Output: Two arrays

Return two arrays, each with the first half and second half of the passed in
array elements. If passed in array is odd length, place middle element in
first array.


E:

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]


D:

Arrays
Numbers


A:

1. Declare variable result and initialize to an empty array.
2. Declare two variables, first and second and initialze each to empty arrays.
3. Declare variable length and initialze to passed in array.length.
4. If length is even:
  - Reassign first variable to slicing passed in array up to half of length.
  - Reassign second variable to slicing remaining elements in passed in array.
  - Return result with first and second as element 0 and 1.
5. If length is odd:
  - Declare variable halfPlusOne and initialize to Math.floor(length / 2) + 1;
  - Reassign first variable to slicing passed in array up to halfPlusOne.
  - Reassign second variable to slicing remaning elements in passed in array.
  - Return result with first and second as element 0 and 1.


C:

*/

function halvsies(array) {
  let first = [];
  let second = [];
  let length = array.length;

  if (length % 2 === 0) {
    first = array.slice(0, length / 2);
    second = array.slice(length / 2);
  } else {
    let halfPlusOne = Math.floor(length / 2) + 1;
    first = array.slice(0, halfPlusOne);
    second = array.slice(halfPlusOne);
  }

  let result = [first, second];
  return result;
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));
