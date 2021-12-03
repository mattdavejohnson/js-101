// Write a function that calculates and returns the index of the first
// Fibonacci number that has the number of digits specified by the
// argument.

/*

P:

Input: An integer greater than or equal to 2.
Output: An integer.

- The return value is the first number in the Fibonacci sequence that is
the same number of digits as the passed in number.


E:

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;


D:

- BigInt
- Arrays


A:

1. Declare variable fib and initialze it to [1, 1].
2. Declare variable strNum and initialize it to an empty string.
3. Loop for the number of times of the passed in integer.
  - Every loop, append a '0' to strNum.
4. Declare variable length and initialize it to strNum.length.
5. Create a loop that pushes the next number in the Fibonacci sequence
to the fib array.
6. Each loop, check if the number just added is the same length as the
passed in number.
  - If yes, break.
  - If no, continue to the next loop iteration.
7. Return fib.length.


C:

*/

function findFibonacciIndexByLength(number) {
  let fib = [1n, 1n];
  let strNum = '';

  for (let index = 1n; index <= number; index += 1n) {
    strNum += '0';
  }

  let length = strNum.length;

  while (true) {
    let firstPrevious = fib[fib.length - 1];
    let secondPrevious = fib[fib.length - 2];
    fib.push(firstPrevious + secondPrevious);
    let current = fib[fib.length - 1];

    if (current.toString().length === length) {
      break;
    }
  }

  return fib.length;
}

console.log(findFibonacciIndexByLength(2n));
console.log(findFibonacciIndexByLength(3n));
console.log(findFibonacciIndexByLength(10n));
console.log(findFibonacciIndexByLength(16n));
console.log(findFibonacciIndexByLength(100n));
console.log(findFibonacciIndexByLength(1000n));
console.log(findFibonacciIndexByLength(10000n));
