// Write a function that takes an array of numbers and returns an array
// with the same number of elements, but with each element's value being
// the running total from the original array.

/*

P:

Input: An array
Output: An array

Each array element will be the total of adding the previous array element
with the current array element. The first element in the array is the same.


E:

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []


D:

Arrays
Numbers


A:

1. Declare variable total and initialze to empty array.
2. Loop through passed in array.
  - If index is 0, push array[0] to total.
  - Else push array[currentIndex] + total[currentIndex - 1];
3. Return total.


C:

*/

function runningTotal(array) {
  let total = [];

  for (let index = 0; index < array.length; index += 1) {
    if (index === 0) {
      total.push(array[index]);
    } else {
      total.push(array[index] + total[index - 1]);
    }
  }

  return total;
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));
