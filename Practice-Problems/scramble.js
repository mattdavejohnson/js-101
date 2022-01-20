/*

P

Write function scramble(str1, str2) that returns true if a portion of str1
characters can be rearranged to match str2, otherwise return false.

Input: Two strings
Output: Boolean

Rules:
- Take in two strings
- Check if str2 letters are all present in str1 in the same amount
  - If two of same letter, there must be two in str1
- If true, return true, else false.


E

str1 = 'rkqodlw' and str2 = 'world' ==> return true
str1 = 'cedewaraaossoqqyt' and str2 = 'codewars' ==> return true
str1 = 'katas' and str2 = 'steak' ==> return false


D

Arrays


A

- Split both strings into arrays of single character elements
- Loop through str2
  - For each element, check if it exists in str1
    - If yes, remove that element from str1 and continue
      - use includes()
      - find index in str1 where element exists
      - use splice() to remove that element
    - If no, return false
- Return true


C

*/

function scramble(str1, str2) {
  str1 = str1.split('');
  str2 = str2.split('');

  for (let index = 0; index < str2.length; index += 1) {
    let currentLetter = str2[index];

    if (str1.includes(currentLetter)) {
      let arrIndex = str1.indexOf(currentLetter);
      str1.splice(arrIndex, 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(scramble('rkqodlw', 'world') === true);
console.log(scramble('cedewaraaossoqqyt', 'codewars') === true);
console.log(scramble('katas', 'steak') === false);
console.log(scramble('scriptjava', 'javascript') === true);
console.log(scramble('scriptingjava', 'javascript') === true);
