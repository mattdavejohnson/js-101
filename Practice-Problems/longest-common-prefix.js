/*

P

Write a function to find the longest common prefix string amongst an array
of strings. If no common prefix, return an empty string.

Input: An array of strings
Output: A string

Rules:
- Accept an array of strings
- Find longest common prefix and return
  - If none, return empty string
- All inputs are lowercase letters


E

longestCommonPrefix(['flower', 'flow', 'flight']);
'fl'

longestCommonPrefix(['dog', 'racecar', 'car']);
''


D

Arrays


A

- Get all substrings from each string that start with the first letter.
  - Save in arrays
- Create 'result' and init to '';
- Loop through one array. For each substring:
  - Check if it exists in other arrays.
    - If yes, reassign 'result' to substring.
    - If no, break.
- Return 'result'.


Create function to get all substrings starting with first letter

1. Accept string arg
2. Declare 'result' init to empty array
3. For loop starting at 1 and ending at string.length
  - slice the string at 0 and index and push to 'result'
4. Return 'result'


Create function to check if current substring exists in every subarray passed
in.

1. Accept substring arg and array of subarrays with strings
2. Iterate through array, for each subarray:
  - Test if substring arg exists in subarray.
    - If yes, continue
    - If no, return false
3. Return true


Main function

1. Declare 'longestPrefix' and init to empty string.
2. Sort array shortest to longest
3. Declare 'shortestWord' and init to substrings with first array element
removed from array.
4. Call map on array, return value of current word passed into substrings
5. Iterate through 'shortestWord', for each substring:
  - Check if it exists in every subarray in array.
    - If yes, reassign 'longestPrefix' to current substring.
    - If no, break.
6. Return 'longestPrefix'


C

*/

function existsInAll(substring, array) {
  for (let index = 0; index < array.length; index += 1) {
    let currentSubarray = array[index];

    if (currentSubarray.includes(substring)) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}

function substrings(string) {
  let result = [];

  for (let index = 1; index <= string.length; index += 1) {
    result.push(string.slice(0, index));
  }

  return result;
}

function longestCommonPrefix(array) {
  let longestPrefix = '';
  array = array.sort((a, b) => a.length - b.length);
  let shortestWord = substrings(array.splice(0, 1)[0]);

  array = array.map((word) => substrings(word));

  for (let index = 0; index < shortestWord.length; index += 1) {
    let currentSubstring = shortestWord[index];

    if (existsInAll(currentSubstring, array)) {
      longestPrefix = currentSubstring;
    } else {
      break;
    }
  }

  return longestPrefix;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['howdy', 'howsit', 'howdydoody']));
