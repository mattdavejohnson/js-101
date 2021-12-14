// Write a function that takes an integer as an argument and returns the
// maximum rotation of that integer.

/*

P:

Input: A number
Output: A number with the maximum rotation of the original number.

Take the leftmost digit of the number argument and place it at the rightmost
place. Then, keep the leftmost digit fixed and take the next digit and place
that at the rightmost place. Then, keep the first two digits in place and
take the next digit and place it at the right most place. Continue this pattern
until you are at the last two digits and you swap those.


E:

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845


D:

Numbers
Strings
Arrays


A:

1. Declare variable 'strNum' and initialize to number argument converted to
string.
2. Declare 'result' and initialze to 'strNum'.
3. Loop through length - 1.
  - Declare variable 'firstHalf' and initialize to result.slice(0, index);
  - Declare variable 'secondHalf' and initialize to result.slice(index);
  - Reassign result to firstHalf + rotateString(secondHalf).
4. Return result converted to number.


C:

*/

function rotateString(string) {
  return string.slice(1) + string[0];
}

function maxRotation(number) {
  let strNum = String(number);
  let result = strNum;

  for (let index = 0; index < strNum.length - 1; index += 1) {
    let firstHalf = result.slice(0, index);
    let secondHalf = result.slice(index);

    result = firstHalf + rotateString(secondHalf);
  }

  return Number(result);
}

console.log(maxRotation(735291));
console.log(maxRotation(3));
console.log(maxRotation(35));
console.log(maxRotation(105));
console.log(maxRotation(8703529146));
