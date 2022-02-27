/*
Non-Even Substrings

Given a string of integers, return the number of odd-numbered substrings
that can be formed.


PROBLEM:
=================

Input: A string of integers
Output: A number

Explicit Requirements:
- Single digit numbers that are odd count towards the total
- If there are multiple equal single digit odd numbers, count all instances
  of the number towards the total
- The input string will only contain number digits
- If there are no odd numbered substrings that can be formed, return 0


EXAMPLES:
=================

"1341" ==> 7, for the substrings [1, 1, 3, 13, 41, 341, 1341]


DATA STRUCTURES/ALGORITHM:
=================

String ==> Array ==> Number


- START string
- DECLARE 'allSubstrings' and initialize to empty array
- ADD all possible substrings of string argument to 'allSubstrings'
  - ITERATE through each digit in string argument
    - ITERATE from outer index + 1 to string length
      - ADD the slice of string at outer index and inner index
- DECLARE 'oddSubstrings' and initialize to filtering 'allSubstrings' and
  selecting only the elements that are odd
- RETURN 'oddSubstrings' length

*/

function solve(string) {
  let allSubstrings = [];

  for (let outerIdx = 0; outerIdx < string.length; outerIdx += 1) {
    for (
      let innerIdx = outerIdx + 1;
      innerIdx <= string.length;
      innerIdx += 1
    ) {
      allSubstrings.push(string.slice(outerIdx, innerIdx));
    }
  }

  let oddSubstrings = allSubstrings.filter((num) => Number(num) % 2 === 1);

  return oddSubstrings.length;
}

console.log(solve('1341'));
console.log(solve('134721'));
console.log(solve('1347231'));

// Alternate solution
function oddSubs(string) {
  let count = 0;

  for (let index = 0; index < string.length; index += 1) {
    let current = Number(string[index]);

    if (current % 2 === 1) {
      count += index + 1;
    }
  }

  return count;
}

console.log(oddSubs('1341'));
console.log(oddSubs('134721'));
console.log(oddSubs('1347231'));
