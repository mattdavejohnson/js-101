/*

Complete the findNextSquare method that finds the next integral perfect square
after the one passed as a parameter. Recall that an integral perfect square is
an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You
may assume the parameter is non-negative.

PROBLEM:
=================

Input: A number
Output: A number

Explicit Requirements:
- Input number will always be non-negative
- If the input number is not a perfect square, return -1
- A perfect square is an integer such that its square root is also an integer
- Looking for the next perfect square that is higher than the input number


EXAMPLES:
=================

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square


DATA STRUCTURES/ALGORITHM:
=================

Number ==> Number


- START number
- EVALUATE if number argument is a perfect square
  - Find the square root of number argument and check if it is an integer
    - If false, RETURN -1
- ITERATE from input number + 1 until we find next perfect square
  - For each number:
    - DECLARE 'currentSqrt' and initialize to the square root of the current
      number
    - EVALUATE if 'currentSqrt' is an integer
      - If true, RETURN current number

*/

function findNextSquare(number) {
  if (!(Math.sqrt(number) % 1 === 0)) {
    return -1;
  }

  let index = number + 1;

  while (true) {
    let currentSqrt = Math.sqrt(index);

    if (currentSqrt % 1 === 0) {
      return index;
    }

    index += 1;
  }
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
