// Write a function that takes a year as input and returns the century.

/*

P:

Input: An integer
Output: A string

Return a string of the century represented by the input number.


E:

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"


D:

Integers
Strings


A:

century function
1. Declare variable century and initialize it to a call to Math.floor with
the year argument divided by 100 passed in as the argument. Then add one
to the return value.
2. Check if the passed in year % 100 is equal to 0.
  - If yes, subtract one from century.
3. Return century converted to a string + the correct suffix.

suffix function
1. Check if passed in number % 100 when passed into catchWithTH function
returns true.
  - If yes, return 'th'.
2. Declare lastDigit variable and initialize it to passed in number % 10.
3. Create a switch statement with lastDigit as the test
  - If 1: return 'st'.
  - If 2: return 'nd'.
  - If 3: return 'rd'.
  - Default: return 'th'.

catchWithTh function
1. Return the boolean value of checking the equality of the passed in number
being equal to 11, 12, or 13.
  - If it is equal to one of those numbers, return true.


1. Convert number to string and check length.
  - If length = 1 or 2, return '1st'.
2. Declare century variable and initialize it to the string sliced at 0 and
length - 2. Convert to number.
  - Add one to century varible for the correct century.
  - Convert back to string.
3. To get the correct ending, check the character value of century at the
length - 1 element.
  - If it is 1, 2, or 3, those are case specific.
    - If 1, return century + 'st'.
    - If 2, return century + 'nd'.
    - If 3, return century + 'rd'.
  - Any other value is 'th'.
    - Return century + 'th'

C:

*/

function century(year) {
  let century = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    century -= 1;
  }

  return String(century) + suffix(century);
}

function suffix(century) {
  if (catchWithTh(century % 100)) {
    return 'th';
  }

  let lastDigit = century % 10;

  switch (lastDigit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}

// function century(year) {
//   let strYear = String(year);
//   let century = Number(strYear.slice(0, strYear.length - 2)) + 1;
//   let strCentury = String(century);
//   let firstTwo = strYear.slice(strYear.length - 2);

//   if (strYear.length <= 2) {
//     return '1st';
//   } else if (strYear.length === 3) {
//     switch (firstTwo) {
//       case '00':
//         return `${century - 1}th`;
//       case '01':
//         return `${strCentury}st`;
//       case '02':
//         return `${strCentury}nd`;
//       case '03':
//         return `${strCentury}rd`;
//       default:
//         return `${strCentury}th`;
//     }
//   } else {
//     switch (firstTwo) {
//       case '00':
//         return `${century - 1}th`;
//       case '01':
//         return `${strCentury}st`;
//       case '02':
//         return `${strCentury}nd`;
//       case '03':
//         return `${strCentury}rd`;
//       default:
//         return `${strCentury}th`;
//     }
//   }
// }

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1052));
console.log(century(1127));
console.log(century(11201));
