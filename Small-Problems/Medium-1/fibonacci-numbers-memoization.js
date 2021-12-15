// For this exercise, your objective is to refactor the recursive fibonacci
// function to use memoization.

let fibValues = {
  1: 1,
  2: 1,
};

function fibonacci(num) {
  if (num <= 2) {
    return 1;
  }

  let previous = String(num - 1);
  let firstNumber = fibonacci(num - 1);
  fibValues[previous] = firstNumber;

  let twoPrevious = String(num - 2);
  let secondNumber = fibValues[twoPrevious];

  return firstNumber + secondNumber;
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(20));
