// Write a function that determines the mean (average) of the three scores
// passed to it, and returns the letter associated with that grade.

/*

P:

Input: Three integers, between 0 and 100.
Output: A string

E:

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"


D:

Numbers
Strings


A:

1. Declare variable score and initialize it to the three passed in numbers
added together and then divided by three.
2. Create if statements that check the score against the cases foreach grade.
3. Return the string of the correct letter grade.


C:

*/

function getGrade(num1, num2, num3) {
  let score = (num1 + num2 + num3) / 3;

  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));
