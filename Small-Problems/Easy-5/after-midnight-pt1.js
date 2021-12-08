/* eslint-disable max-lines-per-function */
// Write a function that takes a time using this minute-based format and
// returns the time of day in 24 hour format (hh:mm). Your function
// should work with any integer input.

/*

P:

Input: An integer
Output: A string

A positive number is the time after midnight. A negative number is the time
before midnight.

0 is midnight
1440 minuts in a day

800 is "13:20"
Math.floor(800 / 60) for hours
800 % 60 for minutes

anything above 1440 and you subtract 1440 from it
3000 - 1440 = 1560
1560 - 1440 = 120
Math.floor(120 / 60)

-1437 = -23:57 or  "00:03"

-4231 + 1440 = -2791
-2791 + 1440 = -1351
Math.ceil(-1351 / 60) = -22
-1351 % 60 = -31
-22:31 or "01:29"


E:

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");


D:

Numbers
Strings


A:

1. Declare two variables hours and minutes and initialize both to 0.
2. Declare variable reducedNum and initialze to number argument.
3. Check if number argument is positive or negative or zero.
  - If zero, return "00:00".
  - If positive:
    - Use loop to bring number to 1440 or below by subtracting
    1440 each loop. Once below or equal 1440 reassign reducedNum to value.
    - Reassign hours to Math.floor(reducedNum / 60).
    - Reassign minutes to reducedNum % 60.
    - Return string of hours and minutes formatted properly.
  - If negative:
    - Use loop to bring number to -1440 or above by adding 1440 each
    loop. Once above or equal -1440 reassign reducedNum to value.
    - Reassign hours to 23 + Math.ceil(reducedNum / 60).
    - Reassign minutes to 60 + (reducedNum % 60).
    - Return string of hours and minutes formatted properly.


C:

*/

function timeOfDay(number) {
  let hours = 0;
  let minutes = 0;
  let reducedNum = number;

  if (number === 0) {
    return '00:00';
  } else if (Math.sign(number) === 1) {
    while (reducedNum > 1440) {
      reducedNum -= 1440;
    }

    hours = Math.floor(reducedNum / 60);
    if (hours < 10) {
      hours = `0${hours}`;
    }

    minutes = reducedNum % 60;
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hours}:${minutes}`;
  } else {
    while (reducedNum < -1440) {
      reducedNum += 1440;
    }

    hours = 23 + Math.ceil(reducedNum / 60);
    if (hours < 10) {
      hours = `0${hours}`;
    }

    minutes = 60 + (reducedNum % 60);
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hours}:${minutes}`;
  }
}

console.log(timeOfDay(0) === '00:00');
console.log(timeOfDay(-3) === '23:57');
console.log(timeOfDay(35) === '00:35');
console.log(timeOfDay(-1437) === '00:03');
console.log(timeOfDay(3000) === '02:00');
console.log(timeOfDay(800) === '13:20');
console.log(timeOfDay(-4231) === '01:29');
