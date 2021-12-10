// Write a function that takes two arguments, an inventory item ID and a list
// of transactions, and returns an array containing only the transactions for
// the specified inventory item.

/*

P:

Input: An array of objects.
Output: An array of objects.


E:

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]


D:

Arrays
Objects
Numbers


A:

1. Declare variable result and initialize to empty array.
2. Loop through array argument.
  - If number ID argument exists in current object element:
    - Push object element to result.
3. Return result.


C:

*/

function transactionsFor(number, array) {
  let result = array.filter((obj) => {
    return obj['id'] === number;
  });

  // array.forEach((obj) => {
  //   if (obj['id'] === number) {
  //     result.push(obj);
  //   }
  // });

  return result;
}

let transactions = [
  { id: 101, movement: 'in', quantity: 5 },
  { id: 105, movement: 'in', quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in', quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in', quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in', quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },
];

console.log(transactionsFor(101, transactions));
