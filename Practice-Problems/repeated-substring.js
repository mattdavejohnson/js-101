/*

P

Given a non-empty string, check if it can be constructed by taking a substring
of it and appending multiple copies of the substring together. You may assume
the given string consists of English lowercase letters only.


Input: A string
Output: A boolean

Rules:
- Take in a non-empty string of English only lowercase letters
- Test if any substring of the given string can be combined multiple times to
form the given string


E

console.log(repeatedSubstringPattern('abab') === true);
console.log(repeatedSubstringPattern('aba') === false);
console.log(repeatedSubstringPattern('aabaaba') === false);
console.log(repeatedSubstringPattern('abaababaab') === true);
console.log(repeatedSubstringPattern('abcabcabcabc') === true);


D

Array


A

- Transform string argument into an array of all possible substrings
- Loop through array. For each substring:
  - While current substring.length < string.length
    - Append a copy of the substring to itself
    - Check if it is equal to string argument
      - If yes, return true
      - If no, continue
- Return false

1. Declare variable 'substringArray' and initialize to empty array.
2. Loop through string argument
  - Slice current portion of string and add to 'substringArray'
3. Loop through 'substringArray'
  - Declare variable 'compare' and initialize to string
  - While compare.length < string.length
    - Append string to 'compare'
    - Check if 'compare' === string
      - If yes, return true
      - If no, continue
4. Return false


Step 2: Transform string into an array of all substrings

1. Loop from index = 0 until reaching string.length - 1.
  - Loop from secondIndex = index + 1 until reaching string.length.
    - Push the value of string.slice(index, secondIndex) to 'substringArray'


C

*/

function allSubstrings(string) {
  let substringArray = [];

  for (let index = 0; index < string.length; index += 1) {
    for (
      let secondIndex = index + 1;
      secondIndex <= string.length;
      secondIndex += 1
    ) {
      substringArray.push(string.slice(index, secondIndex));
    }
  }

  return substringArray;
}

function repeatedSubstringPattern(string) {
  let substringArray = allSubstrings(string);

  for (let index = 0; index < substringArray.length; index += 1) {
    let compare = substringArray[index];

    while (compare.length < string.length) {
      compare += compare;

      if (compare === string) {
        return true;
      }
    }
  }

  return false;
}

console.log(repeatedSubstringPattern('abab') === true);
console.log(repeatedSubstringPattern('aba') === false);
console.log(repeatedSubstringPattern('aabaaba') === false);
console.log(repeatedSubstringPattern('abaababaab') === true);
console.log(repeatedSubstringPattern('abcabcabcabc') === true);
