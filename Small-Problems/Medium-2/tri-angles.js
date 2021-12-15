/*
Write a function that takes the three angles of a triangle as arguments and
returns one of the following four strings representing the triangle's
classification: 'right', 'acute', 'obtuse', or 'invalid'.
*/

/*

P:

Input: Three numbers representing the three angles in a triangle.
Output: A string representing the type of triangle the angles make, or
'invalid' if the angles do not represent a valid triangle.

Rules:

A valid triangle:
  - The sum of the angles must be exaclty 180 degrees.
  - Every angle must be greater than 0.

Types of triangles:
  - Right: one angle is a right angle (exactly 90 degrees).
  - Acute: All three angles are less than 90 degrees.
  - Obtuse: One angle is greater than 90 degrees.


E:

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"


D:

Numbers
Strings


A:

1. Check if any of the angle arguments are 0.
  - If yes, return 'invalid'.
2. Check if the sum of the angle arguments is 180.
  - If no, return 'invalid'.
3. Check what kind of triangle the angle arguments represent.
  - If one angle is 90, return 'right'.
  - If every angle is less than 90, return 'acute'.
  - If one angle is greater than 90, return 'obtuse'.
C:

*/

function triangle(angle1, angle2, angle3) {
  if (!isValidTriangle(angle1, angle2, angle3)) {
    return 'invalid';
  }

  return whatKindOfTriangle(angle1, angle2, angle3);
}

function isValidTriangle(angle1, angle2, angle3) {
  if (angle1 === 0 || angle2 === 0 || angle3 === 0) {
    return false;
  } else if (angle1 + angle2 + angle3 !== 180) {
    return false;
  } else {
    return true;
  }
}

function whatKindOfTriangle(angle1, angle2, angle3) {
  if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
    return 'right';
  } else if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

console.log(triangle(60, 70, 50));
console.log(triangle(30, 90, 60));
console.log(triangle(120, 50, 10));
console.log(triangle(0, 90, 90));
console.log(triangle(50, 50, 50));
