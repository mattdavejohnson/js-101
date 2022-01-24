/*

P

Given an array of strings, return an array of all characters that show up
in all strings within the given array, including duplicates. All letters are
lowercase.

Input: An array of strings
Output: An array of letters

Rules:
- Given an array of strings
- Find every letter that is included in all strings, including duplicates.
- If no letters are the same, return an empty array.


E

'a', 'b' ==> [];
'ab', 'bc' ==> ['a'];
'bella', 'label', 'roller' ==> ['e', 'l', 'l'];


D

Array


A

- Declare result array
- Split all strings into subarray of arrays of letters
- Sort by shortest
- Remove shortest to loop over
  - Check if current letter is included in every other string
  - If yes, add current letter to result array
    - Delete current letter from every other string
- Return result array


1. Declare 'result' init to empty array.
2. Declare 'split' init to map of split strings.
3. Sort 'split' least length to greatest.
4. Declare 'compare' init to splice of first element in 'split'
5. Loop through 'compare'
  - Check if current letter is included in every array in 'split'
    - If yes, push current letter to 'result'
    - Remove current letter from every array in 'split'
6. Return 'result'


C

*/

// Check if passed in letter is in every subarray of array
function letterInAll(letter, array) {
  for (let index = 0; index < array.length; index += 1) {
    if (!array[index].includes(letter)) {
      return false;
    }
  }

  return true;
}

function commonChars(array) {
  let result = [];
  let split = array.map((word) => word.split(''));
  split.sort((a, b) => a.length - b.length);
  let compare = split.splice(0, 1)[0];

  for (let index = 0; index < compare.length; index += 1) {
    let currentLetter = compare[index];

    if (letterInAll(currentLetter, split)) {
      result.push(currentLetter);

      for (let secondIndex = 0; secondIndex < split.length; secondIndex += 1) {
        let currentWordArray = split[secondIndex];
        let letterIndex = currentWordArray.indexOf(currentLetter);

        currentWordArray.splice(letterIndex, 1);
      }
    }
  }

  return result;
}

console.log(commonChars(['a', 'b']));
console.log(commonChars(['ab', 'bc']));
console.log(commonChars(['bella', 'label', 'roller']));
console.log(commonChars(['cool', 'lock', 'cook']));
console.log(commonChars(['hello', 'goodbye', 'booya', 'random']));
