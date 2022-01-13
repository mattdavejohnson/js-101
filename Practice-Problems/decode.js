/*
You'll be given a string of random characters (numbers, letters, and symbols).
To decode this string into the key we're searching for:
(1) count the number of occurences of each ascii lowercase letter, and
(2) return an ordered string, 26 places long, corresponding to the number of
    occurences for each corresponding letter in the alphabet.

Example:
'$aaaa#bbb*cc^fff!z' gives '43200300000000000000000001'
   ^    ^   ^  ^  ^         ^^^  ^                   ^
  [4]  [3] [2][3][1]        abc  f                   z

'z$aaa#ccc%eee1234567890' gives '30303000000000000000000001'
 ^  ^   ^   ^                    ^ ^ ^                    ^
[1][3] [3] [3]                   a c e                    z

The string returned should always be 26 characters long, and only count
lowercase letters.

You can assume that each lowercase letter will appear a maximum of 9 times
in the input str.

P:

Input: A string of random characters

Output: A string, 26 characters long, each character corresponds to the number
of occurences for each letter in the alphabet.

Rules:

Explicit:
- You are given a string of random characters.
- The return value should always be a string 26 characters long, all numbers.
- Only count lowercase letters.
- Each character in the return value corresponds to that letter in the alphabet
  - ex. first place is 'a' place, second place is 'b' place, etc.
- Assume each lowercase letter will appear max 9 times.

Implicit:
- The string could be empty.
- The string could have all caps or non-letter characters.
  - Return a string with 26 0's in the above cases.
- Can we assume only string inputs?


E:

console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
console.log(
  decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001'
);
console.log(
  decrypt('the quick brown fox jumps over the lazy dog') ===
    '11113112111111411212211111'
);
console.log(decrypt('a1b2c3D4dda') === '21120000000000000000000000');
console.log(decrypt('a1aba2aca3aDaa4dda') === '91120000000000000000000000');
console.log(decrypt('1203904942@$2') === '00000000000000000000000000');
console.log(decrypt('ABCJDK3ROKGMIS3949') === '00000000000000000000000000');
console.log(decrypt('') === '00000000000000000000000000');


D:

Array


A:

1. Declare variable 'result' and initialize to array with 26 elements of 0.
2. Declare variable 'alphabet' and initialze to string of all lowercase letters
3. Loop over input string:
  - Check if current value is a lowercase letter.
    - If no, continue.
    - If yes, check which index of the 'alphabet' string the value is located
      - Increment that index in result by 1.
4. Return result joined.

C:

*/

function decrypt(string) {
  let result = Array(26).fill(0);
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] >= 'a' && string[index] <= 'z') {
      let letter = alphabet.indexOf(string[index]);
      result[letter] += 1;
    }
  }

  return result.join('');
}

console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
console.log(
  decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001'
);
console.log(
  decrypt('the quick brown fox jumps over the lazy dog') ===
    '11113112111111411212211111'
);
console.log(decrypt('a1b2c3D4dda') === '21120000000000000000000000');
console.log(decrypt('a1aba2aca3aDaa4dda') === '91120000000000000000000000');
console.log(decrypt('1203904942@$2') === '00000000000000000000000000');
console.log(decrypt('ABCJDK3ROKGMIS3949') === '00000000000000000000000000');
console.log(decrypt('') === '00000000000000000000000000');
