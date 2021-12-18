// Write a function that displays a four-pointed diamond in an n x n grid,
// where n is an odd integer supplied as an argument to the function.

function diamonds(number) {
  for (let index = 1; index <= number; index += 2) {
    let sides = (number - index) / 2;
    console.log(' '.repeat(sides) + '*'.repeat(index) + ' '.repeat(sides));
  }

  for (let index = number - 2; index >= 1; index -= 2) {
    let sides = (number - index) / 2;
    console.log(' '.repeat(sides) + '*'.repeat(index) + ' '.repeat(sides));
  }
}

diamonds(1);
diamonds(3);
diamonds(9);
