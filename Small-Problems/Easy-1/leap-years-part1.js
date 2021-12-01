// Write a function that takes any year greater than 0 as input and returns
// true if the year is a leap year, or false if it is not a leap year.

/*

P:

Input: An integer representing any year greater than 0.
Output: Return true if the year is a leap year and false if it is not.


E:

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true


D:

None.


A:

1. Ask user for a year greater than 0 and pass that into function.
2. Check if the year is divisible by 4.
  - If no:
    - Return false.
  - If yes:
    - Check if the year is divisible by 100.
      - If no:
        - Return true.
      - If yes:
        - Check if the year is divisible by 400.
          - If no:
            - Return false.
          - If yes:
            - Return true.


C:

True:
  4, !100
  4, 100, 400

False:
  4, 100, !400

*/

function isLeapYear(year) {
  let four = year % 4 === 0;
  let oneHundred = year % 100 === 0;
  let fourHundred = year % 400 === 0;

  if ((four && !oneHundred) || (four && oneHundred && fourHundred)) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2016));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(240000));
console.log(isLeapYear(240001));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(1752));
console.log(isLeapYear(1700));
console.log(isLeapYear(1));
console.log(isLeapYear(100));
console.log(isLeapYear(400));
