// Write a function that takes a positive integer, n, as an argument and
// logs a right triangle whose sides each have n stars.

/*

P:

Input: A positive integer.
Output: A series of * logged that form a right triangle whose sides are equal
to the input integer.

- The right side and bottom form a 90 degree angle.


E:

triangle(5);

    *
   **
  ***
 ****
*****


D:

Strings


A:

1. Loop as many times as the passed in integer. Start at 1.
2. For each loop, log empty spaces for the integer minus the index.
3. Then log * for the index.


C:

*/

function triangle(number) {
  for (let index = 1; index <= number; index++) {
    let row = ' '.repeat(number - index) + '*'.repeat(index);
    console.log(row);
  }
}

triangle(5);
triangle(9);
