/* eslint-disable max-lines-per-function */
/*
Modify the function from the previous exercise so it ignores non-alphabetic
characters when determining whether it should uppercase or lowercase each
letter. The non-alphabetic characters should still be included in the return
value; they just don't count when toggling the desired case.
*/

function staggeredCase(string) {
  let strArr = string.split('');
  let count = 0;

  return strArr
    .map((digit) => {
      if (
        count % 2 === 0 &&
        ((digit >= 'a' && digit <= 'z') || (digit >= 'A' && digit <= 'Z'))
      ) {
        count += 1;
        return digit.toUpperCase();
      } else if (
        count % 2 === 1 &&
        ((digit >= 'a' && digit <= 'z') || (digit >= 'A' && digit <= 'Z'))
      ) {
        count += 1;
        return digit.toLowerCase();
      } else {
        return digit;
      }
    })
    .join('');
  // return string
  //   .split('')
  //   .map((digit, index) => {
  //     if (index % 2 === 0) {
  //       return digit.toUpperCase();
  //     } else {
  //       return digit.toLowerCase();
  //     }
  //   })
  //   .join('');
}

console.log(staggeredCase('I Love Launch School!') === 'I lOvE lAuNcH sChOoL!');
console.log(staggeredCase('ALL CAPS') === 'AlL cApS');
console.log(
  staggeredCase('ignore 77 the 444 numbers') === 'IgNoRe 77 ThE 444 nUmBeRs'
);
