// Pick out the minimum age from the object

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let values = Object.values(ages);

let lowest = Math.min(...values);

console.log(lowest);