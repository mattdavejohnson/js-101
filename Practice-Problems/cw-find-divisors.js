/*

Create a function named divisors/Divisors that takes an integer n > 1 and
returns an array with all of the integer's divisors(except for 1 and the
number itself),from smallest to largest. If the number is prime return the
string '(integer) is
prime'

PROBLEM:
=================

Input: A number
Output: An array if divisors, a string if prime

Explicit Requirements:
- The input number is greater than one
- The number 1 and the input number do not count as divisors
- If no divisors, return a string stating number is prime
- The return array with divisors should be sorted smallest to largest


EXAMPLES:
=================

divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"


DATA STRUCTURES/ALGORITHM
=================

Number ==> Array ==> Array/String

- START number
- DECLARE 'result' and initialize to empty array
- ITERATE from 2 until number, not including number
  - For current index, check if it is a divisor of number
  - If true, add current index to 'result'
- EVALUATE if 'result' is empty
  - If true, return string
- RETURN 'result'

*/

function divisors(number) {
  let result = [];

  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      result.push(index);
    }
  }

  if (result.length === 0) {
    return `${number} is prime`;
  }

  return result;
}

console.log(divisors(12));
console.log(divisors(25));
console.log(divisors(13));
