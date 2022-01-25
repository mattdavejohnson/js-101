/*

P

Given two strings, find out if there is a substring that appears in both
strings. Return true if you find a substring that appears in both, false if
you do not. A substring in this problem is longer than one letter.

Input: Two strings
Output: A boolean

Rules:
- Given two strings
- Check if there is a substring that appears in both strings
  - A substring must be at least two letters
- Ignore case of letters
- If one of the inputs is an empty string, return false
- A substring of numbers is valid


E

console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', 'Home') === true);
console.log(substringTest('Something', '') === false);
console.log(substringTest('BANANA', 'banana') === true);
console.log(substringTest('1234567', '541265') === true);


D

Array


A

- Split each string into an array of lowercase letters or numbers
- Find each substring in each array
- Loop through shortest array of substrings
  - Check if each substring exists in other array of substrings
  - If a match happens, return true
- Return false


1. Check if either argument is empty string
  - If one is empty, return false
2. Check if arguments are equal when lowercase
  - If args equal, return true
3. Declare 'lowToHigh' and init to array of the inputs sorted by length
4. Declare 'str1Substrings' and init to all the substrings in 'lowToHigh'[0]
5. Declare 'str2Substrings' and init to all the substrings in 'lowToHigh'[1]
6. Loop through 'str1Substrings' and for each element:
  - Check if current element exists in 'str2LettersArray'
    - If true, return true
7, Return false


Finding all substrings in a string:

1. Take in single string argument
2. Declare 'substrings' and init to empty array.
3. Make all letters lowercase
4. Declare 'lettersArray' and init to string arg split
5. Loop through 'lettersArray' starting at 0 and ending at < length - 1
  - Create inner loop starting at firstIndex + 2 and ending at <= length
    - Slice at current index1 and index2, join and push to 'substrings'
6. Return 'substrings'


C

*/

function getSubstrings(string) {
  let substrings = [];
  let lettersArray = string.toLowerCase().split('');

  for (
    let firstIndex = 0;
    firstIndex < lettersArray.length - 1;
    firstIndex += 1
  ) {
    for (
      let secondIndex = firstIndex + 2;
      secondIndex <= lettersArray.length;
      secondIndex += 1
    ) {
      substrings.push(lettersArray.slice(firstIndex, secondIndex).join(''));
    }
  }

  return substrings;
}

function substringTest(string1, string2) {
  if (string1.length === 0 || string2.length === 0) {
    return false;
  } else if (string1.toLowerCase() === string2.toLowerCase()) {
    return true;
  }

  let lowToHigh = [string1, string2].sort((a, b) => a.length - b.length);
  let str1Substrings = getSubstrings(lowToHigh[0]);
  let str2Substrings = getSubstrings(lowToHigh[1]);

  for (let index = 0; index < str1Substrings.length; index += 1) {
    let currentSubstring = str1Substrings[index];

    if (str2Substrings.includes(currentSubstring)) {
      return true;
    }
  }

  return false;
}

console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', 'Home') === true);
console.log(substringTest('Something', '') === false);
console.log(substringTest('BANANA', 'banana') === true);
console.log(substringTest('1234567', '541265') === true);
