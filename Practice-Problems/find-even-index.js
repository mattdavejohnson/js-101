/*

P

Given an array of integers, find an index N where the sum of the integers to
the left of N is equal to the sum of the integers to the right of N. If no
index makes this happen, return -1.

Input: An array of integers
Output: A number

Rules:
- Find index N, where sum of integers to the left equals sum of index to the
right
- If no index exists where this is true, return -1
- Empty arrays are equal to 0
- The current index value is not added to either the left or right side.


E

[1, 2, 3, 4, 3, 2, 1]
returns 3, because at index 3, the left side [1, 2, 3] and
right side [3, 2, 1] sums both equal 6.

[20, 10, -80, 10, 10, 15, 35]
returns 0, because at index 0, the left side [] and
right side [10, -80, 10, 10, 15, 35] sums both equal 0.

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3);


D

Arrays


A

- Declare two variables 'left' and 'right'
- Iterate over array arg, for each index
  - slice left of index and save to 'left'
  - slice right of index and save to 'right'
  - compare 'left' and 'right'
    - if equal, return current index
    - if unequal, continue
- Return -1

1. For loop starting at 0, ending at array.length. For current index:
  - Declare 'left' and init to array.slice(0, index)
  - Declare 'right' and init to array.slice(index + 1, array.length)
    - If 'left' or 'right' is empty array, reassign it to 0
    - Else, reduce
  - Compare 'left' and 'right'
    - if equal, return index
    - if unequal, continue
3. Return -1


C

*/

function findEvenIndex(array) {
  for (let index = 0; index < array.length; index += 1) {
    let left = array.slice(0, index);
    let right = array.slice(index + 1, array.length);

    let leftSum = left.reduce((acc, curr) => acc + curr, 0);
    let rightSum = right.reduce((acc, curr) => acc + curr, 0);

    if (leftSum === rightSum) {
      return index;
    }
  }

  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3);
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1);
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1);
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3);
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0);
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6);
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3);
