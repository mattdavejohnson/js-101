/*

Simple Pig Latin
Move the first letter of each word to the end of it, then add "ay" to the end
of the word. Leave punctuation marks untouched.


PROBLEM:
================

Input: A string
Output: A string

Explicit Requirements:
- Move first letter of each word to end, maintain case
  - Add 'ay' to the end of the word
- Do not modify puncuation marks
- Maintain spaces


EXAMPLES:
================

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !


DATA STRUCTURES/ALGORITHM:
================

String ==> Array ==> String


- START string
- DECLARE 'wordsArray' and initialze to the string argument split into
  individual words in an array
- DECLARE 'result' and initialze to empty array
- ITERATE through 'wordsArray'
  - For each word:
    - EVALUATE if every character is a letter
      - If false, continue
      - If true, swap first letter to last and add 'ay' and ADD resulting
        word to 'result'
- RETURN 'result' joined into a string


Test if each character is a letter

- START string
- ITERATE through each character in string argument
  - EVALUATE if character is a lowercase or uppercase letter
    - If true, continue
    - If false, return false
- RETURN true

*/

function allLetters(string) {
  for (let index = 0; index < string.length; index += 1) {
    let letter = string[index];
    if ((letter >= 'a' && letter <= 'z') || (letter >= 'A' && letter <= 'Z')) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}

function pigIt(string) {
  let wordsArray = string.split(' ');
  let result = [];

  for (let index = 0; index < wordsArray.length; index += 1) {
    let word = wordsArray[index];
    if (!allLetters(word)) {
      result.push(word);
      continue;
    }

    result.push(word.slice(1) + word.slice(0, 1) + 'ay');
  }

  return result.join(' ');
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('Hello world !'));
