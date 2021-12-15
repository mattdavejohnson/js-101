/*
Write a function that takes a string and returns an object containing the
following three properties:
- the percentage of characters in the string that are lowercase letters
- the percentage of characters that are uppercase letters
- the percentage of characters that are neither
*/

/*

P:

Input: A string
Output: An object with three properties: lowercase, uppercase, neither

Accept a string argument and return an object that contains three properties
that are the percentage of the amount of the string that is lowercase,
uppercase, or neither.


E:

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


D:

Strings
Objects


A:

1. Declare variable 'result' and initialize to object with the three
keys and values of 0.
2. Loop through string argument and check if current place is an uppercase,
lowercase, or neither.
3. Increment the corresponding property in 'result'.
4. Divide each property by string.length to get the percentage. Reassign the
property to the percentage as a string and to two decimal places.
5. Return 'result'.
C:

*/

function letterPercentages(string) {
  let result = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] >= 'a' && string[index] <= 'z') {
      result.lowercase += 1;
    } else if (string[index] >= 'A' && string[index] <= 'Z') {
      result.uppercase += 1;
    } else {
      result.neither += 1;
    }
  }

  result.lowercase = ((result.lowercase / string.length) * 100).toFixed(2);
  result.uppercase = ((result.uppercase / string.length) * 100).toFixed(2);
  result.neither = ((result.neither / string.length) * 100).toFixed(2);

  return result;
}

console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));
