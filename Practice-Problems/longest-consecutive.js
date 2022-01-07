// You are given an array of strings and an integer k. Your task is to return
// the first longest string consisting of k consecutive strings taken in
// the array.

/*

P:

You are given an array of strings and an integer k. Your task is to
return the first longest string consisting of k consecutive strings taken
in the array.

Input: An array of strings and an integer k
Output: A string

Rules:

Edge cases:
- n being the length of the string array and k being the integer:
  - if (n = 0) or (k > n) or (k <= 0) return '' (empty string).

Assuming proper input:
- return a concatenated string consisting of k consecutive strings taken
  from the array argument, that when concatenated, form the longest string
  when compared to other k consecutive concatenated strings.
- we want the first example of the longest concatenated string.
  - if there are other examples of the same length of k concatenated strings
    we still return the first example.

E:

longestConsec(
  ['hi', 'hey', 'hello', 'howdy', 'sup', 'yo'], 2) === 'hellohowdy' // true

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
    === "abigailtheta"); // true

console.log(
  longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb",
  "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true

console.log(longestConsec([], 3) === ""); // true

console.log(
  longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv",
  "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)
    === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
    // true

console.log(
  longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)
    === "wlwsasphmxxowiaxujylentrklctozmymu"); // true

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)
    === "");  // true

console.log(
  longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)
    === "ixoyx3452zzzzzzzzzzzz"); // true

console.log(
  longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)
    === ""); // true

console.log(
  longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)
    === ""); // true


D:

Arrays and strings


A:

1. Declare variable 'longestString' and initialize to 0.
2. Declare variable 'longestLocation' and initialize to empty array.
3. Declare variable 'lengthOfStringsArray' and initialize to a copy of array
argument, then call map, then transform into new array with the length of
each word element being the value in the new array.
4. Declare variable 'numberOfComparisons' and initialize to the array argument
length - integer argument, + 1.
5. Loop through 'lengthOfStringsArray' for 'numberOfComparisons' times. On each
loop:
  - Declare variable 'currentValue' and initialize to adding the current
  element with the next appropriate number of elements.
  - Compare 'currentValue' with 'longestString'.
  - Save whichever one is longer in 'longestString'.
  - If saving a new value, also save the element positions in
  'longestLocation'.
6. Return the concatenated strings at the indices saved in 'longestLocation'
that correspond to the index locations in the array argument
C:

*/

function longestConsec(array, number) {
  if (array.length === 0 || number > array.length || number <= 0) {
    return '';
  }

  let longestString = 0;
  let longestLocation = [];
  let lengthOfStringsArray = array.slice().map((word) => word.length);
  let numberOfComparisons = array.length - number + 1;

  for (let index = 0; index < numberOfComparisons; index += 1) {
    let currentValue = lengthOfStringsArray
      .slice(index, number + index)
      .reduce((acc, curr) => acc + curr);

    if (currentValue > longestString) {
      longestString = currentValue;
      longestLocation = array.slice(index, number + index);
    }
  }

  return longestLocation.join('');
}

// Test Cases
console.log(
  longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2) ===
    'abigailtheta'
);

console.log(
  longestConsec(
    [
      'ejjjjmmtthh',
      'zxxuueeg',
      'aanlljrrrxx',
      'dqqqaaabbb',
      'oocccffuucccjjjkkkjyyyeehh',
    ],
    1
  ) === 'oocccffuucccjjjkkkjyyyeehh'
);

console.log(longestConsec([], 3) === '');

console.log(
  longestConsec(
    [
      'itvayloxrp',
      'wkppqsztdkmvcuwvereiupccauycnjutlv',
      'vweqilsfytihvrzlaodfixoyxvyuyvgpck',
    ],
    2
  ) === 'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck'
);

console.log(
  longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2) ===
    'wlwsasphmxxowiaxujylentrklctozmymu'
);

console.log(
  longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2) === ''
);

console.log(
  longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3) ===
    'ixoyx3452zzzzzzzzzzzz'
);

console.log(
  longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15) === ''
);

console.log(
  longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0) === ''
);
