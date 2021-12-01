// Write a function that computes the sum of all numbers between 1 and some
// other number, inclusive, that are multiples of 3 or 5.

/*

P:

Input: An integer greater than 1.
Output: An integer.


E:

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168


D:

None.


A:

1. Pass in an integer greater than 1.
2. Declare a total variable and initialize it to 0.
3. Loop through every number from 1 to the supplied integer.
  - If the number is a multiple of 3 or 5:
    - Add the number to total variable.
4. Return total.


C:

*/

function multisum(number) {
  let total = 0;

  for (let index = 1; index <= number; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      total += index;
    }
  }

  return total;
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));
