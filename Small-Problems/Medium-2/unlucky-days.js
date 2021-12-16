// Write a function that takes a year as an argument and returns the number
// of Friday the 13ths in that year.

/*

P:

Input: A number representing a year after 1752.
Output: A number representing how many Friday the 13ths there were in the
year argument.


E:

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2


D:


A:

1. Iterate over all months of the year argument.
2. For each month, get the day that falls on the 13th.
3. If, the day of the 13th is Friday, add 1 to 'count'.
4. Return 'count'.

1. Declare variable 'count' and initialize to 0.
2. Loop from 0 - 11, representing each month.
  - Declare variable 'date' and initialize to new Date(yearArg, index, 13).
  - if date.getDay() === 5, increment 'count' by 1.
3. Return 'count'.


C:

let date = new Date();
date.setFullYear(1986, 0, 13); // (year, month, day);
date.getDay(); // 0 through 6. 5 === friday

let date = new Date(1986, 0, 13);
date.getDay();

*/

function fridayThe13ths(year) {
  let count = 0;

  for (let index = 0; index <= 11; index += 1) {
    let date = new Date(year, index, 13);

    if (date.getDay() === 5) {
      count += 1;
    }
  }

  return count;
}

console.log(fridayThe13ths(1986));
console.log(fridayThe13ths(2015));
console.log(fridayThe13ths(2017));
