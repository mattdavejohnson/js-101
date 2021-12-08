// Write a function that counts the number of occurrences of each element
// in a given array. Once counted, log each element alongside the number
// of occurrences.

/*

P:

Input: An array
Output: Console logs


E:

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2


D:

Arrays
Objects
Strings
Numbers


A:


1. Declare variable results and initialize to empty object.
2. Loop through passed in array.
  - If element at current index doesn't exist as a property in object:
    - Add element as a property and set the value to 1.
  - If element does exist
    - Add 1 to the value.
3. Loop through the object and console log each property and value.


C:

*/

function countOccurrences(array) {
  let results = {};

  array.forEach((word) => {
    if (!results.hasOwnProperty(word)) {
      results[word] = 1;
    } else {
      results[word] += 1;
    }
  });

  for (let [key, value] of Object.entries(results)) {
    console.log(`${key} => ${value}`);
  }
}

let vehicles = [
  'car',
  'car',
  'truck',
  'car',
  'SUV',
  'truck',
  'motorcycle',
  'motorcycle',
  'car',
  'truck',
];

countOccurrences(vehicles);
