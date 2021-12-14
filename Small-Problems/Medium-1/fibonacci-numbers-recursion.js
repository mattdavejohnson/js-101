// Write a recursive function that computes the nth Fibonacci number, where
// nth is an argument passed to the function.

function fibonacci(num) {
  if (num <= 2) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(20));
