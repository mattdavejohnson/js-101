// Write a function that takes a floating point number representing an angle
// between 0 and 360 degrees and returns a string representing that angle in
// degrees, minutes, and seconds.

/*

P:

Input: A floating point number between 0 and 360
Output: A string


E:

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"


D:

Numbers
Strings


A:

To convert decimal degrees to dms:
  1. For degrees use the whole number part of the decimal.
  2. For minutes multiply the remaining decimal by 60 and use the whole number
  part as minutes.
  3. For seconds multiply the remaining decimal from minutes by 60.


1. Declare variable degrees and initialize to passed in number, floored.
2. Declare variable minutes and initialize to passed in number minus degrees
multiplied by 60, floored.
3. Declare variable seconds and initialze to minutes % 1 multiplied by 60.
4. Output correct string with minutes and seconds floored.


C:

*/

function dms(number) {
  const DEGREE = '\xB0';
  let degrees = Math.floor(number);
  let minutes = (number - degrees) * 60;
  let seconds = (minutes % 1) * 60;

  return `${degrees}${DEGREE}${addZeroes(Math.floor(minutes))}'${addZeroes(
    Math.floor(seconds)
  )}"`;
}

function addZeroes(number) {
  let numString = String(number);
  if (numString.length < 2) {
    return '0' + numString;
  } else {
    return numString;
  }
}

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773));
console.log(dms(0));
console.log(dms(360));
