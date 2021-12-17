/*
Write a function that computes the difference between the square of the sum
of the first count positive integers and the sum of the squares of the first
count positive integers.
*/

/*

P:

Input: A number
Output: A number

First we take the number argument and add together every number starting with
one up to and including the number argument. Then we square that. Then we take
the square of every number from one up to and including the number argument
and square each of those and add them together. Then we take the result of the
first operation and subtract the result of the second operation and return
that.


E:

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150


D:

Arrays


A:

1. Declare variable 'count' and initialize to empty array.
2. Loop with an index of 1 and test case of index <= number argument.
  - Add each index to count.
3. Declare variables 'first' and 'second' and initialize to 0.
4. Reassign 'first' to 'count' reduced and passed to square function.
5. Reassign 'second' to 'count' reduced with the current element passed to
square function and then added to previous value.
6. Return 'first' - 'second'.


C:

*/

function squared(number) {
  return number * number;
}

function sumSquareDifference(number) {
  let count = [];

  for (let index = 1; index <= number; index += 1) {
    count.push(index);
  }

  let first = count.reduce((previous, current) => previous + current);
  first = squared(first);

  let second = count.reduce((previous, current) => {
    return previous + squared(current);
  }, 0);

  return first - second;
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(100));
