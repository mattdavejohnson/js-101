/*
The year of 2013 is the first year after the old 1987 with only distinct digits.

Now your task is to solve the following problem: given a year number, find the
minimum year number which is strictly larger than the given one and has only
distinct digits.

PROBLEM:
==================

Input: A number
Output: A number

Explicit Requirements:
- Find the next number that is made up of only distinct digits
- Input will be between 1000 and 9000


EXAMPLES:
==================

1000 ==> 1023
2015 ==> 2016
3010 ==> 3012


DATA STRUCTURE/ALGORITHM:
==================

Number ==> Array ==> Number


- Increment number argument by 1
- Check if all digits are distinct
  - If yes, return current number
  - If no, repeat first 2 steps


- START number
- ITERATE from number + 1 to 9100, adding 1 each iteration
  - EVALUATE if current index has distinct digits
    - If true, RETURN current index


Check if number has all distinct digits:

Input: Number
Output: Boolean

- START number
- DECLARE 'numArr' and initialize to number split into an array
- ITERATE through 'numArr'
  - For each current number, check if it is equal to any of the other numbers
    - If true, RETURN false
- RETURN true

*/

function distinctDigits(number) {
  let numArr = String(number).split('');

  for (let outer = 0; outer < numArr.length; outer += 1) {
    for (let inner = outer + 1; inner < numArr.length; inner += 1) {
      if (numArr[outer] === numArr[inner]) {
        return false;
      }
    }
  }

  return true;
}

function distinctDigitYear(number) {
  for (let index = number + 1; index < 9100; index += 1) {
    if (distinctDigits(index)) {
      return index;
    }
  }

  return -1;
}

console.log(distinctDigitYear(1000));
console.log(distinctDigitYear(2015));
console.log(distinctDigitYear(3010));
