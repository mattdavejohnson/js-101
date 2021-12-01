// Log all odd numbers from 1 to 99, inclusive, to the console,
// with each number on a separate line.

/*

P:

Input: None.
Output: Logging odd numbers from 1 to 99 to the console.


E:

oddNumbers();
1
3
5
etc.


D:

None.


A:

1. Loop from 1 to 100.
2. Check if number is odd with remainder operator.
  - If odd, log number to the console.

C:

*/

function oddNumbers() {
  for (let index = 1; index < 100; index++) {
    if (index % 2 === 1) {
      console.log(index);
    }
  }
}

oddNumbers();
