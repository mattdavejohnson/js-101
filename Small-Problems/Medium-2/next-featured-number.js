/* eslint-disable max-lines-per-function */
/*
Write a function that takes an integer as an argument and returns the next
featured number greater than the integer. Issue an error message if there is
no next featured number.

A featured number (something unique to this exercise) is an odd number that
is a multiple of 7, with all of its digits occurring exactly once each.
*/

/*

P:

Input: A number
Output: A number larger than the number argument that is 'featured' or an
error string if there is no higher 'featured' number.

A featured number:
  - Odd
  - Multiple of 7
  - All its digits occur exactly once


E:

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those
                            requirements."


D:


A:

1. Check if number argument is larger than largest possible featured number.
  - If yes, return error message.
2. Loop starting at the number after number argument and going until largest
possible.
  - If current number is not odd, continue.
  - If odd, if current number is not divisible by 7, continue.
  - If odd and divisible by 7, check if all digits only occur once.
    - If no, continue.
    - If yes, reassign number argument to this number and break.
3. Return number argument.


Check if all digits appear once:

1. Convert number to a string and split.
2. Declare 'test' variable and initialize to empty array.
3. Loop through each element of array.
  - If element exists in 'test' array, return false.
  - Push element to 'test'.
4. Return true.


C:

*/

function featured(number) {
  const LARGEST_POSSIBLE = 9876543201;

  if (number >= LARGEST_POSSIBLE) {
    return 'There is no possible number that fulfills those requirements.';
  }

  for (let index = number + 1; index <= LARGEST_POSSIBLE; index += 1) {
    if (index % 2 === 0) {
      continue;
    } else if (index % 7 !== 0) {
      continue;
    } else if (digitsAppearOnce(index)) {
      number = index;
      break;
    }
  }

  return number;
}

function digitsAppearOnce(number) {
  let splitArr = String(number).split('');
  let test = [];

  for (let index = 0; index < splitArr.length; index += 1) {
    let current = splitArr[index];
    if (test.includes(current)) {
      return false;
    }

    test.push(current);
  }

  return true;
}

console.log(featured(12));
console.log(featured(20));
console.log(featured(21));
console.log(featured(997));
console.log(featured(1029));
console.log(featured(999999));
console.log(featured(999999987));
console.log(featured(9876543186));
console.log(featured(9876543200));
console.log(featured(9876543201));
