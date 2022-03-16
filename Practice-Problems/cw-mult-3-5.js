/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we
get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5
below the number passed in. Additionally, if the number is negative, return 0
(for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

PROBLEM:
=================

Input: A number
Output: A number

Explicit Requirements:
- If the number argument is negative, return 0
- If the tested number is a multiple of both 3 and 5, only count it once
  - ex. 15 is a multiple of 3 and 5
- The return value is the sum of all number that are multiples of 3 and 5
- Only number multiples below the number argument should be used

Implicit Requirements:
- If the number argument is 0, return 0


EXAMPLES:
=================

solution(10) ==> [3, 5, 6, 9] ==> 23
solution(20) ==> [3, 5, 6, 9, 10, 12, 15, 18] ==> 78


DATA STRUCTURES/ALGORITHM:
=================

Number ==> Array ==> Number


- START number
- EVAULATE if number argument is negative
  - If true, RETURN 0
- DECLARE 'result' and initialize to empty array
- ITERATE from 3 through one less than number argument
  - For each current index
    - EVALUATE if index is a multiple of 3 or 5
      - If true, ADD index to 'result'
- RETURN the sum of all numbers in 'result'

*/

function solution(number) {
  if (number < 0) {
    return 0;
  }

  let result = [];

  for (let index = 3; index < number; index += 1) {
    if (index % 3 === 0 || index % 5 === 0) {
      result.push(index);
    }
  }

  return result.reduce((acc, curr) => acc + curr, 0);
}

console.log(solution(10));
console.log(solution(20));
console.log(solution(0));
