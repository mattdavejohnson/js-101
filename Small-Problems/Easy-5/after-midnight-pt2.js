// Write two functions that each take a time of day in 24 hour format, and
// return the number of minutes before and after midnight, respectively.
// Both functions should return a value in the range 0..1439.

/*

P:

Input: A string
Output: a number


E:

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

after 12:34
60 * 12 = 720
720 + 34 = 754

before 12:34
take after which is 754 and subtract 1440
1440 - 754 = 686

D:

Strings
Numbers


A:

After Midnight
1. Declare variable hours and initialize to string argument sliced at 0, 2 and
converted to a number.
2. Declare variable minutes and initalize to string argument sliced at 3 and
converted to a number.
3. Declare variable result and inialize to hours * 60 + minutes.
4. Return result.

Before Midnight
1. Declare variable result and initialize 1440 minus a call to after midnight
with the number argument passed in.
2. Return result.


C:

*/

function afterMidnight(string) {
  let hours = Number(string.slice(0, 2));
  let minutes = Number(string.slice(3));
  let result = hours * 60;
  result += minutes;

  if (result === 0 || result === 1440) {
    return 0;
  }

  return result;
}

function beforeMidnight(string) {
  if (afterMidnight(string) === 0) {
    return 0;
  }

  let result = 1440 - afterMidnight(string);
  return result;
}

console.log(afterMidnight('00:00') === 0);
console.log(beforeMidnight('00:00') === 0);
console.log(afterMidnight('12:34') === 754);
console.log(beforeMidnight('12:34') === 686);
console.log(afterMidnight('24:00') === 0);
console.log(beforeMidnight('24:00') === 0);
