/*
Write a function that rotates the last count digits of a number. To perform
the rotation, move the first of the digits that you want to rotate to the
end and shift the remaining digits to the left.
*/

/*

P:

Input: Two numbers
Output: A number

The first argument is the number to be transformed. The second argument is
the place in the first argument to be moved from it's current place to the
end.


E:

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917


D:

Numbers
Strings
Arrays


A:

1. Declare variable 'strNum' and initialize to first number argument converted
to a string.
2. Declare variable 'firstHalf' and initialize to 'strNum' sliced at 0 and the
negative value of the second argument.
3. Declare variable 'secondHalf' and initialize to 'strNum' sliced at negative
value of the second argument, then split into an array, then remove the first
element and push that element to the end then join.
4. Return 'firstHalf' added 'secondHalf' and converted to a number.


C:

*/

function rotateRightmostDigits(number, place) {
  let strNum = String(number);
  let negPlace = place * -1;
  let firstHalf = strNum.slice(0, negPlace);
  let secondHalf = strNum.slice(negPlace).split('');

  secondHalf.push(secondHalf.shift());
  secondHalf = secondHalf.join('');

  return Number(firstHalf + secondHalf);
}

console.log(rotateRightmostDigits(735291, 1));
console.log(rotateRightmostDigits(735291, 2));
console.log(rotateRightmostDigits(735291, 3));
console.log(rotateRightmostDigits(735291, 4));
console.log(rotateRightmostDigits(735291, 5));
console.log(rotateRightmostDigits(735291, 6));
