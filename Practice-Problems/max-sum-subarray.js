//2
// The maximum sum subarray problem consists in finding the maximum sum
// of a contiguous subsequence in an array of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
//-- should be 6: [4, -1, 2, 1]
// If the array is made up of only negative numbers, return 0 instead.
// An empty array is considered to have zero greatest sum.
// Note that the empty array is also a valid argument array.

/*

P:

Input:
An array

Output:
A number, which is the maximum sum of a contiguous subsequence in
the input array.

Explicit requirements:
- If array is made up of only negative numbers, return 0.
- If array is empty, return 0.
- We want to find the highest value when adding consecutive numbers in the
array.


[-2, 1, -3, 4, -1, 2, 1, -5, 4]
-2, -2 + 1, -2 + 1 + -3, -2 + 1 + -3 + 4,
start at 0 index, slice would be 0, 1
slice 0, 2
slice 0, 3
slice 0, 4
slice 0, array.length

1, 2
1, 3
1, 4
1, array.length

2, 3
2, 4
2, 5
2, array.length

E:

console.log(maxSequence([]) === 0); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true


D:

Array


A:

1. Declare variable 'currentHighest' and initialize to 0.
2. Loop through array argument starting with index 0:
  - Loop through again starting with index + 1:
    - Each iteration, slice the input array at (index, index2) then reduce.
    - If the current value is greater than 'currentHighest', reassign
    'currentHighest' to current value.
3. If 'currentHighest' is less than 0, return 0.
4. Return 'currentHighest'.


C:

*/

function maxSequence(array) {
  let currentHighest = 0;

  for (let index = 0; index < array.length; index += 1) {
    for (let index2 = index + 1; index2 <= array.length; index2 += 1) {
      let currentValue = array
        .slice(index, index2)
        .reduce((accum, curr) => accum + curr, 0);

      if (currentValue > currentHighest) {
        currentHighest = currentValue;
      }
    }
  }

  if (currentHighest < 0) {
    return 0;
  }

  return currentHighest;
}

console.log(maxSequence([]) === 0);
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
console.log(maxSequence([11]) === 11);
console.log(maxSequence([-32]) === 0);
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12);
