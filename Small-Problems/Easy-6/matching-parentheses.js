// Write a function that takes a string as an argument and returns true if
// all parentheses in the string are properly balanced, false otherwise.

function isBalanced(string) {
  let count = 0;

  for (let index = 0; index < string.length; index += 1) {
    if (count < 0) {
      return false;
    }

    if (string[index] === '(') {
      count += 1;
    } else if (string[index] === ')') {
      count -= 1;
    }
  }

  return count === 0;
}

console.log(isBalanced('What (is) this?') === true);
console.log(isBalanced('What is) this?') === false);
console.log(isBalanced('What (is this?') === false);
console.log(isBalanced('((What) (is this))?') === true);
console.log(isBalanced('((What)) (is this))?') === false);
console.log(isBalanced('Hey!') === true);
console.log(isBalanced(')Hey!(') === false);
console.log(isBalanced('What ((is))) up(') === false);
