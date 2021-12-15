/* eslint-disable max-lines-per-function */
/*
Write a function that takes the lengths of the three sides of a triangle as
arguments and returns one of the following four strings representing the
triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.
*/

/*

P:

Input: Three numbers, representing the sides of a triangle.
Output: A string, representing the type of triangle, or 'invalid' if the
numbers do not form a valid triangle.

Rules:

A valid triangle:
  - The sum of the lengths of the two shortest sides must be greater than
    the length of the longest side.
  - Every side must have a length greater than 0.

Types of triangles:
  - Equilateral: All three sides are of equal length.
  - Isosceles: Two sides are of equal length, the third is different.
  - Scalene: All three sides are of different lengths.


E:

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"


D:

Numbers
Strings
Arrays


A:

1. Check if any of the three arguments are 0.
  - If yes, return 'invalid'.
2. Check if all three arguments are the same.
  - If yes, return 'equilateral'.
3. Check if two of the three arguments are the same.
  - If yes, check if the sum of the two smallest arguments is greater than the
    third argument.
      - If yes, return 'isosceles'.
      - If no, return 'invalid'.
4. Check if all three arguments are different.
  - If yes, check if the sum of the two smallest arguments are greater than the
    third argument.
      - If yes, return 'scalene'.
      - If no, return 'invalid'.


C:

*/

function triangle(side1, side2, side3) {
  let sidesArr = [side1, side2, side3].sort((a, b) => a - b);

  if (sidesArr.includes(0)) {
    return 'invalid';
  } else if (sidesArr[0] === sidesArr[1] && sidesArr[0] === sidesArr[2]) {
    return 'equilateral';
  } else if (sidesArr[0] === sidesArr[1] || sidesArr[1] === sidesArr[2]) {
    if (sidesArr[0] + sidesArr[1] > sidesArr[2]) {
      return 'isosceles';
    } else {
      return 'invalid';
    }
  } else if (sidesArr[0] + sidesArr[1] > sidesArr[2]) {
    return 'scalene';
  } else {
    return 'invalid';
  }
}

console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 4, 5));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));
