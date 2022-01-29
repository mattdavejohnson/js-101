/*

Given a number, Return _The Maximum number_ could be formed from the digits of
the number given.

PROBLEM:
==================

Input: A number
Output: A number

Explicit Requirements:
- Only natural numbers are passed to the function
  - Contain digits 0-9 inclusive
- There can be digit duplications
- Use the same digits from the input number to form the highest possible number
  using the same digits
  - Use each digit once


EXAMPLES:
==================

maxNumber(213) ==> return (321)

maxNumber(7389) ==> return (9873)

maxNumber(63729) ==> return (97632)

maxNumber(566797) ==> return (977665)
Note: Digit duplications are considered when forming the largest

maxNumber(17693284) ==> return (98764321)


DATA STRUCTURES/ALGORITHM:
==================

Number ==> Array ==> Number


- START number
- DECLARE 'split' and initialize to number converted to string and split
- DECLARE 'result' and initialize to sorting 'split' from highest to lowest
- RETURN 'result' joined and coerced to number

*/

function maxNumber(number) {
  let split = String(number).split('');
  let result = split.sort().reverse();

  return Number(result.join(''));
}

console.log(maxNumber(213));
console.log(maxNumber(7389));
console.log(maxNumber(63729));
console.log(maxNumber(566797));
console.log(maxNumber(17693284));
