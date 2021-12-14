// Rewrite your recursive fibonacci function so that it computes its results
// without using recursion.

function fibonacci(num) {
  let previous = 1;
  let twoPrevious = 1;
  let current = 1;

  for (let index = 1; index <= num; index += 1) {
    if (index <= 2) {
      continue;
    }

    current = previous + twoPrevious;
    twoPrevious = previous;
    previous = current;
  }

  return current;
}

console.log(fibonacci(20));
console.log(fibonacci(50));
console.log(fibonacci(75));
