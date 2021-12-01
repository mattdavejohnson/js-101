// Log all even numbers from 1 to 99, inclusive, to the console,
// with each number on a separate line.

/*

P:

Input: None.
Output: Logging even numbers from 1 to 99 to the console.


E:

evenNumbers();
2
4
6
etc.


D:

None.


A:

1. Loop from 1 to 99.
2. Check if number is even with remainder operator.
  - If even, log number to the console.

C:

*/

function evenNumbers() {
  for (let index = 1; index < 100; index++) {
    if (index % 2 === 0) {
      console.log(index);
    }
  }
}

evenNumbers();
