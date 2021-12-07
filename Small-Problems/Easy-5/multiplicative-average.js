// Write a function that takes an array of integers as input, multiplies
// all of the integers together, divides the result by the number of entries
// in the array, and returns the result as a string with the value rounded
// to three decimal places.

/*

P:

Input: An array of integers
Output: A string

Multiply all integers together, divide by the length of array, and return
the result as a string rounded to three decimal places.


E:

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"


D:

Arrays
Numbers
Strings


A:

1. Declare variable total and initialze to passed in array reduced.
2. Divide total by length and show 3 decimal places.
3. Return total converted to string.


C:

*/

function multiplicativeAverage(array) {
  let total = array.reduce((previous, current) => {
    return previous * current;
  }, 1);

  total /= array.length;

  return total.toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));
