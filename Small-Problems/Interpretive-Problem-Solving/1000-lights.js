// Write a program that takes one argument—the total number of switches—and
// returns an array of the lights that are on after count passes.

/*

P:

Input: A number
Output: An array

Rules:
Create an array the length of the number argument and initialize every element
value to 0. Loop through the array starting count at 1. On each iteration,
begin at the element that corresponds to the current number of the index minus
one to account for arrays starting at zero. Flip the value of the starting
element from 0 to 1, or 1 to 0. Then flip all the values at the multiples of
the current index number until you reach the end of the array. Once all
iterations are complete, return an array that lists the place where the value
1 appears, signifying the light is on. Make sure to account for the zero based
array index (e.g. if array[0] === 1, you would include in the array [1],
because it is at the first location in the array).


E:

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


D:

Arrays


A:

Function to convert an array of 0s and 1s to an output array:

1. Declare variable 'result' and initialize to empty array.
2. Loop through array argument.
  - If current element is equal to 1:
    - Push index + 1 to 'result'.
  - If not, continue.
3. Return 'result'.

Lights On function:

1. Declare variable 'lights' and initialize to empty array.
2. Loop as many times as number argument.
  - Each loop, push the value 0 to 'lights'.
3. Loop with index starting at 1 and looping as many times as number argument.
  - Create a sub-loop with sub-index starting at index - 1 and looping until
    hitting the end of the array and incrementing the sub-index += index.
      - For each loop:
        - If value is 0, reassign to 1;
        - If value is 1, reassign to 0;
4. Return 'lights' passed to the format function.

C:

*/

function formatOutputArray(array) {
  let result = [];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === 1) {
      result.push(index + 1);
    }
  }

  return result;
}

function lightsOn(number) {
  let lights = [];

  for (let index = 0; index < number; index += 1) {
    lights.push(0);
  }

  for (let index = 1; index <= number; index += 1) {
    for (
      let subIndex = index - 1;
      subIndex < lights.length;
      subIndex += index
    ) {
      if (lights[subIndex] === 0) {
        lights[subIndex] = 1;
      } else {
        lights[subIndex] = 0;
      }
    }
  }

  return formatOutputArray(lights);
}

console.log(lightsOn(5));
console.log(lightsOn(100));
