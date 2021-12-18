/* eslint-disable max-lines-per-function */
/*
Write a function that displays an 8-pointed star in an NxN grid, where N is
an odd integer that is supplied as an argument to the function. The smallest
such star you need to handle is a 7x7 grid (i.e., when N is 7).
*/

function star(number) {
  let middle = Math.floor(number / 2);
  let midArr = Array(number).fill('*', 0);

  for (let index = middle; index >= 1; index -= 1) {
    let starArr = Array(number).fill(' ', 0);
    let first = middle - index;
    let last = middle + index;

    starArr[first] = '*';
    starArr[middle] = '*';
    starArr[last] = '*';

    console.log(starArr.join(''));
  }

  console.log(midArr.join(''));

  for (let index = 1; index <= middle; index += 1) {
    let starArr = Array(number).fill(' ', 0);
    let first = middle - index;
    let last = middle + index;

    starArr[first] = '*';
    starArr[middle] = '*';
    starArr[last] = '*';

    console.log(starArr.join(''));
  }
}

star(7);
star(9);
