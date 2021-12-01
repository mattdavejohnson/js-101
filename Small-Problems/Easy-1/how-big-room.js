// Build a program that asks the user to enter the length and width of a room
// in meters, and then logs the area of the room to the console in both square
// meters and square feet.

/*

P:

Input: Two numbers, one to represent the length in meters and one to represent
the width in meters.
Output: A string logged to the console.


E:

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).


D:

None.


A:

1. Ask user to enter the length of the room in meters.
2. Ask user to enter the width of the room in meters.
3. Calculate the area of the room:
  - In meters: multiply length * width.
  - In square feet: meters total * 10.7639
4. Log the calculations to the console.


C:

*/

const readline = require('readline-sync');
const SQUARE_FEET_MULTIPLIER = 10.7639;

console.log('Enter the length of the room in meters:');
let length = readline.question();
length = Number(length);

console.log('Enter the width of the room in meters:');
let width = readline.question();
width = Number(width);

let areaInMeters = length * width;
let areaInSquareFeet = areaInMeters * SQUARE_FEET_MULTIPLIER;

console.log(
  `The area of the room is ${areaInMeters.toFixed(
    2
  )} square meters (${areaInSquareFeet.toFixed(2)} square feet).`
);
