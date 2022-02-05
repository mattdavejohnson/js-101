/*
Write Number in Expanded Form

You will be given a number and you will need to return it as a string in
Expanded Form.


PROBLEM:
=====================

Input: A number
Output: A string

Explicit Requirements:
- Return a string of the given number in expanded form
- All numbers will be whole numbers greater than 0


EXAMPLES:
=====================

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'


DATA STRUCTURES/ALGORITHM:
=====================

Number ==> Array ==> String


- START number
- DECLARE 'numStr' and initialize to number arg coerced to string
- DECLARE 'numStrSplit' and initialize to 'numStr' split into an array
- DECLARE 'result' and initialize to empty array
- ITERATE through each char of 'numStrSplit'
  - ADD current char + repeating 0's for the rest of the length to 'result'
- RETURN 'result' joined with a '+'

*/

function expandedForm(number) {
  let numStr = String(number);
  let result = [];
  let numStrSplit = numStr.split('');

  for (let index = 0; index < numStrSplit.length; index += 1) {
    let char = numStrSplit[index];
    let end = numStrSplit
      .slice(index + 1)
      .map((_) => '0')
      .join('');

    if (char === '0') {
      continue;
    }

    let num = char + end;
    result.push(num);
  }

  return result.join(' + ');
}

console.log(expandedForm(70304));
